import React from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';
import StatsSection from './StatsSection/StatsSection';
import PricingPlan from './PricingPlan/PricingPlan';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const App = ({ user, title, stats, items, transactions }) => (
  <div>
    <Profile user={user} />
    <StatsSection title={title} stats={stats} />
    <PricingPlan items={items} />
    <TransactionHistory transactions={transactions} />
  </div>
);
App.defaultProps = {
  title: '',
};
App.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
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
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      capacity: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default App;
