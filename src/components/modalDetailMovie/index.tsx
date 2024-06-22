import React, { useEffect, useState } from 'react';
import StarRating from './raiting';
import Notificacion from '../notificacion';
import { getMovieDetails } from '../../services/movieService';

interface ModalProps {
    isOpen: boolean;
    closeModal: () => void;
    movieId: number | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, movieId }) => {
    const [movieDetails, setMovieDetails] = useState<any>(null);
    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
        if (movieId && isOpen) {
            const fetchMovieDetails = async () => {
                try {
                    const details = await getMovieDetails(movieId);
                    setMovieDetails(details);
                } catch (error) {
                    console.error('Error fetching movie details:', error);
                }
            };

            fetchMovieDetails();
        }
    }, [movieId, isOpen]);

    const toggleComponent = () => {
        setShowComponent(true);
        setTimeout(() => {
            setShowComponent(false);
        }, 8000);
    };

    const closeNotificacion = () => {
        setShowComponent(false);
    };

    if (!movieDetails) return null;

    return (
        <>
            <Notificacion onClose={closeNotificacion} show={showComponent} />
            {/* Fondo opaco */}
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40" onClick={closeModal}></div>
            )}
            {/* Modal */}
            <div className={`fixed bottom-0 left-0 w-full h-6/8 bg-white z-50 transition-transform transform ${isOpen ? 'translate-y-0' : 'translate-y-full'} grid grid-cols-12`}>
                <div className="col-span-3 relative z-50">
                    <button className="flex justify-start items-center absolute top-2 left-0 py-2 px-4 rounded-md z-60" onClick={closeModal}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="white" />
                            <path d="M19.5286 11.5285C19.7889 11.2682 20.2111 11.2682 20.4714 11.5285C20.7318 11.7889 20.7318 12.211 20.4714 12.4713L16.9428 15.9999L20.8047 19.8618C21.0651 20.1222 21.0651 20.5443 20.8047 20.8047C20.5444 21.065 20.1223 21.065 19.8619 20.8047L16 16.9427L12.1381 20.8047C11.8777 21.065 11.4556 21.065 11.1953 20.8047C10.9349 20.5443 10.9349 20.1222 11.1953 19.8618L15.0572 15.9999L11.5286 12.4713C11.2682 12.211 11.2682 11.7889 11.5286 11.5285C11.7889 11.2682 12.2111 11.2682 12.4714 11.5285L16 15.0571L19.5286 11.5285Z" fill="white" />
                        </svg>
                    </button>
                    <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
                    <div className="flex justify-end items-center absolute bottom-2 right-2">
                        <span className="font-karla text-2xl font-bold leading-9 tracking-wide text-left text-white">{movieDetails.vote_average}</span>
                        <img className="w-7 h-7" src="/estrel.png" alt="" />
                    </div>
                </div>
                <div className="col-span-9 p-3">
                    <section className="col-span-9 p-5 flex justify-between items-between flex-col h-full">
                        <div className="flex flex-col">
                            <h2 className="font-karla text-lg font-bold leading-7 tracking-wide text-left text-guros-dark">{movieDetails.title}</h2>
                            <span className="font-karla text-sm font-normal leading-6 tracking-wide text-left text-guros-gray">{movieDetails.id}</span>
                            <label className="font-karla text-sm font-bold leading-5 tracking-wide text-left text-guros-dark my-3">¿De qué trata?</label>
                            <p className="font-karla text-base font-normal leading-7 tracking-wide text-left text-guros-gray">{movieDetails.overview}</p>
                        </div>
                        <div className="flex justify-end items-center mt-5">
                            <div className="space-x-3">
                                {movieDetails.genres.map((genre: any) => (
                                    <span key={genre.id} className="px-4 py-1 rounded-full border-2 border-guros-purple font-karla text-xs font-normal leading-5 tracking-wide text-left text-guros-purple">
                                        {genre.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="relative inset-x-0 bottom-0 flex flex-col items-center gap-4 mb-5">
                            <label className="font-karla text-sm font-bold leading-[18.9px] tracking-wide text-center text-guros-dark">Cuéntanos ¿te gustó?</label>
                            <StarRating />
                            <button className="w-357px h-57px p-19px px-24px gap-4px rounded-8px bg-guros-pink text-white" onClick={toggleComponent}>Enviar calificación</button>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Modal;