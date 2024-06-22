"use client";

import { useEffect, useState } from 'react';
import { getPopularMovies, getGenres } from '../services/movieService';
import CardMovie from "@/components/cardMovie";
import Header from "@/components/header";
import Paginacion from "@/components/paginacion";
import Modal from '@/components/modalDetailMovie';

interface Movie {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  poster_path: string;
  genre_ids: number[];
}

interface Genre {
  id: number;
  name: string;
}

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(movies.length / itemsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [moviesData, genresData] = await Promise.all([getPopularMovies(), getGenres()]);
        setMovies(moviesData);
        setGenres(genresData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const openModal = (movieId: number) => {
    setSelectedMovieId(movieId);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentMovies = movies.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <main className="py-5 px-12">
      <Header />
      <div className="grid grid-cols-1 gap-6">
        {currentMovies.map((movie) => (
          <CardMovie key={movie.id} movie={movie} genres={genres} onOpenModal={() => openModal(movie.id)} />
        ))}
      </div>
      <Paginacion
        currentPage={currentPage}
        totalPages={totalPages}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
      />
      <Modal isOpen={isModalOpen} closeModal={closeModal} movieId={selectedMovieId} />
    </main>
  );
};

export default Home;

