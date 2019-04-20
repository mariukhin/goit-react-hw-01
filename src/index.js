import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/Profile';
import photo from './img/ProfilePhoto.png';

const user = {
  name: 'Timothy Grant',
  tag: '@tgrant',
  location: 'Sao Paulo, Brazil',
  avatar: photo,
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

ReactDOM.render(<Profile user={user} />, document.getElementById('root'));
