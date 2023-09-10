'use client';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

// custom components
import imgSample from '../../_sample/img/img_test.webp';
import { useState } from 'react';

export default function Header() {
  const [isMenuClosed, setIsMenuClosed] = useState<boolean>(true);

  const onToggleMenu = () => {
    setIsMenuClosed(!isMenuClosed);
    openNavLink();
  };

  const openNavLink = () => {
    const navLinks: Element = document.querySelector('.nav-links')!;
    navLinks.classList.toggle('top-[6.3%]');
  };

  return (
    <header className="bg-slate-200">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <Image
            width={40}
            height={40}
            className="w-16 cursor-pointer"
            src={imgSample}
            alt="..."
          />
        </div>
        <div
          className={`nav-links md:static duration-500 absolute bg-slate-200 md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li className="hover:text-gray-500">Category</li>
            <li className="hover:text-gray-500">Category</li>
            <li className="hover:text-gray-500">Category</li>
            <li className="hover:text-gray-500">Category</li>
            <li className="hover:text-gray-500">Category</li>
            <li className="hover:text-gray-500">Category</li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button
          </button>
          {isMenuClosed ? (
            <FontAwesomeIcon
              icon={faBars}
              size="xl"
              className="cursor-pointer md:hidden"
              onClick={onToggleMenu}
            />
          ) : (
            <FontAwesomeIcon
              icon={faClose}
              size="xl"
              className="cursor-pointer md:hidden"
              onClick={onToggleMenu}
            />
          )}
        </div>
      </nav>
    </header>
  );
}
