import React, { Component } from 'react';
import Footer from './Footer'
import {Link} from 'react-router-dom';
import styled from 'styled-components';


export default class Default extends Component {
 render() {
  return (
   <React.Fragment>
   <DefaultWrapper>
   <div className="row">
   <div className="col-md-8 p-0">
   <img src="img/a.jpg" width="100%" height="100%" alt="shoe"/>
   <h1 className="a">New Collection Coming Soon...</h1>
   <Link to="/ProductList"><button className=' btn btn-black'><b>shop now</b></button></Link>
   </div>
   <div className="col-md-4 p-0">
   <img src="img/b.jfif" width="100%" alt="shoe"/>
   <img src="img/c.jfif" width="100%" alt="shoe"/>
   </div>
   
   </div>
   
   </DefaultWrapper>

 <Footer/>
 </React.Fragment>
   
  )
 }
}
const DefaultWrapper= styled.nav`
.btn{
 position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background:black;
  color:red;
 
}
.a{
 position: absolute;
 top: 8px;
 left: 16px;
 color:#E0E0E0;
 text-shadow:black;
 font-family:impact Courier New;
 padding:16px 10px;
 
}
`

