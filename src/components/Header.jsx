import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCode, FiBook, FiPlay, FiHome } = FiIcons;

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: FiHome, label: 'Home' },
    { path: '/tutorials', icon: FiBook, label: 'Tutorials' },
    { path: '/playground', icon: FiPlay, label: 'Playground' }
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <SafeIcon icon={FiCode} className="w-8 h-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">CodeLearn</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                <SafeIcon icon={item.icon} className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
          
          <div className="md:hidden">
            <button className="p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-50">
              <SafeIcon icon={FiIcons.FiMenu} className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;