import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import OrderOption from '../OrderOption/OrderOption';
import PropTypes from 'prop-types';
import OrderSummary from './../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import Button from '../../common/Button/Button';
import settings from '../../../data/settings.js';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';

const sendOrder = (options, tripCost, tripDetails) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    ...tripDetails,
  };
  if(payload.contact != '' && payload.name != '') {

    const url = settings.db.url + '/' + settings.db.endpoint.orders;

    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  } else {
    alert('Please provide: name and contact informations.');
  }
};

const OrderForm = props => (
  <Row>
    {pricing.map((option) =>
      <Col md={4} key={option.id}><OrderOption {...option} currentValue={props.options[option.id]} setOrderOption={props.setOrderOption}/></Col>
    )}
    <Col xs={12}>
      <OrderSummary cost={props.tripCost} options={props.options}/>
    </Col>
    <Button onClick={() => sendOrder(props.options, props.tripCost, props.tripDetails )}>Order now!</Button>
    {console.log(props.tripDetails)}
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.any,
  name: PropTypes.string,
  setOrderOption: PropTypes.func,
  tripDetails: PropTypes.object,
};

export default OrderForm;
