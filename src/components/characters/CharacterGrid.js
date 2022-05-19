import React from 'react'
import loading from '../../img/spinner.gif';
import CharacterItem from './CharacterItem';

const CharacterGrid = ({items, isLoading}) => {
  return isLoading ? (<img src={loading} />) : (<section className='cards'>
      {items.map( item => (
          <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
  </section>)
 }

export default CharacterGrid