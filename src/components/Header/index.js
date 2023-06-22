import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaHeart, FaHome, FaPersonBooth } from 'react-icons/fa';
import {BsPersonFill} from 'react-icons/bs'
import {IoGameController} from 'react-icons/io5'

export default function Header() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;
      const threshold = screenHeight - 100; // Alteramos o limite para a altura da tela

      if (scrollPosition > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
<header className={`top-0 font-sans fixed w-full text-white text-xs tracking-widest z-50 items-center flex px-8 justify-around py-5 ${isScrolled ? 'bg-[#00060e] transition-all duration-200 ease-in-out' : ''}`} style={{backgroundImage: ` transparent`}}>
      <div className="flex items-center gap-8 w-full md:px-5 justify-between">
        <motion.div
          initial={{ y: -400 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5 }}
          className=' md:w-2/12 w-2/4'
        >
          <a href="/" className={ 'brightness-[4]' }>
            <svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860.27 185.47"><defs><linearGradient id="white_logo_svg__a" x1="-1286.94" y1="4775.15" x2="-1101.48" y2="4775.15" gradientTransform="scale(-1 1) rotate(45 5008.683 3763.534)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3888fc"></stop><stop offset="1" stop-color="#1d42cf"></stop></linearGradient><linearGradient id="white_logo_svg__b" x1="-1258.46" y1="4775.15" x2="-1129.96" y2="4775.15" gradientTransform="scale(-1 1) rotate(45 5008.683 3763.534)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3888fc"></stop><stop offset="1" stop-color="#1d42cf"></stop></linearGradient><linearGradient id="white_logo_svg__c" x1="57" y1="95.35" x2="128.49" y2="95.35" gradientTransform="matrix(1 0 0 -1 0 188)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3888fc"></stop><stop offset="1" stop-color="#1d42cf"></stop></linearGradient></defs><g data-name="Layer 1-2"><g opacity="0.1" fill="#2d6cea"><path d="M92.75 185.47c-24.79 0-48.08-9.64-65.58-27.14C9.66 140.82.02 117.53.02 92.75s9.64-48.08 27.14-65.59C44.67 9.66 67.96.02 92.75.02s48.08 9.64 65.58 27.14 27.14 40.8 27.14 65.58-9.64 48.08-27.14 65.58-40.8 27.14-65.58 27.14zm0-170.88c-43.1 0-78.16 35.07-78.16 78.17s35.06 78.16 78.16 78.16 78.16-35.06 78.16-78.16-35.07-78.17-78.16-78.17z"></path><path d="M92.75 156.99c-35.43 0-64.25-28.82-64.25-64.25S57.32 28.5 92.75 28.5 157 57.32 157 92.75 128.18 157 92.75 157zm0-113.93c-27.39 0-49.68 22.29-49.68 49.68s22.29 49.68 49.68 49.68 49.68-22.29 49.68-49.68-22.29-49.68-49.68-49.68z"></path><path d="M92.75 128.51c-19.72 0-35.76-16.04-35.76-35.76s16.04-35.76 35.76-35.76 35.76 16.04 35.76 35.76-16.04 35.76-35.76 35.76zm0-56.96c-11.69 0-21.2 9.51-21.2 21.2s9.51 21.2 21.2 21.2 21.2-9.51 21.2-21.2-9.51-21.2-21.2-21.2z"></path></g><path d="M32.33 160.45c-1.86 0-3.73-.71-5.15-2.13C9.65 140.79 0 117.5 0 92.75s9.65-48.04 27.18-65.57C44.71 9.65 67.99 0 92.75 0s48.04 9.65 65.57 27.18c17.53 17.53 27.18 40.81 27.18 65.57s-9.65 48.04-27.18 65.57c-2.84 2.84-7.46 2.84-10.3 0s-2.84-7.46 0-10.3c14.78-14.78 22.91-34.4 22.91-55.27s-8.14-40.49-22.91-55.27c-14.78-14.78-34.4-22.91-55.27-22.91s-40.49 8.14-55.27 22.91C22.7 52.26 14.57 71.88 14.57 92.75s8.14 40.49 22.91 55.27c2.84 2.84 2.84 7.46 0 10.3a7.269 7.269 0 01-5.15 2.13z" fill="url(#white_logo_svg__a)"></path><path d="M133.03 140.31c-1.86 0-3.73-.71-5.15-2.13-2.84-2.84-2.84-7.46 0-10.3 19.37-19.37 19.37-50.89 0-70.26s-50.89-19.37-70.26 0c-9.39 9.39-14.56 21.87-14.56 35.13s5.17 25.74 14.56 35.13c2.84 2.84 2.84 7.46 0 10.3s-7.46 2.84-10.3 0c-25.05-25.05-25.05-65.81 0-90.86 25.05-25.05 65.81-25.05 90.86 0 25.05 25.05 25.05 65.81 0 90.86a7.269 7.269 0 01-5.15 2.13z" fill="url(#white_logo_svg__b)"></path><path d="M112.89 120.17c-1.86 0-3.73-.71-5.15-2.13-2.84-2.84-2.84-7.46 0-10.3 4.01-4.01 6.22-9.33 6.22-14.99 0-3.24-.72-6.37-2.1-9.21L97.7 97.7c-1.37 1.37-3.22 2.13-5.15 2.13s-3.78-.77-5.15-2.13L73.52 83.82c-3.63 7.84-2.22 17.46 4.24 23.91 2.84 2.84 2.84 7.46 0 10.3-2.84 2.84-7.46 2.84-10.3 0-13.94-13.94-13.94-36.63 0-50.58 1.37-1.37 3.22-2.13 5.15-2.13s3.78.77 5.15 2.13l14.79 14.79 14.98-14.98a7.296 7.296 0 0110.12-.18c.13.12.26.25.39.37 13.94 13.94 13.94 36.63 0 50.58a7.269 7.269 0 01-5.15 2.13z" fill="url(#white_logo_svg__c)"></path><g fill="#1f2f59"><path d="M235.33 111.15l23.54-61.08c.91-2.52 2.82-3.82 5.63-3.82h7.14c2.82 0 4.63 1.31 5.63 3.82l23.85 61.08c1.21 3.32-.2 5.53-3.82 5.53h-6.54c-2.72 0-4.63-1.21-5.63-3.82l-3.52-9.26h-27.17l-3.42 9.16c-1.01 2.62-2.82 3.92-5.53 3.92h-6.34c-3.62 0-5.03-2.21-3.82-5.53zm43.07-20.12l-10.26-28.37-10.57 28.37h20.83zM309.79 134.39V69.8c0-3.12 1.71-4.83 4.83-4.83h5.94c3.12 0 4.83 1.71 4.83 4.83v2.41c3.72-5.74 9.76-8.35 16.6-8.35 14.49 0 24.85 11.77 24.85 26.97s-10.36 26.97-24.85 26.97c-6.84 0-12.88-2.62-16.6-8.45v25.05c0 3.12-1.71 4.83-4.83 4.83h-5.94c-3.12 0-4.83-1.71-4.83-4.83zm41.46-43.58c0-7.95-4.73-14.49-12.88-14.49s-13.18 6.24-13.18 14.49 5.23 14.49 13.18 14.49 12.88-6.44 12.88-14.49zM376.2 134.39V69.8c0-3.12 1.71-4.83 4.83-4.83h5.94c3.12 0 4.83 1.71 4.83 4.83v2.41c3.72-5.74 9.76-8.35 16.6-8.35 14.49 0 24.85 11.77 24.85 26.97s-10.36 26.97-24.85 26.97c-6.84 0-12.88-2.62-16.6-8.45v25.05c0 3.12-1.71 4.83-4.83 4.83h-5.94c-3.12 0-4.83-1.71-4.83-4.83zm41.46-43.58c0-7.95-4.73-14.49-12.88-14.49s-13.18 6.24-13.18 14.49 5.23 14.49 13.18 14.49 12.88-6.44 12.88-14.49zM466.15 111.55l5.63-60.67c.2-3.02 2.01-4.63 5.03-4.63h7.24c2.82 0 4.53 1.21 5.63 3.82l17.91 43.77 18.01-43.77c1.01-2.62 2.82-3.82 5.53-3.82h7.35c3.02 0 4.73 1.61 5.03 4.63l5.63 60.67c.3 3.32-1.41 5.13-4.63 5.13h-6.14c-3.12 0-4.83-1.61-5.13-4.63l-3.22-38.44-15.5 38.44c-1.01 2.62-2.82 3.82-5.53 3.82h-2.72c-2.72 0-4.53-1.21-5.53-3.82l-15.49-38.44-3.32 38.44c-.2 3.02-2.01 4.63-5.03 4.63h-6.14c-3.22 0-5.03-1.81-4.63-5.13h.02zM557.41 90.82c0-15.19 10.36-26.97 24.85-26.97 6.84 0 12.88 2.62 16.6 8.45v-2.52c0-3.12 1.71-4.83 4.83-4.83h5.94c3.12 0 4.83 1.71 4.83 4.83v42.06c0 3.12-1.71 4.83-4.83 4.83h-5.94c-3.12 0-4.83-1.71-4.83-4.83v-2.41c-3.72 5.74-9.76 8.35-16.6 8.35-14.49 0-24.85-11.67-24.85-26.97zm41.66.01c0-8.25-5.23-14.49-13.18-14.49s-12.88 6.54-12.88 14.49 4.73 14.49 12.88 14.49 13.18-6.24 13.18-14.49zM624.52 107.43c-1.51-3.02.1-5.23 3.22-6.04l3.12-.7c2.72-.7 3.92.6 6.04 2.72 1.81 2.01 4.53 3.02 7.75 3.02 3.92 0 6.64-1.81 6.64-4.53 0-2.21-1.51-3.32-4.83-4.53l-6.34-2.21c-5.33-1.71-14.59-5.63-14.59-14.99s8.05-16.3 19.22-16.3c6.64 0 12.68 2.11 16.5 7.85 2.01 2.92.5 5.53-2.82 6.34l-2.82.7c-2.62.7-4.02-.2-5.84-1.91-1.41-1.41-3.22-1.91-5.03-1.91-3.22 0-5.23 2.01-5.23 4.43 0 2.21 2.01 3.32 4.73 4.23l6.44 2.41c10.67 3.52 14.49 9.26 14.69 15.6 0 10.87-9.66 16.2-20.83 16.2-9.16 0-16.6-3.42-20.02-10.36v-.02zM677.45 99.48V76.54h-5.13c-1.61 0-2.62-.91-2.62-2.52v-6.54c0-1.61 1.01-2.52 2.62-2.52h6.34l1.71-10.46c.4-2.11 1.81-3.22 3.92-3.22h4.93c2.31 0 3.52 1.31 3.52 3.52v10.16h11.67c1.61 0 2.52.91 2.52 2.52v6.54c0 1.61-.91 2.52-2.52 2.52h-11.67v23.44c0 3.82 1.91 5.33 4.23 5.33 2.62 0 4.33-2.01 4.33-4.73 0-.5 0-1.11-.1-1.81-.2-1.81.4-2.72 2.11-2.72h6.14c1.31 0 2.41.5 2.82 2.01.4 1.51.6 3.12.6 3.92 0 11.17-7.95 15.8-17.31 15.8-8.75 0-18.11-4.03-18.11-18.31zM716.89 91.03c0-14.59 10.97-27.17 28.37-27.17 14.69 0 26.77 8.85 27.47 25.36.1 2.92-1.91 4.23-4.93 4.23h-36.02c-.2 6.14 5.94 12.07 15.9 12.07 3.72 0 7.55-.91 11.47-3.12 2.72-1.51 4.93-1.31 6.84 1.01l1.11 1.41c2.01 2.41 1.81 5.13-.91 7.14-5.94 4.33-12.88 5.84-19.52 5.84-18.51 0-29.78-11.97-29.78-26.77zm41.25-6.24c-1.41-6.94-7.35-9.16-12.68-9.16s-11.57 2.41-13.28 9.16h25.96zM781.58 111.85V69.79c0-3.12 1.71-4.83 4.83-4.83h5.53c3.12 0 4.83 1.71 4.83 4.83v6.44c1.71-9.46 8.96-12.38 13.38-12.38l1.71.1c2.41.2 2.92 2.11 2.92 4.13v7.04c0 2.82-1.41 4.02-3.52 3.72-.91-.1-1.71-.2-2.52-.2-6.04 0-11.57 3.92-11.57 16.9v16.3c0 3.12-1.71 4.83-4.83 4.83h-5.94c-3.12 0-4.83-1.71-4.83-4.83h.01zM819.42 107.43c-1.51-3.02.1-5.23 3.22-6.04l3.12-.7c2.72-.7 3.92.6 6.04 2.72 1.81 2.01 4.53 3.02 7.75 3.02 3.92 0 6.64-1.81 6.64-4.53 0-2.21-1.51-3.32-4.83-4.53l-6.34-2.21c-5.33-1.71-14.59-5.63-14.59-14.99s8.05-16.3 19.22-16.3c6.64 0 12.68 2.11 16.5 7.85 2.01 2.92.5 5.53-2.82 6.34l-2.82.7c-2.62.7-4.02-.2-5.84-1.91-1.41-1.41-3.22-1.91-5.03-1.91-3.22 0-5.23 2.01-5.23 4.43 0 2.21 2.01 3.32 4.73 4.23l6.44 2.41c10.67 3.52 14.49 9.26 14.69 15.6 0 10.87-9.66 16.2-20.83 16.2-9.16 0-16.6-3.42-20.02-10.36v-.02z"></path></g></g></svg>     
          </a>
        </motion.div>
        <motion.nav
          initial={{ x: 800 }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
          className=" hidden w-8/12  md:flex items-center font-extrabold justify-around gap-10 text-sm">
          <a className="hover:text-green-600 transition-colors duration-300 w-fit whitespace-nowrap flex items-center gap-2 " href="#home" >
            <FaHome size={25}/>
            <p className=" cursor-pointer ">
              HOME
            </p>
          </a>
          <a className="hover:text-[#1b1a55] transition-colors duration-300 w-fit whitespace-nowrap flex items-center gap-2" href="#cards">
          <IoGameController size={25}/>
            <p className=" cursor-pointer ">
              GAMES
            </p>
          </a>
          <a className="hover:text-orange-600 transition-colors duration-300 w-fit whitespace-nowrap flex items-center gap-2">
            <BsPersonFill size={25}/>
            <p className=" cursor-pointer  ">
              ACCOUNT
            </p>
          </a>
          <a className="hover:text-red-500  w-fit whitespace-nowrap flex items-center gap-2" >
           <FaHeart className='transition-colors duration-300' size={25}/>
          <p className="transition-colors duration-300 cursor-pointer ">
              FAVORITES
            </p>
          </a>

        </motion.nav>
      </div>

      <motion.section
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
        className="flex text-right md:hidden transition-all delay-100">
        <div
          className="space-y-2 "
          onClick={() => {
            setIsNavOpen((prev) => !prev)
            setIsScrolled(true)
          }}
        >
          {!isNavOpen ?
            <>
              <p className="block h-0.5 w-8 animate-pulse bg-[#66f8ff]"></p>
              <p className="block h-0.5 w-8 animate-pulse bg-[#66f8ff]"></p>
              <p className="block h-0.5 w-8 animate-pulse bg-[#66f8ff]"></p>
            </>
            :
            <div
              onClick={() => {
                setIsNavOpen((prev) => prev)
                setIsScrolled(false);
              }}
              className="flex items-center justify-center"
            >
              <svg
                className="h-8 w-10  text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="10" x2="10" y2="22" />
                <line x1="10" y1="10" x2="22" y2="22" />
              </svg>
            </div>
          }
        </div>

        {isNavOpen && (
          <div className="showMenuNav">
            <div className="flex flex-col gap-5 text-right font-extrabold items-start justify-around min-h-[100px]">
            <a className="hover:text-green-600 transition-colors duration-300 w-fit whitespace-nowrap flex items-center gap-2 " href="#home" >
            <FaHome size={25}/>
            <p className=" cursor-pointer ">
              HOME
            </p>
          </a>
          <a className="hover:text-[#020076] transition-colors duration-300 w-fit whitespace-nowrap flex items-center gap-2" href="#cards">
          <IoGameController size={25}/>
            <p className=" cursor-pointer ">
              GAMES
            </p>
          </a>
          <a className="hover:text-orange-600 transition-colors duration-300 w-fit whitespace-nowrap flex items-center gap-2">
            <BsPersonFill size={25}/>
            <p className=" cursor-pointer  ">
              ACCOUNT
            </p>
          </a>
          <a className="hover:text-red-500  w-fit whitespace-nowrap flex items-center gap-2" >
           <FaHeart className='transition-colors duration-300' size={25}/>
          <p className="transition-colors duration-300 cursor-pointer ">
              FAVORITES
            </p>
          </a>

            </div>
          </div>
        )}
      </motion.section>

      <style jsx>{`
.hideMenuNav {
  display: none;
}

.showMenuNav {
  display: flex;
  position: absolute;
  top: 4rem;
  right: 0rem;
  color: white;
  background: ${isScrolled ? '#00060e' : 'transparent'};
  z-index: 99;
  animation: fadeInDown 0.5s ease-in-out;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  justify-content: flex-start;
  padding: 1.5rem;
  text-align: left;
}


@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-50px) rotateX(-90deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateX(0);
  }
}

      `}</style>

    </header>
  );
}
