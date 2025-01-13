import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Header = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 
           (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <motion.div
      className="nav-link-container perspective-wrapper"
      whileHover={{ scale: 1.05 }}
    >
      <Link 
        to={href}
        className="nav-link-rotating"
      >
        {children}
      </Link>
    </motion.div>
  );

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="bg-primary py-4 px-6 fixed w-full top-0 z-50 backdrop-blur-sm bg-opacity-90"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-secondary text-2xl font-bold tracking-wider"
        >
          DiagramCraft
        </motion.div>
        
        <motion.div 
          className="flex gap-8 items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <NavLink href="/create">Создать диаграмму</NavLink>
          <NavLink href="/tips">Подсказки</NavLink>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="text-secondary hover:text-accent transition-colors duration-300"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </motion.button>
        </motion.div>
      </nav>
    </motion.header>
  );
};