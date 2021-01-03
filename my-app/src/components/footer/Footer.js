import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import RoomIcon from '@material-ui/icons/Room';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-element">
          <IconButton size='small'>
          <SearchIcon fontSize='large' className='footer-button' />
          <h3>Search</h3>
          </IconButton>
      </div>
      <div className="footer-element">
          <IconButton size='small'>
          <RoomIcon fontSize='large' className='footer-button' />
          <h3>GPS</h3>
          </IconButton>
      </div>
      <div className="footer-element">
          <IconButton size='small'>
          <FavoriteIcon fontSize='large' className='footer-button' />
          <h3>Favorites</h3>
          </IconButton>
      </div>
    </div>
  );
}
