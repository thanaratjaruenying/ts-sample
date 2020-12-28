import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

import styles from './Home.module.scss';

export default function HomePage() {
  return (
    <div>
      <div className={styles.myGamesContainer}>myGamesContainer</div>
      <DeleteIcon />
    </div>
  );
}
