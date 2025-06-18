/**
 * log incoming query/url, crash report
 */

// import Sentry from "@sentry/node";
// import * as firebase from "firebase-admin";
import fs from "fs";

// Sentry setup (isi DSN dari env jika ingin aktif)
if (process.env.SENTRY_DSN) {
  Sentry.init({ dsn: process.env.SENTRY_DSN });
}

// Firebase Crashlytics setup (isi credential dari env jika ingin aktif)
if (process.env.FIREBASE_PROJECT_ID && !firebase.apps.length) {
  firebase.initializeApp({
    credential: firebase.credential.applicationDefault(),
    projectId: process.env.FIREBASE_PROJECT_ID,
  });
}

// Simple file logger fallback
const logToFile = (msg) => {
  const logMsg = `[${new Date().toISOString()}] ${msg}\n`;
  fs.appendFile("server.log", logMsg, (err) => {
    if (err) console.error("Failed to write log:", err);
  });
};

export const logMiddleware = (req, res, next) => {
  const logMsg = `${req.method} ${req.originalUrl} - IP: ${req.ip}`;
  // Log to file
  logToFile(logMsg);
  // Log to Sentry (breadcrumb)
  if (process.env.SENTRY_DSN) {
    Sentry.addBreadcrumb({
      category: "request",
      message: logMsg,
      level: "info",
    });
  }
  next();
};

// Crash/error handler middleware
export const errorLogger = (err, req, res, next) => {
  // Log error to file
  logToFile(`ERROR: ${err.stack || err}`);

  // Log error to Sentry
  if (process.env.SENTRY_DSN) {
    Sentry.captureException(err);
  }

  // Log error to Firebase Crashlytics
  if (process.env.FIREBASE_PROJECT_ID && firebase.apps.length) {
    try {
      const crashlytics = firebase.crashlytics();
      crashlytics.log(err.stack || err.toString());
      crashlytics.recordError(err);
    } catch (e) {
      logToFile(`ERROR logging to Firebase Crashlytics: ${e}`);
    }
  }

  // Send response to client
  res
    .status(500)
    .json({ message: "Internal server error", error: err.message });
};

// Rekomendasi lain: Winston, LogRocket, Datadog, atau Papertrail untuk log production enterprise.
