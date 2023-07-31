import React, { useEffect, useState } from 'react';
import { get } from '../modules/get';
import { Character } from './Character';


export const List = () => {

  const [charactesrs, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    get().then((res) => {
      setCharacters(res.documents);
      setLoading(false);
    });
  }, []);


  if (loading) return <div>loading...</div>

  return (
    <div>
      <h1>キャラクターシート一覧</h1>
      <ul>
        {charactesrs.map((character, index) => {
          return <Character key={index} character={character} /> 
        })}
      </ul>
    </div>
  );
}
