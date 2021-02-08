import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

const Checkout = (props) => {
  const checkoutContinueHandler = () => {
    props.history.replace('/checkout/contact-data');
  };

  const checkoutCancelHandler = () => {
    props.history.goBack();
  };

  let summary = <Redirect to='/' />;

  if (props.ings) {
    const purchasedRedirect = props.purchased ? <Redirect to='/' /> : null;

    summary = (
      <div>
        {purchasedRedirect}
        <CheckoutSummary
          ingredients={props.ings}
          onCheckoutContinue={checkoutContinueHandler}
          onCheckoutCancel={checkoutCancelHandler}
        />
        <Route
          path={props.match.path + '/contact-data'}
          component={ContactData}
        />
      </div>
    );

    return summary;
  }
};

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased,
  };
};

export default connect(mapStateToProps)(Checkout);
