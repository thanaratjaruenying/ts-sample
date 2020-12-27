import React, { useState } from 'react';
import { Link, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import DropdownList from '../../components/dropdownList/DropdownList';
import './MyGames.scss';

export default function MyGames() {
  const { url } = useRouteMatch();
  const history = useHistory();
  const [filterRating, setFilterRating] = useState<string>('');
  const [filterGenres, setFilterGenres] = useState<string>('');
  const ratingList = [
    { value: '1', text: '18+' },
    { value: '2', text: '20+' },
  ];
  const genreList = [
    { value: '1', text: 'Nudity' },
    { value: '2', text: 'Comedy' },
  ];

  return (
    <div className='myGamesContainer'>
      <div className='dropdownListChild'>
        <DropdownList
          id='select-rating'
          placeHolder='select rating'
          label='Filter by rating:'
          options={ratingList}
          value={filterRating}
          handleOnChange={setFilterRating}
        />
        <DropdownList
          id='select-genre'
          placeHolder='select genres'
          label='Filter by genres:'
          options={genreList}
          value={filterGenres}
          handleOnChange={setFilterGenres}
        />
      </div>
      <button onClick={() => history.push(`${url}/add-game`)}>add game</button>
    </div>
  );
}
