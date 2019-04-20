import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/Profile';

const user = {
  name: 'Jacques Gluke',
  tag: '@jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar:
    'http://okcolab.sasquatchstudio.co/wp-content/uploads/2017/05/avatar-sample.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

ReactDOM.render(<Profile user={user} />, document.getElementById('root'));
