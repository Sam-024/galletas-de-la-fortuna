import React from 'react'

const ShowPhrase = ({randomPhrase}) => {

    const {phrase, author} = randomPhrase;

  return (
      <div className='app__container'>
        <p className='app__phrase'>{phrase}</p>
          </div>
  )
}

export default ShowPhrase