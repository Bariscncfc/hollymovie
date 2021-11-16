import React from 'react'
import PropTypes from 'prop-types'
const MoviesList = ({ movies }) => {

   const emptyMessage = (
       <p>Film yok</p>
   );

   const moviesList = (
       <div>
            MoviesList
        </div>
   );

    return (
        <div>
        { movies.length === 0 ? emptyMessage : moviesList}
        </div>
    )
}

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired
};

export default MoviesList
