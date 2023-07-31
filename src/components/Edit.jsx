import React, { useState } from 'react';
import TextInputComponent from './TextInput';
import { post } from '../modules/post';
import Button from '@mui/material/Button';


export const Edit = () => {

  const paramNames = ['名前', '技術', '生存', '戦闘', '武器', 'ファッション', '大切なもの', '目的', '日々の楽しみ', '相手への感情', 'ヴィークル', 'メモ'];
  const [states, setState] = useState(Array(paramNames.length).fill(''));


  const handleChange = (index, event) => {
    const newStates = [...states];
    newStates[index] = event.target.value;
    setState(newStates);
  };


  const handleButtonClick = () => {

    const character = {
      type: 0,//0人間,1ロボット
      name: states[0],
      params: {
        tech: states[1],
        surv: states[2],
        conv: states[3],
      },
      skills: [
        {
          name: "skill_name",
          effect: ""
        }
      ],
      arm: states[4],
      fashion: states[5],
      treasure: states[6],
      purpose: states[7],
      hobby: states[8],
      feeling: states[9],
      vehicle: states[10],
      memo: states[11],
    }
    post(character)
  };

  return (
    <div>
      <h1>キャラクターシート作成</h1>
      {states.map((state, index) => {
        return <TextInputComponent
          key={paramNames[index]}
          title={paramNames[index]}
          value={state}
          onChange={(e) => handleChange(index, e)} />
      })}
      <div>
        <Button
          variant="outlined"
          color="inherit"
          onClick={handleButtonClick}
        >
          アップロード
        </Button>
      </div>
    </div>
  );
}
