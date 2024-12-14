const API_KEY = "d7629f30"; 
const topMovies = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "The Godfather: Part II",
    "12 Angry Men",
    "Schindler's List",
    "The Lord of the Rings: The Return of the King",
    "Pulp Fiction",
    "The Good, the Bad and the Ugly",
    "Fight Club"
]; 


const movieContainer = document.getElementById("movies");
const searchBar = document.getElementById("searchBar");


async function fetchMovies(movieList) {
    movieContainer.innerHTML = ""; 

    for (const title of movieList) {
        try {
            const response = await fetch(`http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${API_KEY}`);
            const data = await response.json();

            if (data.Response === "True") {
                const movieCard = `
                    <div class="movie-card">
                        <img src="${data.Poster !== "N/A" ? data.Poster : 'https://via.placeholder.com/200x300'}" alt="${data.Title}">
                        <div class="movie-title">
                            <h4>${data.Title}</h4>
                            <p>Year: ${data.Year}</p>
                            <p>IMDB Rating: ${data.imdbRating}</p>
                            <div class="comment-section">
                                <input type="text" class="comment-input" placeholder="Add a comment..." data-title="${data.Title}">
                                <button class="comment-btn" data-title="${data.Title}">Post</button>
                                <div class="comments" id="comments-${data.Title}"></div>
                            </div>
                        </div>
                    </div>
                `;
                movieContainer.innerHTML += movieCard;
            } else {
                movieContainer.innerHTML += `<p>Movie not found: ${title}</p>`;
            }
        } catch (error) {
            console.error("Error fetching movie data:", error);
        }
    }

    attachCommentListeners(); 
}


function attachCommentListeners() {
    const commentButtons = document.querySelectorAll(".comment-btn");

    commentButtons.forEach(button => {
        button.addEventListener("click", () => {
            const movieTitle = button.getAttribute("data-title");
            const input = document.querySelector(`.comment-input[data-title="${movieTitle}"]`);
            const commentSection = document.getElementById(`comments-${movieTitle}`);

            if (input.value.trim() !== "") {
                const comment = document.createElement("p");
                comment.textContent = input.value;
                commentSection.appendChild(comment);
                input.value = ""; // Clear input field
            }
        });
    });
}


searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase();
    const filteredMovies = topMovies.filter(title => title.toLowerCase().includes(query));
    fetchMovies(filteredMovies);
});


fetchMovies(topMovies);
