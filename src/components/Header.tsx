import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary py-4 px-6 fixed w-full top-0 z-50 backdrop-blur-sm bg-opacity-90"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-secondary text-2xl font-bold tracking-wider"
        >
          DiagramCraft
        </motion.div>
        
        <div className="flex gap-8">
          <NavLink href="/create">Создать диаграмму</NavLink>
          <NavLink href="/tips">Подсказки</NavLink>
        </div>
      </nav>
    </motion.header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link 
      to={href}
      className="text-secondary hover:text-accent transition-colors duration-300 text-lg"
    >
      {children}
    </Link>
  </motion.div>
);