import React, { useState } from 'react';

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(title, artist);
    setTitle('');
    setArtist('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Song name:</label>
      <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Artist:</label>
      <input type='text' value={artist} onChange={(e) => setArtist(e.target.value)} />
      <input type='submit' value='add' />
    </form>
  );
};

export default NewSongForm;
