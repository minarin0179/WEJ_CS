import React from 'react';
import { Link } from 'react-router-dom';


export const Top = () => {

  return (
    <div>
      <h1>終末紀行キャラクターシート</h1>
      <p>
        <Link to="/edit">キャラを作成する</Link><br />
        <Link to="/list">キャラを確認する</Link>
      </p>
    </div>
  );
}
