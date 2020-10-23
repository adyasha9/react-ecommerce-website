import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import img from './sloth.png';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import {storeProducts} from '../data'
import Product from './Product';

export default class NavBar extends Component {
 constructor(){
  super();
  this.state={
   search: ''
  };
 }
 updateSearch(event) {
 this.setState({search:event.target.value.substr(0,20)})
 }
    render() {
     let filteredProducts = storeProducts.filter(
      (product) => {
       return product.title.indexOf(this.state.search) !== -1;
      }
     );
        return ( 
        <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5 navbar-toggle">
       
        <Link to="/">
        <img src={require("./sloth.png")} className='navbar-brand-dark' width='80x' height='80px' alt='sloth'/>
        </Link>
        <ul className='navbar-nav align-items-center'>
        <li className='nav-item ml-5'></li>
        <Link to="/ProductList" className="nav-link">
        Products
        </Link> 
      
      
       
        </ul>

      
        <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}/>

        
        <Link to="/cart" className="ml-auto">
        <ButtonContainer>
        <span className="mr-2" color="#ff0000">
         <i className="fas fa-shopping-cart" />
         </span>
        
        </ButtonContainer>
        </Link>
       
        <LoginButton/>
        <LogoutButton/>
        {filteredProducts.map((product) => {
         return <Product product={product} key={product.id}/>
        })}
        </NavWrapper>
        
        
        );
      }
    }
    const NavWrapper = styled.nav`
    background:#000;
    
   `;
    