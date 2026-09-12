import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Mail, Eye, EyeOff, ArrowRight, Sparkles, KeyRound, CheckCircle2, AlertCircle } from 'lucide-react';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { Logo } from '../../components/Logo';

export const AdminLoginPage: React.FC = () => {
  const { login } = useAdminAuth();
  const [identity, setIdentity] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    setTimeout(() => {
      const res = login(identity, password, rememberMe);
      setIsLoading(false);
      if (!res.success) {
        setError(res.error || 'Authentication failed.');
      }
    }, 400);
  };

  const handleDemoFill = () => {
    setIdentity('ukyatra123');
    setPassword('ukyatra321');
    setError(null);
  };

  return (
    <div className="min-h-screen bg-[#0B1120] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden py-12">
      {/* Mountain Glow Ambient Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md relative z-10 space-y-6">
        {/* Top Header & Logo */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/10 shadow-xl mb-2 backdrop-blur-md">
            <Logo size="md" />
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Master Management Portal</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
            Administrator Sign In
          </h1>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Access bookings, customer enquiries, package catalogs, and live Himalayan advisory controls.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          {error && (
            <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-2.5 text-rose-300 text-xs animate-shake">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Staff Email or Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={identity}
                  onChange={(e) => setIdentity(e.target.value)}
                  placeholder="ukyatra123"
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/80 border border-slate-700/80 rounded-xl text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-brand-orange focus:bg-slate-800 transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Access Passcode
                </label>
                <button
                  type="button"
                  onClick={handleDemoFill}
                  className="text-[11px] font-semibold text-brand-orange hover:text-brand-orangeHover hover:underline flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Auto-fill Demo</span>
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-11 py-3 bg-slate-800/80 border border-slate-700/80 rounded-xl text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-brand-orange focus:bg-slate-800 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-200 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded bg-slate-800 border-slate-700 text-brand-orange focus:ring-0 focus:ring-offset-0"
                />
                <span className="text-xs text-slate-300 font-medium">Keep me signed in</span>
              </label>

              <span className="text-[11px] text-slate-500 font-mono">
                Pass: ukyatra321
              </span>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full orange-gradient-btn py-3.5 rounded-xl font-display font-bold text-xs text-white shadow-lg shadow-brand-orange/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Sign In to Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Credentials Help */}
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs space-y-1">
            <div className="font-semibold text-white flex items-center gap-1.5 text-[11px] text-amber-400">
              <KeyRound className="w-3.5 h-3.5" />
              <span>Administrator Access Credentials</span>
            </div>
            <div className="font-mono text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-2 pt-0.5">
              <span>User: <strong className="text-slate-200">ukyatra123</strong></span>
              <span>Pass: <strong className="text-slate-200">ukyatra321</strong></span>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center">
          <Link
            to="/"
            className="text-xs text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            <span>← Return to UKYatra Public Website</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
