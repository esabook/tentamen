import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/useAuth.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, authLoading, signin } = useAuthStore();

  useEffect(() => {
    if (!authLoading && isAuthenticated) {
      navigate('/home', { replace: true });
      console.log('User already authenticated, redirecting to dashboard.');
    }
  }, [isAuthenticated, authLoading, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signin(username, password);
      if (isAuthenticated) {
        navigate(location.state?.from?.pathname || '/home', {
          replace: true,
        });
      }
      
    } catch (err) {
      console.error('Login error:', err);
      setError('Login gagal. Cek username/password.');
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <LoadingSpinner />
      </div>
    );
  }

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
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className="input input-bordered w-full"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <div className="alert alert-error mb-2">{error}</div>}
          <button className="btn btn-primary w-full" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
