import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppProvider";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { HiOutlineMenu } from "react-icons/hi";

import "/node_modules/flag-icons/css/flag-icons.min.css";

const Navbar = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const { language, changeLang } = useAppContext();
  const [open, setOpen] = useState(false);
  const [LangButtonOpen, setLangButtonOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toogleDropdown = () => {
    setLangButtonOpen(!LangButtonOpen);
  }

  const handleLanguageChange = (lang: string) => {
    changeLang(lang);
    setLangButtonOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";

  return (
    <nav className={`shadow-md p-4 fixed w-full top-0 z-10 duration-300 ${isHomePage ? (isScrolled || isHovered ? "bg-primary shadow-lg" : "bg-transparent shadow-none") : "bg-primary shadow-lg"} ${isHomePage ? "fixed" : "relative"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mx-auto max-w-7xl flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">ZionFarmland</Link>
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <HiOutlineMenu className="text-white h-6 w-6" />
        </button>
        <div className={`hidden md:flex space-x-6 absolute md:static w-full md:w-auto transition-all ${open ? "block" : "hidden"}`}>
          <ul className="md:flex space-x-6 absolute md:static w-full md:w-auto transition-all text-white">
            <li><Link to="/" className="block py-2 px-4 ">{t('nav.home')}</Link></li>
            <li><Link to="/product" className="block py-2 px-4 ">{t('nav.products')}</Link></li>
            <li><Link to="/service" className="block py-2 px-4 ">{t('nav.services')}</Link></li>
            <li><Link to="/about" className="block py-2 px-4">{t('nav.about')}</Link></li>
            <li><Link to="/contact" className="block py-2 px-4">{t('nav.contact')}</Link></li>
          </ul>
          <div className="relative md:flex items-center cursor-pointer"
            onClick={toogleDropdown}
          >
            <GlobeAltIcon
              className="h-6 w-6 text-white cursor-pointer"
            />
            <span className="ml-0.5 text-white">
              {language === 'en' ? 'EN' : language === 'la' ? 'ລາວ' : '中文'}
            </span>
            {LangButtonOpen && (
              <div className="absolute top-8 right-0 mt-2 w-40 bg-white border border-amber-50 rounded shadow-lg z-10">
                <ul className="p-2">
                  <li
                    className={`cursor-pointer p-2 ${language === 'la' ? 'bg-gray-100' : ''}`}
                    onClick={() => handleLanguageChange('la')}
                  >
                    <div className="flex items-center">
                      <span className="fi fi-la"></span>
                      <span className="ml-4">{t('nav.Lao')}</span>
                    </div>
                  </li>
                  <li
                    className={`cursor-pointer p-2 ${language === 'en' ? 'bg-gray-100' : ''}`}
                    onClick={() => handleLanguageChange('en')}
                  >
                    <div className="flex items-center">
                      <span className="fi fi-us"></span>
                      <span className="ml-4">{t('nav.English')}</span>
                    </div>
                  </li>
                  <li
                    className={`cursor-pointer p-2 ${language === 'cn' ? 'bg-gray-100' : ''}`}
                    onClick={() => handleLanguageChange('cn')}
                  >
                    <div className="flex items-center">
                      <span className="fi fi-cn"></span>
                      <span className="ml-4">{t('nav.Chinese')}</span>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* Mobile Drawer */}
        <div className={`fixed top-0 left-0 h-full w-full bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden ${open ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-4 flex bg-primary justify-between items-center border-b border-white">
            <Link to="/" className="text-2xl font-bold text-white">ZionFarmland</Link>
            <button
              onClick={() => {
                setOpen(false);
                setLangButtonOpen(false);
              }} className="text-2xl text-white">✕</button>
          </div>
          <ul className="p-4 space-y-4 text-gray-800 font-medium">
            <li><Link onClick={() => setOpen(false)} to="/" className="block">{t('nav.home')}</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/product" className="block">{t('nav.products')}</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/service" className="block">{t('nav.services')}</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/about" className="block">{t('nav.about')}</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/contact" className="block">{t('nav.contact')}</Link></li>
          </ul>

          <div className="relative px-4 py-2 flex items-center cursor-pointer md:hidden"
            onClick={() => {
              setLangButtonOpen(!LangButtonOpen);
              console.log(LangButtonOpen);
            }}
          >
            <GlobeAltIcon
              className="h-6 w-6 cursor-pointer text-gray-800"
            />
            <span className="ml-0.5 text-gray-800">
              {language === 'en' ? 'EN' : language === 'la' ? 'ລາວ' : '中文'}
            </span>

          </div>
        </div>
        {/* Language Dropdown for Mobile */}
        <div className={`fixed top-16 left-0 h-full w-full bg-white transform transition-transform duration-300 ease-in-out md:hidden z-40 ${LangButtonOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <ul className="p-2">
            <li
              className={`cursor-pointer p-2 ${language === 'la' ? 'bg-gray-100' : ''}`}
              onClick={() => handleLanguageChange('la')}
            >
              <div className="flex items-center">
                <span className="fi fi-la"></span>
                <span className="ml-4">{t('nav.Lao')}</span>
              </div>
            </li>
            <li
              className={`cursor-pointer p-2 ${language === 'en' ? 'bg-gray-100' : ''}`}
              onClick={() => handleLanguageChange('en')}
            >
              <div className="flex items-center">
                <span className="fi fi-us"></span>
                <span className="ml-4">{t('nav.English')}</span>
              </div>
            </li>
            <li
              className={`cursor-pointer p-2 ${language === 'cn' ? 'bg-gray-100' : ''}`}
              onClick={() => handleLanguageChange('cn')}
            >
              <div className="flex items-center">
                <span className="fi fi-cn"></span>
                <span className="ml-4">{t('nav.Chinese')}</span>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};
export default Navbar;