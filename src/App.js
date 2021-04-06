import React from "react"
import Cards from "./components/Cards"
import rickandmorty from './rickandmorty.json'

function App() {
  return (
    <React.Fragment>


<div id="body">
      <header> 
        <h1>Rick & Morty <span>Characters</span></h1>
      </header>

    <div id="content">
        {
          rickandmorty.map(function(item, idx){
            return(
              <div id='cards' key={idx}>
                <Cards cardData={item} />
              </div>
            )
          })
        }
      </div>

      <footer>
        <h3>Valentina Nies</h3>
      </footer>

    </div>

    </React.Fragment>
  );
}

export default App;
