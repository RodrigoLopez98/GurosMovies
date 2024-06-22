import api from './api';

interface Genre {
    id: number;
    name: string;
}

interface Movie {
    id: number;
    title: string;
    overview: string;
    vote_average: number;
    poster_path: string;
    genre_ids: number[];
}

interface MoviesResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

interface GenresResponse {
    genres: Genre[];
}

interface MovieDetails {
    id: number;
    title: string;
    overview: string;
    vote_average: number;
    poster_path: string;
    genres: Genre[];
    backdrop_path: string;
    release_date: string;
    runtime: number;
    revenue: number;
    tagline: string;
    status: string;
}

export const getPopularMovies = async (): Promise<Movie[]> => {
    try {
        const response = await api.get<MoviesResponse>('/movie/popular?language=es-MX&page=1');
        return response.data.results;
    } catch (error) {
        console.error('Error fetching popular movies:', error);
        throw error;
    }
};

export const getGenres = async (): Promise<Genre[]> => {
    try {
        const response = await api.get<GenresResponse>('/genre/movie/list?language=es');
        return response.data.genres;
    } catch (error) {
        console.error('Error fetching genres:', error);
        throw error;
    }
};

export const getMovieDetails = async (movieId: number): Promise<MovieDetails> => {
    try {
        const response = await api.get<MovieDetails>(`/movie/${movieId}?language=es-MX`);
        return response.data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        throw error;
    }
};