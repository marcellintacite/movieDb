import Movie from "./Movie";
export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=fr`,
    {
      next: {
        revalidate: 20,
      },
    }
  );
  const res = await data.json();

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">
        Bibliothèque vidéos avec next
      </h1>
      <div className="grid gap-16 grid-cols-fluid mt-10">
        {res.results.map((movie) => {
          return (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              releaseDate={movie.release_date}
              poster_path={movie.poster_path}
            />
          );
        })}
      </div>
    </div>
  );
}
