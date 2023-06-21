'use client'
import { api } from '@/data/api';
import { useEffect, useState } from 'react';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await api.get('/');
        const newData = response.data.slice((currentPage - 1) * 12, currentPage * 12); // Buscar os itens correspondentes à página atual
        setData(newData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleNextPage = async () => {
    try {
      setLoading(true);
      setCurrentPage(prevPage => prevPage + 1); // Incrementar o número da página atual
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handlePreviousPage = async () => {
    try {
      setLoading(true);
      setCurrentPage(prevPage => prevPage - 1); // Decrementar o número da página atual
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };



  return (
    <div>
      <h1>Dados da API:</h1>

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <main>
          <div className="grid gap-5 justify-center items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.map(item => (
              <div key={item.id} className="px-2 bg-zinc-700 rounded-lg h-[650px] shadow-md p-4 py-2">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <img src={item.thumbnail} alt={item.title} className="w-full h-auto object-cover" />
                <p className="text-white my-2">{item.short_description}</p>
                <p>
                  <span className="font-semibold">Genre:</span> {item.genre}
                </p>
                <p>
                  <span className="font-semibold">Platform:</span> {item.platform}
                </p>
                <p>
                  <span className="font-semibold">Publisher:</span> {item.publisher}
                </p>
                <p>
                  <span className="font-semibold">Developer:</span> {item.developer}
                </p>
                <p>
                  <span className="font-semibold">Release Date:</span> {item.release_date}
                </p>
                <p>
                  <span className="font-semibold">Game URL:</span>{" "}
                  <a href={item.game_url} className="text-blue-500 underline">
                    {item.game_url}
                  </a>
                </p>
                <p>
                  <span className="font-semibold">FreeToGame Profile:</span>{" "}
                  <a href={item.freetogame_profile_url} className="text-blue-500 underline">
                    {item.freetogame_profile_url}
                  </a>
                </p>
              </div>
            ))}
          </div>


          <div className='flex justify-around'>
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
              Página Anterior
            </button>
            <button onClick={handleNextPage}>Próxima página</button>
          </div>
        </main>
      )}
    </div>
  );
}
