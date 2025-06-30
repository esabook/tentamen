import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { authStore } from "../store/authStore.jsx";
import Loading from "../components/Loading.jsx";
import { DynamicIcon } from "lucide-react/dynamic";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, authLoading, signin } = authStore();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(location.state?.from?.pathname || "/home", {
        replace: true,
      });
      console.log("User already authenticated, redirecting to /home.");
    }
  }, [isAuthenticated, navigate, location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signin(username, password);

      if (error) {
        setError(error);
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(err);
    }
  };

  console.log("Login authLoading", authLoading);

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl p-8 border border-base-200">
        <h2 className="card-title mb-6 text-center text-2xl font-bold text-primary">
          Login Admin CBT
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="input input-bordered w-full"
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label className="input input-bordered w-full">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <DynamicIcon
                  name="eye"
                  className="h-5 w-5 text-base-content/40"
                />
              ) : (
                <DynamicIcon
                  name="eye-closed"
                  className="h-5 w-5 text-base-content/40"
                />
              )}
            </button>
          </label>
          {error && <div className="alert alert-error mb-2">{error}</div>}
          <button className="btn btn-primary w-full" type="submit">
            {authLoading ? <Loading /> : ""}
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
