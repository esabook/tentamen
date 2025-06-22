import React from "react";

/**
 * Fullscreen loading overlay, transparan, menutupi seluruh halaman.
 * @param {Object} props
 * @param {boolean} props.show - apakah loading tampil
 * @param {function} [props.onDismiss] - fungsi untuk dismiss overlay (opsional)
 */
export default function FullscreenLoading({ show }) {
  if (!show) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      style={{ transition: "opacity 0.2s" }}
      role="presentation"
    >
      <div
        className="flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="loading loading-spinner loading-lg text-primary" />
      </div>
    </div>
  );
}
