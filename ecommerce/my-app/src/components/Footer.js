import React, { Component } from 'react'
import styled from 'styled-components';

export default class footer extends Component {
 render() {
  return (
   <FooterWrapper>
   <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-4 col-sm-2 offset-1">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="./ProductList">Products</a></li>
                        <li><a href="./Cart">Cart</a></li>
                        <li><a href="./Login">Login</a></li>
                       
                    </ul>
                    </div>

                    <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <ul className="list-unstyled">
                    <li>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</li>
                    <li><a href="mailto:sloth@ecommerce.in">sloth@ecommerce.in</a></li>
                    <li><a href="+91 9212345678">+91 9212345678</a></li>
                    
                   
                </ul>
                </div>
               <ul>
                <div>
                   
                        <a class="btn btn-social-icon btn-google" href="http://google.com/+"><i class="fa fa-google-plus"></i></a>
                        <a class="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i
                             class="fa fa-facebook"></i></a>
                        <a class="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i class="fa fa-linkedin"></i></a>
                        <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter"></i></a>
                        <a class="btn btn-social-icon btn-google" href="http://youtube.com/"><i class="fa fa-youtube"></i></a>
                        <a class="btn btn-social-icon" href="mailto:"><i class="fa fa-envelope-o"></i></a>
                    
            </div>
          
            </ul>
            </div>
                <div class="row justify-content-center">
                <div class="col-auto">
               <p>© Copyright 2020 Sloth</p>
                </div></div></div></footer>
                </FooterWrapper>
  )
 }
}

const FooterWrapper = styled.footer`
background:#000;
color:white;
padding: 16px;


`

