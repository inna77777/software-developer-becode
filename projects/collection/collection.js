const collection = [
  {
    name: "Inception",
    releaseDate: "July 16, 2010",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    genre: ["Sci-Fi", "Action", "Thriller"],
    description:
      "A skilled thief enters the dreams of others to steal their secrets from their subconscious.",
    trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    image: "./images/film1.jpg",
  },
  {
    name: "The Godfather",
    releaseDate: "March 15, 1972",
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Al Pacino", "James Caan"],
    genre: ["Crime", "Drama"],
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    trailer: "https://www.youtube.com/watch?v=UaVTIH8mujA",
    image: "./images/film2.jpg",
  },
  {
    name: "The Shawshank Redemption",
    releaseDate: "September 23, 1994",
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    genre: ["Drama"],
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    trailer: "https://www.youtube.com/watch?v=PLl99DlL6b4",
    image: "./images/film3.jpg",
  },
  {
    name: "Pulp Fiction",
    releaseDate: "October 14, 1994",
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    genre: ["Crime", "Drama"],
    description:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    trailer: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
    image: "./images/film4.jpg",
  },
  {
    name: "The Matrix",
    releaseDate: "March 31, 1999",
    director: "The Wachowskis",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    genre: ["Sci-Fi", "Action"],
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    trailer: "https://www.youtube.com/watch?v=m8e-FF8MsqU",
    image: "./images/film5.jpg",
  },
  {
    name: "Forrest Gump",
    releaseDate: "July 6, 1994",
    director: "Robert Zemeckis",
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    genre: ["Drama", "Romance"],
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
    trailer: "https://www.youtube.com/watch?v=bLvqoHBptjg",
    image: "./images/film6.jpg",
  },
  {
    name: "The Dark Knight",
    releaseDate: "July 18, 2008",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    genre: ["Action", "Crime", "Drama"],
    description:
      "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    trailer: "https://www.youtube.com/watch?v=_PZpmTj1Q8Q",
    image: "./images/film7.jpg",
  },
  {
    name: "Fight Club",
    releaseDate: "October 15, 1999",
    director: "David Fincher",
    cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
    genre: ["Drama"],
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    trailer: "https://www.youtube.com/watch?v=qtRKdVHc-cE",
    image: "./images/film8.jpg",
  },
  {
    name: "Jurassic Park",
    releaseDate: "June 11, 1993",
    director: "Steven Spielberg",
    cast: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
    genre: ["Sci-Fi", "Adventure"],
    description:
      "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
    trailer: "https://www.youtube.com/watch?v=QWBKEmWWL38",
    image: "./images/film9.jpg",
  },
  {
    name: "Titanic",
    releaseDate: "December 19, 1997",
    director: "James Cameron",
    cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
    genre: ["Drama", "Romance"],
    description:
      "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    trailer: "https://www.youtube.com/watch?v=CHekzSiZjrY",
    image: "./images/film10.jpg",
  },
  {
    name: "Avatar",
    releaseDate: "December 18, 2009",
    director: "James Cameron",
    cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
    genre: ["Sci-Fi", "Adventure"],
    description:
      "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    trailer: "https://www.youtube.com/watch?v=d9MyW72ELq0",
    image: "./images/film11.jpg",
  },
  {
    name: "The Silence of the Lambs",
    releaseDate: "February 14, 1991",
    director: "Jonathan Demme",
    cast: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn"],
    genre: ["Crime", "Drama", "Thriller"],
    description:
      "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    trailer: "https://www.youtube.com/watch?v=6iB21hsprAQ",
    image: "./images/film12.jpg",
  },
  {
    name: "Goodfellas",
    releaseDate: "September 19, 1990",
    director: "Martin Scorsese",
    cast: ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
    genre: ["Crime", "Drama"],
    description:
      "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    trailer: "https://www.youtube.com/watch?v=2ilzidi_J8Q",
    image: "./images/film13.jpg",
  },
  {
    name: "Gladiator",
    releaseDate: "May 5, 2000",
    director: "Ridley Scott",
    cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
    genre: ["Action", "Drama"],
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    trailer: "https://www.youtube.com/watch?v=P5ieIbInFpg",
    image: "./images/film14.jpg",
  },
  {
    name: "The Lord of the Rings",
    releaseDate: "December 19, 2001",
    director: "Peter Jackson",
    cast: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    genre: ["Adventure", "Fantasy"],
    description:
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    trailer: "https://www.youtube.com/watch?v=V75dMMIW2B4",
    image: "./images/film15.jpg",
  },
];

// module.exports = collection;
  export default collection;
