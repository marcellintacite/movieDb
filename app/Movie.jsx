import Link from "next/link";
import Image from "next/image";
export default function Movie({ title, releaseDate, poster_path, id }) {
  const im = `https://image.tmdb.org/t/p/original/${poster_path}`;
  return (
    <div className="">
      <Link href={`/${id}`}>
        <Image
          src={im}
          width={400}
          height={350}
          alt={title}
          className="rounded-md"
        />
      </Link>
      <h1 className="text-2xl py-1">{title}</h1>
      <h2> {releaseDate}</h2>
    </div>
  );
}
