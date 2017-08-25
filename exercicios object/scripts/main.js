var movies = [
	{
		title: "Bingo",
		rating: 3.4,
		hasWatched: false
	},
	{
		title: "Planeta Dos Macacos",
		rating: 4.5,
		hasWatched: true
	},
	{
		title: "Homem Aranha De Volta Ao Lar",
		rating: 5,
		hasWatched: true
	},
	{
		title: "A Torre Negra",
		rating: 4,
		hasWatched: false
	}
]
	function listaFilmes() {
	for (var i = 0; i < movies.length; i++) {
		if (movies[i].hasWatched == false) {
			console.log("Você não assistiu \"" +movies[i].title + "\" - " +movies[i].rating + " estrelas");
		} else {
			console.log("Você assistiu \"" +movies[i].title + "\" - " +movies[i].rating + " estrelas");
		}
	}
}

listaFilmes();