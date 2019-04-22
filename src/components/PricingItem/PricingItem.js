import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingItem.module.css';

const PricingItem = ({ label, icon, capacity, price, description }) => {
  const itemClasses = [styles.pricingItem];
  const labelClasses = [styles.label];
  const buttonClasses = [styles.button];

  if (label === 'Bronze') {
    itemClasses.push(styles.pricingItemBronze);
    labelClasses.push(styles.labelBronze);
    buttonClasses.push(styles.buttonBronze);
  } else if (label === 'Silver') {
    itemClasses.push(styles.pricingItemSilver);
    labelClasses.push(styles.labelSilver);
    buttonClasses.push(styles.buttonSilver);
  } else {
    itemClasses.push(styles.pricingItemGold);
    labelClasses.push(styles.labelGold);
    buttonClasses.push(styles.buttonGold);
  }
  return (
    <div className={itemClasses.join(' ')}>
      <img className={styles.icon} src={icon} alt="Icon" />
      <h2 className={labelClasses.join(' ')}>{label}</h2>
      <p className={styles.capacity}>{capacity} Storage</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>${price}/MO</p>
      <button type="button" className={buttonClasses.join(' ')}>
        Get Started
      </button>
    </div>
  );
};
PricingItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
export default PricingItem;
