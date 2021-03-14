import React from 'react';
import PropTypes from 'prop-types';
import Styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionIcons = ({values, required, setOptionValue, currentValue}) => (
  <div className={Styles.component}>
    {!required ? '' : (
      <div
        className={currentValue == '' ? `${Styles.icon} ${Styles.iconActive}` : Styles.icon}
        value=''
        onClick={() => setOptionValue('')}
      ><Icon name='times-circle' />None</div>
    )}
    {values.map(value => (
      <div
        className={value.id == currentValue ? `${Styles.icon} ${Styles.iconActive}` : Styles.icon}
        key={value.id}
        onClick={() => setOptionValue(value.id)}
      >
        <Icon name={value.icon} />
        {value.name}
        ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  name: PropTypes.string,
  currentValue: PropTypes.string,
  values: PropTypes.array,
  required: PropTypes.bool,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;
