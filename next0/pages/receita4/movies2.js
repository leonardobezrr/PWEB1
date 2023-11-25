import useSWR from "swr";

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}

export default function Movies2() {
  const { data, error } = useSWR(
    "http://www.omdbapi.com/?apikey=4e779fd4&s=bagdad",
    fetcher
  );

  if (error) return <div>Falha na reprodução...</div>;
  if (!data) return <div>Carregando...</div>;

  return (
    <div>
      {data.Search.map((m) => (
        <div key={m.imdbID}>
          <a href={`http://www.imdb.com/title/${m.imdbID}`} target="_blank" rel="noopener noreferrer">
            {m.Title} --- {m.Year}
          </a>
        </div>
      ))}
    </div>
  );
}
