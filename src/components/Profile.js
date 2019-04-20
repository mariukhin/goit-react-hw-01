import React from 'react';
import PropTypes from 'prop-types';
import Description from './Description/Description';
import Stats from './Stats/Stats';

const Profile = ({ user }) => (
  <div className="profile">
    <Description {...user} />
    <Stats {...user} />
  </div>
);

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Profile;
