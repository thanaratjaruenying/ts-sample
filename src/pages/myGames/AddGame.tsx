import React from 'react';
import * as styles from './AddGame.scss';

const view = require('../../resources/svg/view.svg');

export default function AddGame() {
  
  return (
    <div className='mainContainer'>
      add game
      <div className={styles.addgame}>add game</div>
      <img src={view} alt="view"/>
    </div>
  );
}
