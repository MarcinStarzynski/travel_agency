import React from 'react';
import PropTypes from 'prop-types';
import Styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionNumber = ({currentValue, limits, setOptionValue, price}) => (
  <div className={Styles.number}>
    <input
      type='number'
      className={Styles.inputSmall}
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
    ({formatPrice(price)})
  </div>
);

OrderOptionNumber.propTypes = {
  name: PropTypes.string,
  currentValue: PropTypes.any,
  limits: PropTypes.object,
  setOptionValue: PropTypes.func,
  price: PropTypes.any,
};

export default OrderOptionNumber;
