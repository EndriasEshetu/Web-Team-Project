import { useState } from "react";
import { Menu, X, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0a1120]/75 backdrop-blur-lg border-b border-slate-800/80 shadow-md py-4 px-6 md:px-8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-teal-500/10 border border-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/20 transition-all duration-300">
            <HeartPulse className="text-teal-400" size={24} />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            Health<span className="text-teal-400">Care</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/login" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            Login
          </Link>
          <Link to="/register" className="text-sm font-semibold text-white bg-teal-600 hover:bg-teal-500 px-6 py-2.5 rounded-xl shadow-lg shadow-teal-600/25 hover:shadow-teal-500/35 transition-all hover:-translate-y-0.5">
            Register
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 p-2 hover:bg-slate-800 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#0b132b] border-l border-slate-800 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center">
                <HeartPulse className="text-teal-400" size={20} />
              </div>
              <span className="font-bold text-white">Menu</span>
            </div>
            <button
              className="text-slate-400 p-2 hover:bg-slate-800 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 p-5 space-y-3">
            <Link
              to="/login"
              className="block w-full text-center text-slate-300 hover:text-white font-semibold py-3 px-4 rounded-xl hover:bg-slate-800 transition-colors border border-slate-800"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="block w-full text-center text-white bg-teal-600 font-semibold py-3 px-4 rounded-xl hover:bg-teal-500 transition-colors shadow-lg shadow-teal-600/20"
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
