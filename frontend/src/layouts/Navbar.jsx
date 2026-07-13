import {
  Target,
  BookOpenText,
  LayoutDashboard,
  Bell,
  ChevronDown,
  Menu
} from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import avatar from "../assets/avatar.jpg";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ user }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const displayFullName = (fullName) => {
    const parts = fullName?.trim().split(' ').filter(Boolean) ?? [];
    return parts.slice(0, 2).map((part) => part.charAt(0)).join('');
  }

  const handleProfile = () => {
    setIsUserMenuOpen(false);
    navigate('/settings');
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsUserMenuOpen(false);
    navigate('/login');
  }

  const baseClasses = "flex items-center px-4 py-2  text-primary rounded-lg duration-200";
  return (
    <header className="flex items-center justify-between h-20 border-b border-gray-200 px-4 lg:px-8">
      
      <div className="flex items-center lg:hidden">
        <Menu className="w-6 h-6" />
      </div>

      <div className="flex items-center lg:hidden">
        <FontAwesomeIcon icon={faRocket} className="text-primary text-xl" />
        <span className="ml-2 font-bold text-[18px]">SkillTrack</span>
      </div>

      <ul className="hidden lg:flex items-center list-none gap-8">
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => `${baseClasses} ${isActive ? 'bg-violet-100 text-indigo-700 shadow-sm' : 'flex items-center px-4 py-2 hover:bg-[#f4f4fe]'}`}
          >
            <LayoutDashboard className="mr-2 w-5 h-5" />
            <span className="text-[14px]">Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/skills'
            className={({ isActive }) => `${baseClasses} ${isActive ? 'bg-violet-100 text-indigo-700 shadow-sm' : 'hover:bg-violet-50 hover:text-indigo-700'}`}
          >
            <BookOpenText className="mr-2 w-5 h-5" />
            <span className="text-[14px]">Compétences</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/goals"
            className={({ isActive }) => `${baseClasses} ${isActive ? 'bg-violet-100 text-indigo-700 shadow-sm' : 'hover:bg-violet-50'}`}
          >
            <Target className="mr-2 w-5 h-5" />
            <span className="text-[14px]"> Objectifs</span>
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center">
        <Bell className="mr-4 lg:mr-10 w-5 h-5" />

        <div className="relative flex items-center">

          <button
            type="button"
            className="hidden items-center gap-2 lg:flex"
            onClick={() => setIsUserMenuOpen((isOpen) => !isOpen)}
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 p-2 text-sm font-bold text-black">
              {displayFullName(user?.name) || 'U'}
            </span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {isUserMenuOpen && (
            <div className="absolute right-0 top-12 z-20 w-36 rounded-lg border border-gray-200 bg-white p-2 shadow-lg">
              <button
                type="button"
                className="w-full rounded-md px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100"
                onClick={handleProfile}
              >
                Profile
              </button>
              <button
                type="button"
                className="w-full rounded-md px-3 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
