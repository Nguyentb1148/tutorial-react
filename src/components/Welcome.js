import React, {Component} from "react";

 class Welcome extends  Component{
     render() {
         return <h2> Welcome back, {this.props.name} !</h2>
     }
 }
 export default  Welcome;