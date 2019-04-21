import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
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

const stats = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.svg', percentage: 10 },
];

ReactDOM.render(
  <App user={user} title="Upload stats" stats={stats} />,
  document.getElementById('root'),
);
