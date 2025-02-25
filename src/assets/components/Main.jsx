import { useState } from 'react';

const Main = () => {

const [Movies, setMovies] = useState([
    { title: 'Inception', genere: 'Fantascienza' },
    { title: 'Il Padrino', genere: 'Thriller' },
    { title: 'Titanic', genere: 'Romantico' },
    { title: 'Batman', genere: 'Azione' },
    { title: 'Interstellar', genere: 'Fantascienza' },
    { title: 'Pulp Fiction', genere: 'Thriller' }
  ])  

const [selectedGenere, setSelectedGenere] = useState('');

const [selectedTitles, setSelectedTitles] = useState([]);












  const handleChange = (e) =>{

  const genere = (e.target.value)

  setSelectedGenere(genere)

  let filteredMovies ;


  
  if(genere === ""){
    filteredMovies = Movies;
  }else{
    filteredMovies = Movies.filter((movie) => movie.genere === genere);
  }


  setSelectedTitles(filteredMovies.map((movie) => movie.title ));

}
  

    return(
        <main>

            <h2 className='title_main'>
                SELEZIONA UN GENERE
            </h2>

            
            
            <div className='select_div'>
            <select className='select_main' name="Film" onChange={handleChange}>

        <option value="">Seleziona un film</option>

{
    Movies.map((element, index) => (

    <option key={index} value={element.genere}>

    {element.genere}


    </option>

    ))}

      </select>

            </div>

            


        {
            <ul>

            {selectedTitles.map((title, index) => (
            <li key={index}>{title}</li>
          ))}

            </ul>
        }

            
        
    </main>
    

    )
}


export default Main;