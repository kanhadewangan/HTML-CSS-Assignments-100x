const movieDb = [
    {
        "title": "The Shawshank Redemption",
        "year": 1994,
        "rating": 9.3
    },
    {
        "title": "The Godfather",
        "year": 1972,
        "rating": 9.2
    },
    {
        "title": "The Dark Knight",
        "year": 2008,
        "rating": 9.0   
    },
    {
        "title": "12 Angry Men",
        "year": 1957,
        "rating": 9.0
    },
    {
        "title": "Inception",
        "year": 2010,
        "rating": 8.8
    },
    {
        "title": "Forrest Gump",
        "year": 1994,
        "rating": 8.8
    },
    {
        "title": "Interstellar",
        "year": 2014,
        "rating": 8.6
    },
    {
        "title": "Parasite",
        "year": 2019,
        "rating": 8.6
    },
    {
        "title": "The Matrix",
        "year": 1999,
        "rating": 8.7
    },
    {
        "title": "Fight Club",
        "year": 1999,
        "rating": 8.8
    },
    {
        "title": "Pulp Fiction",
        "year": 1994,
        "rating": 8.9
    },
    {
        "title": "The Lord of the Rings: The Return of the King",
        "year": 2003,
        "rating": 8.9
    },
    {
        "title": "Fake Movie Alpha",
        "year": 2022,
        "rating": 7.5
    },
    {
        "title": "Fake Movie Beta",
        "year": 2021,
        "rating": 7.2
    },
    {
        "title": "Fake Movie Gamma",
        "year": 2020,
        "rating": 6.9
    }
];

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    const filteredMovies = movieDb.filter(movie => movie.title.toLowerCase().includes(query));
    displayMovies(filteredMovies);
});

function displayMovies(movies) {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';

    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        movieItem.innerHTML = `
            <h3>${movie.title} (${movie.year})</h3>
            <p>Rating: ${movie.rating}</p>
        `;
        movieList.appendChild(movieItem);
    });
}

displayMovies(movieDb);