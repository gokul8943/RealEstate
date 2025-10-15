import { useState } from 'react';
import { Home, Search, Heart, User, Menu, X, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex gap-6">
            <a href="#" className="flex items-center gap-2 hover:text-blue-400 transition">
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-blue-400 transition">
              <Mail size={16} />
              <span>info@realestate.com</span>
            </a>
          </div>
          <div className="hidden md:flex gap-4">
            <a href="#" className="hover:text-blue-400 transition">Login</a>
            <span>|</span>
            <a href="#" className="hover:text-blue-400 transition">Register</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Home className="text-blue-600" size={32} />
            <span className="text-2xl font-bold text-slate-900">
              Find<span className="text-blue-600">Deal</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition">
              Home
            </a>
            <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition">
              Buy
            </a>
            <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition">
              Rent
            </a>
            <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition">
              Sell
            </a>
            <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition">
              Properties
            </a>
            <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition">
              Agents
            </a>
            <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition">
              About
            </a>
            <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition">
              Contact
            </a>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 hover:bg-slate-100 rounded-lg transition">
              <Search className="text-slate-700" size={20} />
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-lg transition">
              <Heart className="text-slate-700" size={20} />
            </button>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition flex items-center gap-2">
              <User size={18} />
              Account
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition py-2">
                Home
              </a>
              <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition py-2">
                Buy
              </a>
              <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition py-2">
                Rent
              </a>
              <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition py-2">
                Sell
              </a>
              <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition py-2">
                Properties
              </a>
              <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition py-2">
                Agents
              </a>
              <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition py-2">
                About
              </a>
              <a href="#" className="text-slate-700 hover:text-blue-600 font-medium transition py-2">
                Contact
              </a>
              <div className="flex gap-3 pt-4 border-t">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition">
                  Account
                </button>
                <button className="p-2.5 border border-slate-300 rounded-lg hover:bg-slate-100 transition">
                  <Search size={20} />
                </button>
                <button className="p-2.5 border border-slate-300 rounded-lg hover:bg-slate-100 transition">
                  <Heart size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}