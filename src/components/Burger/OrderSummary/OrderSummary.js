import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // this could be a functional component, doesn't have to be a class
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );

    return (
      <Aux>
        <h3>Order Summary</h3>
        <p>List of ingredients below:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: ${this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button btnType='Success' clicked={this.props.purchaseContinue}>
          Continue
        </Button>
        <Button btnType='Danger' clicked={this.props.purchaseCancel}>
          Cancel
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
