import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const NavigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link='/' exact>
      Burger Builder
    </NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem link='/orders'>Orders</NavigationItem>
    ) : null}
    {!props.isAuthenticated ? (
      <NavigationItem link='/auth'>Authentication</NavigationItem>
    ) : (
      <NavigationItem link='/signout'>Sign Out</NavigationItem>
    )}
  </ul>
);

export default NavigationItems;
