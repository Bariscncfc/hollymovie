import React, { Component } from 'react'
import { Link,Route,Routes } from 'react-router-dom'
import MoviesPage from './components/pages/MoviesPage'

 class App extends Component {
  render() {
    return (
      <div>
        <Link to="movies">Movies</Link>
         <Routes>
        <Route path="/movies" exact element={<MoviesPage />} />
      </Routes>
      </div>
    )
  }
}

export default App;