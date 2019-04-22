import React from 'react';
import PropTypes from 'prop-types';
import PricingItem from '../PricingItem/PricingItem';

const PricingPlan = ({ items }) => (
  <ul className="pricingPlan">
    {items.map(item => (
      <li className="item" key={item.label}>
        <PricingItem
          icon={item.icon}
          description={item.description}
          capacity={item.capacity}
          price={item.price}
          label={item.label}
        />
      </li>
    ))}
  </ul>
);
PricingPlan.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      capacity: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default PricingPlan;
