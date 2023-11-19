export default function movies({data}){
    
    return (      
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Ano</th>
              </tr>
            </thead>
            <tbody>               
                    {data.Search.map((movie,i) => 
                    <tr key={i}>
                      <td>
                        {movie.Title}
                      </td>
                      <td>
                        {movie.Year}
                      </td>
                      <td>
                        <img src={movie.Poster} width={100} ></img> 
                      </td>
                    </tr>
                    
                    )}
            </tbody>
          </table>
    )
}

export async function getServerSideProps(context){

  const res = await fetch(`http://www.omdbapi.com/?apikey=4e779fd4&s=bagdad`)

  const data = await res.json()

  return {

      props: {

          data

      }

  }

}