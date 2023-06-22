'use client'
import Header from '@/components/Header';
import { api } from '@/data/api';
import { useEffect, useState } from 'react';
import Loading from '../../loading';

export default function Games({ params }) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await api.get(`/`);
                const newData = response.data.filter(item => item.id === Number(params.id));
                setData(newData);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setHasError(true);
                setLoading(true);
            }
        };

        fetchData();
    }, [params.id]);

    if (hasError) {
        return (
            <div className="h-screen w-full flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-12 w-12 text-red-500 mb-4 animate-bounce"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                    <h1 className="text-xl font-bold text-white  mb-4">Error loading data.</h1>
                    <p className="text-white">Please try again later.</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div className="flex flex-col items-center justify-center h-screen bg-star-wars-bg">
                    <Header />
                    {data.map((item) => (
                        <div key={item.id} className="bg-black bg-opacity-75 rounded-lg p-8 mt-20 mb-6 flex md:flex-row flex-col animate-fade-in-down">
                            <img src={item.thumbnail} alt={item.title} className="md:w-1/3 mx-auto h-auto object-cover mr-8" />
                            <div>
                                <h1 className="text-4xl font-semibold text-yellow-400 text-center mb-4">{item.title}</h1>
                                <p className="text-lg text-white break-words">Genre: {item.genre}</p>
                                <p className="text-lg text-white break-words">Developed by: {item.developer}</p>
                                <p className="text-lg text-white break-words">Published for: {item.publisher}</p>
                                <p className="text-lg text-white break-words">Available for: {item.platform}</p>
                                <p className="text-lg text-white break-words">Description: {item.short_description}</p>
                                <p className="text-lg text-white break-words">Release date: {item.release_date}</p>
                                <div className='flex items-center w-full justify-center my-2 gap-3 text-lg text-blue-600'>
                                    <a href={item.game_url} target="_blank" rel="noopener noreferrer">Official page link</a>
                                    <a href={item.freetogame_profile_url} target="_blank" rel="noopener noreferrer">Freetogame link</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
