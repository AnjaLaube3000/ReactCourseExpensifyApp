import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to='/' activeClassName="is-active" exact>Startpage</NavLink>
    <NavLink to='/create' activeClassName="is-active">New Expense</NavLink>
    <NavLink to='/edit' activeClassName="is-active">Edit your Expenses</NavLink>
    <NavLink to='/help' activeClassName="is-active">Help me</NavLink>
  </header>
)

export default Header
