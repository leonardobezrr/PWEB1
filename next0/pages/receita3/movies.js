export default function movies(){
    const data = {
        "Search": [

            {
        
              "Title": "Bagdad Café",
        
              "Year": "1987",
        
              "imdbID": "tt0095801",
        
              "Type": "movie",
        
              "Poster": "https://m.media-amazon.com/images/M/MV5BNmUwZGZhZTktNGNmOS00NDA0LWEzYWUtZjE2ODA5OTM2OTc2XkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg"
        
            },
        
            {
        
              "Title": "The Thief of Bagdad",
        
              "Year": "1940",
        
              "imdbID": "tt0033152",
        
              "Type": "movie",
        
              "Poster": "https://m.media-amazon.com/images/M/MV5BZWFhYjg4NTEtY2IzMS00YTc2LTg1NGUtMTEzNDBlZDIxZTk3XkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg"
        
            },
        
            {
        
              "Title": "Bagdad",
        
              "Year": "1949",
        
              "imdbID": "tt0041149",
        
              "Type": "movie",
        
              "Poster": "https://m.media-amazon.com/images/M/MV5BZjAxYTJmMmItYzZhMS00OWMwLTkxMjEtZjVmNmM3ZGRlZTljXkEyXkFqcGdeQXVyNTk1MTk0MDI@._V1_SX300.jpg"
        
            },
        
            {
        
              "Title": "Bowery to Bagdad",
        
              "Year": "1955",
        
              "imdbID": "tt0044388",
        
              "Type": "movie",
        
              "Poster": "https://m.media-amazon.com/images/M/MV5BZTMwMTUyZTktOTk4OC00ZGY2LWFmMzAtYjkxMWMxNjdmOTg4XkEyXkFqcGdeQXVyNDY3MzU2MDM@._V1_SX300.jpg"
        
            },
        
            {
        
              "Title": "Babes in Bagdad",
        
              "Year": "1952",
        
              "imdbID": "tt0044389",
        
              "Type": "movie",
        
              "Poster": "https://m.media-amazon.com/images/M/MV5BYjBmNmRlNzAtZDNjYi00ZjQ0LTljYTktZGUxOGNhMjFhZWI1XkEyXkFqcGdeQXVyMTE2NzA0Ng@@._V1_SX300.jpg"
        
            }
        
          ],
        
          "totalResults": "59",
        
          "Response": "True"
    }
    
    return (
      <div>
          <table>
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Ano</th>
              </tr>
            </thead>
            <tbody>
            {data.Search.map((movie,i) => (
              <tr key={i}>
                  <td>
                    {movie.Title}
                  </td>
                  <td>
                    {movie.Year}
                  </td>
              </tr>
            ))}
            </tbody>
          </table>
      </div>
    )
}