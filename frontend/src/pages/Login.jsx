import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { authStore } from '../store/authStore';
import Loading from '../components/Loading.jsx';
import { DynamicIcon } from 'lucide-react/dynamic';
import { cn } from '../lib/utils.js';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card.js';
import { Input } from '../components/ui/input.js';
import { Label } from '../components/ui/label.js';
import { Button } from '../components/ui/button.js';
import { ToggleTheme } from '../components/sidebar/toggle-theme.js';

export default function Login({ className, ...props }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [myError, setMyError] = useState('');
  const navigate = useNavigate();
  const { isAuthenticated, authLoading, error, signin } = authStore();
  
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home', { replace: true });
    }

    if (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        'Login gagal. Periksa kembali username dan password Anda.';
      setMyError(errorMessage);
    }
  }, [isAuthenticated, navigate, error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMyError('');
    try {
      signin(username, password);
    } catch (err) {
      console.error('Login error:', err.message);
      setMyError(err.message);
    }
  };

  console.log('Login authLoading', authLoading);

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex items-stretch justify-center mb-10">
          <img id="logo" src="tentamen-logo-text.svg" alt="logo" className="h-8 w-auto" />
        </div>
        <div className={cn('flex flex-col gap-6', className)} {...props}>
          <Card>
            <CardHeader>
              <CardTitle>Login ke akun anda</CardTitle>
              <CardDescription>Masukkan username untuk login ke akun anda</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="email">Username</Label>
                    <Input
                      id="username"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid gap-3">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                    </div>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="peer block w-full rounded-md border py-[9px] pr-10 text-sm"
                        required
                      />
                      <button
                        type="button"
                        className="absolute right-0 flex items-center pr-3 -translate-y-1/2 top-1/2 gap-x-1"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <DynamicIcon
                          name={showPassword ? 'eye' : 'eye-closed'}
                          className="h-5 w-5 text-primary-foreground"
                        />
                      </button>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-destructive">{myError}</span>
                  <div className="flex flex-col gap-3">
                    <Button type="submit" className="w-full" disabled={authLoading}>
                      {authLoading ? <Loading /> : ''}
                      Login
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          <ToggleTheme />
        </div>
      </div>
    </div>
  );
}
