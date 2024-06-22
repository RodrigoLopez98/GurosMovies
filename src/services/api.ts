import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWVlZWU5ZDgxODM0MGIwNTlkNWY1ZThiNzkxNDI3YiIsIm5iZiI6MTcxOTAxNjA2Ny44MjE5MTksInN1YiI6IjY2NzRkMGM4NTNhZjc1YWYwNGM1MTI4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zfTROMq5aMJdiKBJ6z3L9LRhyrY56kxcvo2jpoDo82E'
    }
});

export default api;

