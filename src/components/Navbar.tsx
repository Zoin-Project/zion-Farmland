import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppProvider";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import SearchButton from "./Button/SearchButton";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const { language, changeLang } = useAppContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toogleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  const handleLanguageChange = (lang: string) => {
    changeLang(lang);
    setIsDropdownOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // 50 is the scroll threshold to add background color
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`bg-transparent shadow-md p-4 fixed w-full top-0 z-10 duration-300 ${
      isScrolled || isHovered ? "bg-white shadow-lg" : "bg-transparent"
    }`}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Logo</Link>
        <button onClick={() => setOpen(!open)} className="md:hidden">
          ☰
        </button>
        <div className={`md:flex space-x-6 absolute md:static w-full md:w-auto transition-all ${open ? "block" : "hidden"}`}>
          <ul className="md:flex space-x-6 absolute md:static w-full md:w-auto transition-all">
            <li><Link to="/" className="block py-2 px-4">{t('nav.home')}</Link></li>
            <li><Link to="/about" className="block py-2 px-4">{t('nav.about')}</Link></li>
            <li><Link to="/contact" className="block py-2 px-4">{t('nav.contact')}</Link></li>
          </ul>
          <SearchButton />
          <div className="relative md:flex items-center ">
            <GlobeAltIcon
              className="h-6 w-6 text-gray-500 cursor-pointer"
              onClick={toogleDropdown}
            />
            {/* display language here */}
            <span className="ml-0.5">{language === 'en' ? 'EN' : 'ລາວ'}</span>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-4 right-0 mt-2 w-40 bg-white border border-amber-50 rounded shadow-lg z-10">
                <ul className="p-2">
                  <li
                    className={`cursor-pointer p-2 ${language === 'en' ? 'bg-gray-100' : ''}`}
                    onClick={() => handleLanguageChange('en')}
                  >
                    {t('nav.English')}
                  </li>
                  <li
                    className={`cursor-pointer p-2 ${language === 'la' ? 'bg-gray-100' : ''}`}
                    onClick={() => handleLanguageChange('la')}
                  >
                    {t('nav.Lao')}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
