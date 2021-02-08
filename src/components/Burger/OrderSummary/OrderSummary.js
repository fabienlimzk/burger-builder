import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
  // this could be a functional component, doesn't have to be a class

  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Order Summary</h3>
      <p>List of ingredients below:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: ${props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType='Success' clicked={props.purchaseContinue}>
        Continue
      </Button>
      <Button btnType='Danger' clicked={props.purchaseCancel}>
        Cancel
      </Button>
    </Aux>
  );
};

export default OrderSummary;
