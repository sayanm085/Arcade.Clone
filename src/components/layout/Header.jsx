import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu';

import { FiMonitor, FiMenu, FiX } from 'react-icons/fi';
import { AiFillApple } from 'react-icons/ai';
import {
  FaPuzzlePiece, FaChartLine, FaUserCog, FaThLarge, FaFigma, FaBook, FaGraduationCap
} from 'react-icons/fa';
import { MdCampaign } from 'react-icons/md';
import {
  PiCursorLight, PiChartPieSliceBold, PiSquaresFourLight
} from 'react-icons/pi';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { TbNote } from 'react-icons/tb';

const features = [
  {
    icon: <FaPuzzlePiece className="w-5 h-5 text-gray-700" />,
    title: "Product Overview",
    desc: "Effortlessly beautiful demos",
    to: "/overview",
  },
  {
    icon: <FaChartLine className="w-5 h-5 text-gray-700" />,
    title: "Lead Generation",
    desc: "Drive demand and pipeline",
    to: "/lead-generation",
  },
  {
    icon: <FaUserCog className="w-5 h-5 text-gray-700" />,
    title: "Personalization",
    desc: "Tailored storytelling at scale",
    to: "/personalization",
  },
  {
    icon: <FaThLarge className="w-5 h-5 text-gray-700" />,
    title: "Integrations",
    desc: "Connect Arcade with other tools",
    to: "/integrations",
  },
];

const tools = [
  {
    icon: <FiMonitor className="w-5 h-5 text-gray-700" />,
    title: "Browser Extension",
    desc: "Capture from your browser",
    to: "/extension",
  },
  {
    icon: <AiFillApple className="w-5 h-5 text-gray-700" />,
    title: "Desktop App",
    desc: "Capture multiple apps at once",
    to: "/desktop-app",
  },
  {
    icon: <FaFigma className="w-5 h-5 text-gray-700" />,
    title: "Figma Plugin",
    desc: "Turn your designs into demos",
    to: "/figma-plugin",
  },
];

const solutions = [
  {
    icon: <MdCampaign className="w-7 h-7 text-gray-700" />,
    title: "Marketing",
    desc: "From passive to interactive storytelling",
    to: "/solutions/marketing",
  },
  {
    icon: <PiCursorLight className="w-7 h-7 text-gray-700" />,
    title: "Product",
    desc: "Demo-driven development",
    to: "/solutions/product",
  },
  {
    icon: <PiChartPieSliceBold className="w-7 h-7 text-gray-700" />,
    title: "Sales",
    desc: "Better conversations ahead",
    to: "/solutions/sales",
  },
];

const resourcesLeft = [
  {
    icon: <FaBook className="w-6 h-6 text-gray-700" />,
    title: "Blog",
    desc: "The latest in all things interactive demos",
    to: "/blog",
  },
  {
    icon: <FaGraduationCap className="w-6 h-6 text-gray-700" />,
    title: "Knowledge Base",
    desc: "Unlock your creativity and learning",
    to: "/knowledge-base",
  },
  {
    icon: <TbNote className="w-6 h-6 text-gray-700" />,
    title: "Changelog",
    desc: "What's new in Arcade",
    to: "/changelog",
  },
  {
    icon: <PiSquaresFourLight className="w-6 h-6 text-gray-700" />,
    title: "Showcase",
    desc: "See best-in-class examples",
    to: "/showcase",
  },
  {
    icon: <HiOutlineChatBubbleLeftRight className="w-6 h-6 text-gray-700" />,
    title: "Case studies",
    desc: "Stories from leading customers",
    to: "/case-studies",
  },
];

const resourcesRight = [
  {
    title: "7 Stages of Selling",
    desc: "How Interactive Demos Can Transform Your Sales Process",
    to: "/blog/7-stages-of-selling",
    bg: "bg-[url('/bg/cursor-grid.png')] bg-cover bg-no-repeat bg-right-top",
    cursor: "/cursors/cursor-arrow.png",
  },
  {
    title: "How Zapier Increased Booked Meetings by 70% with Arcade",
    desc: "",
    to: "/case-studies/zapier",
    logo: "https://avatars.githubusercontent.com/u/124599?v=4",
    avatar: "https://avatars.githubusercontent.com/u/124599?v=4",
    bg: "bg-gradient-to-br from-white via-white to-blue-100",
  },
];

const mobileNavVariants = {
  closed: { x: '100%' },
  open: { x: 0 }
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none`}
        style={{ minHeight: '56px' }}
      >
        <div
          className={` w-full h-full  ${isScrolled? 'max-w-[1200px] bg-transparent' : 'w-full bg-white'}` }>
        <div
          className={`
            pointer-events-auto
            transition-all duration-300
            w-full
            max-w-[1200px]
            mx-auto
            flex items-center justify-between
            px-2 sm:px-4 md:px-8 py-3
            border
            border-transparent
            ${isScrolled ? 'rounded-2xl mt-6 bg-white shadow-md  border-gray-100' : 'bg-white  mt-0'}
          `}
          style={{ backdropFilter: isScrolled ? '0 4px 24px 0 rgba(20,30,60,0.08)' : 'none'
            
          }}
        >
          {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <motion.div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <motion.span
                  className="text-2xl font-extrabold text-white flex items-center"
                  whileHover={{ scale: 1.05 }}
                >L</motion.span>
              </motion.div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">LegalPro</h1>
                <p className="text-xs text-gray-600">Legal Excellence</p>
              </div>
            </Link>
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-gray-700 font-medium flex-1 justify-center">
            <Link to="/Services" className="hover:text-black transition-colors whitespace-nowrap">Services</Link>
            <Link to="/Careers" className="hover:text-black transition-colors whitespace-nowrap">Careers</Link>
            <Link to="/About" className="hover:text-black transition-colors whitespace-nowrap">About</Link>
            <Link to="/Contact" className="hover:text-black transition-colors whitespace-nowrap">Contact</Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-5 ml-8">
            <Link to="/login">
              <Button variant="outline" size="lg">Log in</Button>
            </Link>
            <Link to="/Contact">
              <Button size="lg">Get Consultation</Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer hidden">
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link to="/dashboard" className="w-full">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/settings" className="w-full">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button className="w-full text-left">Logout</button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Hamburger for Mobile */}
          <div className="lg:hidden flex items-center ml-auto">
            <button
              aria-label="Open menu"
              className="p-2 rounded-md focus:outline-none"
              onClick={() => setMobileMenuOpen(true)}
            >
              <FiMenu size={28} />
            </button>
          </div>
        </div>

        </div>

      </motion.header>

      {/* Mobile Side Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.aside
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileNavVariants}
            transition={{ type: "spring", stiffness: 330, damping: 30 }}
            className="fixed top-0 right-0 z-50 w-[85vw] max-w-xs h-screen bg-white shadow-2xl flex flex-col py-2 px-4 lg:hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <Link to="/" className="text-2xl font-extrabold text-black" onClick={() => setMobileMenuOpen(false)}>
                ARCADE
              </Link>
              <button
                aria-label="Close menu"
                className="p-2 rounded-md focus:outline-none"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FiX size={28} />
              </button>
            </div>
            <nav className="flex flex-col gap-2 pt-1 text-gray-700 font-medium">
              <Link to="/services" className="py-2 px-2 rounded hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                Services
              </Link>
              <Link to="/careers" className="py-2 px-2 rounded hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                Careers
              </Link>
              <Link to="/about" className="py-2 px-2 rounded hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link to="/contact" className="py-2 px-2 rounded hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>

              {/* Auth Buttons */}
              <div className="flex flex-col gap-2 mt-4">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" size="lg" className="w-full">Log in</Button>
                </Link>
                <Link to="/Contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button size="lg" className="w-full">Get Consultation</Button>
                </Link>
              </div>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;