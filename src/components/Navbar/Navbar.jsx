import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import Logo from '../logo/Logo';
import Button from '../button/Button';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');
  const menuRef = useRef();

  const handleClick = () => setClick(!click);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setClick(false);
    }
  };

  const handleLinkClick = () => {
    setClick(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', changeBackground);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={navbar ? 'navbar active' : 'navbar'}>
      <div className={click ? 'left active' : 'left'}>
        <a href='https://www.linkedin.com/in/jpgrineau/' target='_blank' rel='noreferrer'>
          <BsLinkedin />
        </a>
        <a href='https://github.com/JGrineau?tab=repositories' target='_blank' rel='noreferrer'>
          <BsGithub />
        </a>
        <a href='https://www.instagram.com/jpgrineau/' target='_blank' rel='noreferrer'>
          <BsInstagram />
        </a>
      </div>

      <div className='center'>
      <a href="/">
        <Logo className='logo' type='img' logoSize='logo--medium' />
        </a>
      </div>
      
      <div className='hamburger' onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: 'black' }} />
        ) : (
          <FaBars size={30} style={{ color: 'black' }} />
        )}
      </div>

      <div className={click ? 'nav active' : 'nav'} ref={menuRef}>
        <li>
          <a href='#home' onClick={() => { setActiveNav('#home'); handleLinkClick(); }} className={activeNav === '#home' ? 'active' : ''}>
            Home
          </a>
        </li>
        <li>
          <a href='#about' onClick={() => { setActiveNav('#about'); handleLinkClick(); }} className={activeNav === '#about' ? 'active' : ''}>
            About
          </a>
        </li>
        <li>
          <a href='#projects' onClick={() => { setActiveNav('#projects'); handleLinkClick(); }} className={activeNav === '#projects' ? 'active' : ''}>
            Projects
          </a>
        </li>
        <a href='mailto:jgrineau95@gmail.com'>
          <Button type='button' buttonStyle='btn--primary' buttonSize='btn--medium' onClick={handleLinkClick}>
            Contact
          </Button>
        </a>

        <div className='hamburger__show'>
          <a href='https://www.linkedin.com/in/jpgrineau/' target='_blank' rel='noreferrer'>
            <BsLinkedin />
          </a>
          <a href='https://github.com/JGrineau?tab=repositories' target='_blank' rel='noreferrer'>
            <BsGithub />
          </a>
          <a href='https://www.instagram.com/jpgrineau/' target='_blank' rel='noreferrer'>
            <BsInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
