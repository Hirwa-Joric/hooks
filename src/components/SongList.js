import React, { useState } from 'react';
import { v1 as uuidv1 } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'almost home', id: uuidv1() },
    { title: 'memory gospel', id: uuidv1() },
    { title: 'this wild darkness', id: uuidv1() }
  ]);
  const addSong = (title) => {
    setSongs([...songs, { title, id: uuidv1() }]);
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return ( <li key={song.id}>{song.title}</li> );
        })}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
}

export default SongList;
