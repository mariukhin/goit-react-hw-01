import React from 'react';
import PropTypes from 'prop-types';

const StatItem = ({ label, quantity }) =>(
    <li>
        <span className="label">{label}</span>
        <span className="quantity">{quantity}</span>
    </li>
);

StatItem.defaultProps = {
    label: '',
    quantity: 0,
};
StatItem.propTypes = {
    label: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
};
export default StatItem;