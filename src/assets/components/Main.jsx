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
  
  const [newMovies, setNewMovies] = useState('')

    return(
        <main>
            
            

            <select name="Film" onChange={handleChange}>

            <option value="">Seleziona un film</option>
            {
                Movies.map((element, index)=>{
                    <option key={index} value={element}>Seleziona un genere</option>
                    {Movies.genere}

                })
            }
  
            </select>

            
        
    </main>
    

    )
}


export default Main;