import React from 'react';

interface CardMovieProps {
    movie: {
        id: number;
        title: string;
        overview: string;
        vote_average: number;
        poster_path: string;
        genre_ids: number[];
    };
    genres: {
        id: number;
        name: string;
    }[];
    onOpenModal: () => void;
}

const CardMovie: React.FC<CardMovieProps> = ({ movie, genres, onOpenModal }) => {
    const genreNames = movie.genre_ids.map(id => {
        const genre = genres.find(genre => genre.id === id);
        return genre ? genre.name : 'Desconocido';
    });

    return (
        <div className="shadow-md grid grid-cols-12 min-h-275 max-h-275 rounded-18 overflow-hidden mb-5" onClick={onOpenModal}>
            <section className="col-span-9 p-5 flex justify-between items-between flex-col">
                <div className="flex flex-col overflow-hidden whitespace-nowrap">
                    <h2 className="font-karla text-lg font-bold leading-7 tracking-wide text-left text-guros-dark">{movie.title}</h2>
                    <span className="font-karla text-sm font-normal leading-6 tracking-wide text-left text-guros-gray">{movie.id}</span>
                    <label className="font-karla text-sm font-bold leading-5 tracking-wide text-left text-guros-dark my-3 hidden sm:block">¿De qué trata?</label>
                    <p className="font-karla text-base font-normal leading-7 tracking-wide text-left text-guros-gray overflow-hidden text-ellipsis hidden sm:block">{movie.overview}</p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="space-x-3">
                        {genreNames.map((name, index) => (
                            <span key={index} className="px-4 py-1 rounded-full border-2 border-guros-purple font-karla text-xs font-normal leading-5 tracking-wide text-left text-guros-purple">
                                {name}
                            </span>
                        ))}
                    </div>
                    <div className="flex">
                        <span className="font-karla text-2xl font-bold leading-9 tracking-wide text-left text-guros-gray">{movie.vote_average}</span>
                        <img className="w-7 h-7" src="/estrel.png" alt="" />
                    </div>
                </div>
            </section>
            <figure className="col-span-3">
                <img className="h-full w-full object-cover" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} style={{ height: '275px' }}></img>
            </figure>
        </div>
    );
};

export default CardMovie;
