import React from "react"
import Header from "./components/Header"
import Cards from "./components/Cards"

function App() {
  return (
    <React.Fragment>
      
    <div id="content">
      <Header />
    </div>

    <div id="card">
      <Cards />
    </div>

    </React.Fragment>
  );
}

export default App;
