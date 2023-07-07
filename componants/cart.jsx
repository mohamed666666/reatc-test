import React from "react";
import { Component } from "react";
import Product from './Product';


class Cart extends Component {
    state = { 
        products:[
            {id :1,name:"helicobter",conut:1},
            {id :2,name:"tank",conut:2},
            {id :3,name:"Rpj",conut:10},
        ]
     } 
    

    delete= (product)=>{
        const newprods=this.state.products.filter((p)=> p.id !== product.id);
        this.setState({products:newprods});
    }

    render() { 
        return (
            <React.Fragment>
                <h1>Shoping Cart</h1>
                {this.state.products.map(product=> <Product  deleting={this.delete} key={product.id} pro = {product}/>)}
            </React.Fragment>
        );
    }
}
 
export default Cart;