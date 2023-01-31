import Image from "next/image";
import Head from "next/head";

// export async function getStaticPaths() {
//   const data = await fetch(
//     `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=fr`
//   );
//   const res = await data.json();
//   return res.results.map((movie) => ({
//     movie: toString(movie.id),
//   }));
// }

export default async function page({ params }) {
  const { movie } = params;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}&language=fr`
  );
  const res = await data.json();
  console.log(res);
  const im = `https://image.tmdb.org/t/p/original/`;

  return (
    <div>
      <Head>
        <title>{res.title}</title>
      </Head>
      <div>
        <h1 className="text-2xl font-extrabold ">{res.title}</h1>
        <h2 className="text-lg mt-3">{res.release_date}</h2>

        <h2 className="text-lg ">Runtime: {res.runtime} minutes</h2>
        <h2 className="bg-green-600 inline-block px-4 py-1 my-2 rounded-md text-sm">
          {res.status}
        </h2>
        <p className="py-2">{res.tagline}</p>

        <div className="flex row-end-1 gap-4">
          <p className="text-md font-bold">
            Revenue :{" "}
            <span className="bg-slate-600 py-1 px-3 rounded-sm">
              {res.revenue}$
            </span>
          </p>
          <p className="text-md font-bold">
            Budget :{" "}
            <span className="bg-slate-600 py-1 px-3 rounded-sm">
              {res.budget}$
            </span>
          </p>
        </div>
        <Image
          src={im + res.backdrop_path}
          width={1000}
          height={1000}
          className="my-8 w-full"
          priority
        />
        <h2 className="text-2xl font-bold">Présentation</h2>
        <p className="text-lg">{res.overview}</p>
      </div>
    </div>
  );
}
