import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import OrderSummary from './../OrderSummary/OrderSummary';

const OrderForm = props => (
  <Row>
    <Col xs={12}>
      <OrderSummary cost={props.tripCost} options={props.options}/>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.any,
};

export default OrderForm;
