function printMovie(tt) {
	var requestURL = "https://www.omdbapi.com/?apikey=464feb8&i="+tt,
	request = new XMLHttpRequest(),
	link = document.querySelector("a"),
	poster = link.querySelector("img");
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();

	request.onload = function() {
		var movieInfo = request.response,
		rating = parseInt(movieInfo.imdbRating);	
		link.href = `https://www.imdb.com/title/${movieInfo.imdbID}"`;
		poster.src = `${movieInfo.Poster}`;
		poster.alt = `Film poster for ${movieInfo.Title}`;
	    content.innerHTML = `<h1>${movieInfo.Title} <span>(${movieInfo.Year})</span></h1>`;
	    content.innerHTML += `<p>${movieInfo.Genre}</p>`;
	    content.innerHTML += `<p>${movieInfo.Plot}</p>`;
	    content.innerHTML += "<b>Rating: </b>";
	    for (var i = 0; i < 10; i++) {
		    if (i < rating) {
			    content.innerHTML += "<span class=star>★</span>";
		    } else {
		    	content.innerHTML += '<span class="star nonrate">★</span>';
	    	}
		}
	}
}
	movies.addEventListener("change", function() { 
		printMovie(movies.value);
	});
	printMovie(movies.value);