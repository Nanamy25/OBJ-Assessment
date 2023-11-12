const favoriteMovies=[
    {    
        name: "Top Gun Maverick",
        year: 2022,
        director: "Joseph Kosinski",
        picture:"https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"
    },
    {    
        name: "Five Nights at Freddy;s",
        year: 2023,
        director: "Emma Tammi",
        picture:"https://roost.nbcuni.com/bin/viewasset.html/content/dam/Peacock/Landing-Pages/campaign/fnaf/fnaf-social.jpg/_jcr_content/renditions/original.JPG"
    },
    {    
        name: "Barbie",
        year: 2023,
        director: "Greta Gerwig",
        picture:"https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg"
    },
];

const movieList = document.createElement("ol");
movieList.id = "movieList";
document.body.appendChild(movieList);

const movieElements = favoriteMovies.map(movie => {
    const li = document.createElement("li");
    li.innerHTML = `
        <p>${movie.name}</p>
        <p>Year: ${movie.year}</p>
        <p>Director: ${movie.director}</p>
        <img src="${movie.picture}" height = "400" alt="${movie.name} Poster">
    `;
    return li;
});
movieElements.forEach(movie => {
    movieList.appendChild(movie);
});