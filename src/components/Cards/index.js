import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { IoListCircle } from 'react-icons/io5';
import { FaArrowCircleRight } from 'react-icons/fa';
import borda from '../../../public/borda.png';
import { Partciles } from '../Particles';
import SearchComponent from '../Search';

export default function Cards({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('all');
  const itemsPerPage = 12;
  const filteredData = useMemo(() => {
    let updatedData = data;

    if (searchTerm) {
      updatedData = updatedData.filter(
        item =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.developer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedGenre !== 'all') {
      updatedData = updatedData.filter(item => item.genre === selectedGenre);
    }

    return updatedData;
  }, [data, searchTerm, selectedGenre]);

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handleFilter = filtered => {
    setCurrentPage(1);
    setSelectedGenre(filtered);
  };

  const handleSearch = term => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleData = filteredData.slice(0, endIndex);
  const filterRef = useRef(null);
  const cardContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (filterRef.current && cardContainerRef.current) {
        const filterRect = filterRef.current.getBoundingClientRect();
        const cardContainerRect = cardContainerRef.current.getBoundingClientRect();

        if (
          filterRect.bottom > cardContainerRect.bottom ||
          filterRect.top < cardContainerRect.top
        ) {
          setIsOpen(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={cardContainerRef} className='md:py-28 py-10'>
      <Partciles />
      <div className='flex justify-center items-center'>
        <SearchComponent onSearch={handleSearch} />
      </div>
      <div className="flex">
        <div className="fixed md:top-[16%] top-[5.8rem] z-20">
          {isOpen ? (
            <motion.div
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex w-11/12 md:w-fit overflow-y-auto bg-transparent flex-col fixed"
              ref={filterRef}
            >
              <div className='w-full bg-[#020076] border-t border-r border-white md:border-none flex items-center justify-between py-4 px-6 rounded-r-3xl'>
                <p className='font-bold md:px-2'>Genres</p>
                <AiFillCloseCircle onClick={() => setIsOpen(!isOpen)} size={20} color='white' />
              </div>
              <div className="md:flex md:flex-col grid grid-cols-2  gap-2 mt-2">
                <button
                  className={`text-white text-sm py-2 px-4 rounded-r-lg focus:outline-none ${selectedGenre === 'all' ? 'bg-blue-900' : 'bg-blue-500'
                    }`}
                  onClick={() => handleFilter('all')}
                >
                  All
                </button>
                {Array.from(new Set(data.map(item => item.genre))).map(genre => (
                  <button
                    key={genre}
                    className={`text-white text-sm py-2 px-4 rounded-r-lg font-bold focus:outline-none ${selectedGenre === genre ? 'bg-blue-900' : 'bg-blue-500'
                      }`}
                    onClick={() => handleFilter(genre)}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.button
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.7 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 cursor-pointer animate-pulse rounded-full bg-gradient-to-r from-blue-900 to-blue-700 `}
            >
              <IoListCircle size={20} />
            </motion.button>

          )}
        </div>

        <div className="grid gap-10 justify-center items-center mt-10 w-9/12 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {visibleData.length > 0 ? (
            visibleData.map(item => (
              <motion.div
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9 }}
                key={item.id} className="text-sm relative shadow-md"
              >
                <Image src={borda} className='w-full h-fit object-cover' />
                <div className='absolute top-0 left-0 w-full h-full'>
                  <div className='p-5 h-full'>
                    <img src={item.thumbnail} alt={item.title} className="w-full h-auto object-cover mb-6 " />
                    <div>
                      <h2 className="text-xl font-extrabold text-center md:my-10">{item.title}</h2>
                      <div className='w-full  flex flex-col gap-3 text-zinc-300'>
                        <span className="font-semibold pl-3 flex items-center gap-2">
                          <p className="text-white md:text-lg">Genre: </p>
                          <p className='font-thin text-white sm:text-xs md:text-base'>{item.genre}</p>
                        </span>
                        <span className="font-semibold pl-3 flex items-center gap-2">
                          <p className="text-white md:text-lg">Platform:</p>
                          <p className='font-thin text-white sm:text-xs md:text-base'>{item.platform}</p>
                        </span>
                        <span className="font-semibold pl-3 flex items-center gap-2">
                          <p className="text-white md:text-lg">Developer: </p>
                          <p className='font-thin text-white sm:text-xs md:text-base'>{item.developer}</p>
                        </span>
                        <span className="font-semibold pl-3 flex items-center gap-2">
                          <p className="text-white md:text-lg">Release date: </p>
                          <p className='font-thin text-white sm:text-xs md:text-base'>{item.release_date}</p>
                        </span>

                        <a href='/' className=" flex md:mt-20 gap-4 items-center justify-center w-fit mx-auto p-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg shadow hover:bg-blue-400 hover:brightness-150 transition-all duration-700">
                          <p>See more</p>
                          <FaArrowCircleRight />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-white text-center py-20">
              <p>No items found 🤔.</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-5">
        {filteredData.length > endIndex && (
          <button onClick={handleLoadMore} className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-400 hover:brightness-150 transition-all duration-700">
            Load More
          </button>
        )}
      </div>
    </div>
  );
}
