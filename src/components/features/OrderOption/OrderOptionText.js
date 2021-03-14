import React from 'react';
import Styles from './OrderOption.scss';
import PropTypes from 'prop-types';


const OrderOptionText = ({currentValue, setOptionValue}) => (
  <div>
    <input
      className={Styles.input}
      type='text'
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
      placeholder={'Input Your data here'}
    />
  </div>
);

OrderOptionText.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;
