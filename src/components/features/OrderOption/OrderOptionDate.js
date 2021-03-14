import React from 'react';
import DatePicker from 'react-datepicker';
import Styles from './OrderOption.scss';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';


const OrderOptionDate = ({currentValue, setOptionValue}) => (
  <div>
    <DatePicker
      className={Styles.input}
      value={currentValue}
      selected={currentValue}
      onChange={setOptionValue}
      placeholderText={'Choose start date'}
    />
  </div>
);

OrderOptionDate.propTypes = {
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;
