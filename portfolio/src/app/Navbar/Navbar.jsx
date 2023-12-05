"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './Navlink.js';
import { Icon } from '@iconify/react';
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Profile",
        path: "/Profile",
    },
    {
        title: "Projects",
        path: "/Projects",
    },
    {
        title: "Contact",
        path: "/Contact",
    },
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#3b5998]'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
                <Link href="/" className='text-base text-white mr-4 p-4 lg:p-5 md:p-0 md:ml-5 md:mt-0 mt-0 lg:mt-0'
                    style={{ fontSize: '22px' }}><b>Portfolio</b></Link>
                <div className='mobile-menu block md:hidden'>
                    {
                        !navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <Icon icon="heroicons:bars-3-20-solid" />
                            </button>
                        ) : (
                            <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <Icon icon="heroicons:x-mark" />
                            </button>
                        )
                    }
                </div>

                <div className='menu hidden md:block md:w-auto md:justify-start' id="navbar">
                    <ul className='flex p-4 md:px-5 md:mb-2 lg:p-5 md:flex-row md:space-x-8 mt-2'>
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
};

export default Navbar;