// import React, { useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import $ from 'jquery';

// export default function NavBar() {
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = $(window).scrollTop();
//       if (scrollTop > 50) {
//         $('.navbar').addClass('shrink');
//       } else {
//         $('.navbar').removeClass('shrink');
//       }
//     };

//     $(window).on('scroll', handleScroll);

//     return () => { //unmounting clean
//       $(window).off('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="navbar z-50 fixed w-full flex justify-between align-middle nav-bg py-8 px-16 transition-all duration-300">
//       <div>
//         <h1 className='text-3xl font-bold'>START FRAMEWORK</h1>
//       </div>
//       <div>
//         <div className="flex justify-evenly items-center">
//           <h2 className='me-5 font-bold'>
//             <NavLink to="about">ABOUT</NavLink>
//           </h2>
//           <h2 className='me-5 font-bold'>
//             <NavLink to="portfolio">PORTFOLIO</NavLink>
//           </h2>
//           <h2 className='me-5 font-bold'>
//             <NavLink to="contact">CONTACT</NavLink>
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import $ from 'jquery';

export default function Navbar() {

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = $(window).scrollTop();
      if (scrollTop > 50) {
        $('.navbar').addClass('shrink');
      } else {
        $('.navbar').removeClass('shrink');
      }
    };

    $(window).on('scroll', handleScroll);

    return () => {
      $(window).off('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className='navbar nav-bg fixed left-0 right-0 z-10 py-7 transition-all  duration-500'>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto  px-8">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Link to="" className="self-center whitespace-nowrap dark:text-white text-3xl  font-bold uppercase">Start Framework</Link>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg  md:flex-row gap-3 rtl:space-x-reverse md:mt-0 md:border-0 main-bg">
            <li>
              <NavLink to="about" className="block py-2 px-3 rounded font-bold text-md  uppercase">About</NavLink>
            </li>
            <li>
              <NavLink to="Portfolio" className="block py-2 px-3 rounded font-bold text-md ">PORTFOLIO</NavLink>
            </li>
            <li>
              <NavLink to="Contact" className="block py-2 px-3 rounded font-bold text-md  uppercase">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}