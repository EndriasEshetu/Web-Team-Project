import { useState } from "react";
import { useLogin } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, ArrowLeft, HeartPulse, Activity } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const loginMutation = useLogin();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate({ email, password, rememberMe });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      {/* Left side - Stunning Medical Illustration/Background (matching Register page layout) */}
      <div className="hidden lg:flex lg:w-1/2 bg-teal-600 relative overflow-hidden items-center justify-center">
        {/* Beautiful high-end modern healthcare image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay opacity-25"></div>
        {/* Rich gradient blend */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/95 via-teal-700/90 to-blue-800/95 mix-blend-multiply"></div>
        
        {/* Immersive left-side content */}
        <div className="relative z-10 max-w-lg text-center px-12 space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md mb-4 border border-white/20 shadow-2xl animate-pulse">
            <HeartPulse className="text-white" size={40} />
          </div>
          <h3 className="text-4xl font-extrabold text-white leading-tight tracking-tight">
            Welcome to HealthCare
          </h3>
          <p className="text-teal-50 text-lg leading-relaxed font-light">
            Securely log in to manage your appointments, check your medical records, and consult with our expert medical team.
          </p>
          
          {/* Glassmorphic decorative info badge */}
          <div className="mt-8 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left flex items-center gap-4 max-w-sm mx-auto shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center shrink-0">
              <Activity className="text-teal-200" size={20} />
            </div>
            <div>
              <p className="text-white text-xs font-semibold uppercase tracking-wider">Health Portal</p>
              <p className="text-teal-100 text-sm">24/7 Access to secure patient care.</p>
            </div>
          </div>
        </div>
        
        {/* Dynamic backdrop glows */}
        <div className="absolute top-0 left-0 -ml-32 -mt-32 w-96 h-96 rounded-full bg-white opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 -mr-32 -mb-32 w-96 h-96 rounded-full bg-blue-300 opacity-20 blur-3xl"></div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 md:px-24 xl:px-32 relative py-12">
        {/* Back navigation button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-8 right-8 sm:right-16 flex items-center gap-2 text-slate-500 hover:text-teal-600 transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
          <span className="text-sm font-semibold">Back to Home</span>
        </button>

        <div className="w-full max-w-md mx-auto space-y-8">
          {/* Form Header */}
          <div className="text-center lg:text-left space-y-2">
            <div className="flex justify-center lg:justify-start mb-6 lg:hidden">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                <HeartPulse className="text-teal-600" size={28} />
              </div>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Sign In</h2>
            <p className="text-slate-500 text-sm">
              Please enter your details to access your secure panel.
            </p>
          </div>

          {/* Form Error Alert */}
          {loginMutation.isError && (
            <div className="p-4 text-sm text-red-600 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-3 shadow-sm animate-shake">
              <Activity className="shrink-0 mt-0.5" size={16} />
              <span>{loginMutation.error.response?.data?.message || "An error occurred during sign in. Please try again."}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-slate-700">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
                </div>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 text-slate-800 placeholder-slate-400 transition-all shadow-sm"
                  placeholder="endrias@gmail.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="block text-sm font-semibold text-slate-700">Password</label>
                <a
                  href="#"
                  className="text-xs font-semibold text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
                </div>
                <input
                  name="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-11 pr-11 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 text-slate-800 placeholder-slate-400 transition-all shadow-sm"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-slate-400 hover:text-slate-600 transition-colors" />
                  ) : (
                    <Eye className="h-5 w-5 text-slate-400 hover:text-slate-600 transition-colors" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center text-sm">
              <label className="flex items-center space-x-2 cursor-pointer text-slate-600 hover:text-slate-800 transition-colors">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500 focus:ring-offset-0"
                />
                <span className="font-medium">Remember me</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loginMutation.isPending}
              className="w-full py-3.5 font-bold text-white bg-teal-600 rounded-xl hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-500/20 active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100 transition-all shadow-lg shadow-teal-600/20"
            >
              {loginMutation.isPending ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Registration Redirect Link */}
          <p className="text-sm text-center text-slate-500">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-bold text-teal-600 hover:text-teal-700 transition-colors"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
