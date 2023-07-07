import React from "react";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTrash } from "@fortawesome/free-solid-svg-icons";

class Product extends Component {
    state = { name: this.props.pro.name ,
              count:this.props.pro.conut
            } 


    
    get_clases(){
        return "badge text-bg-secondary m-5";
    }

    adding =()=>{
       this.setState({count:this.state.count+1});
    }
    subtracting =()=>{
        this.setState({count:this.state.count-1});
    }

    render() { 
        return (
            <div>
                <span className={this.get_clases()}>{this.state.name}</span>
                <span className="badge text-bg-secondary">{this.state.count}</span>

                <button onClick={this.adding} className="btn btn-primary m-3" > + </button>
                <button onClick={this.subtracting} className="btn btn-primary m-3" > - </button>
                <button className="btn btn-primary m-3" 
                onClick={()=>this.props.deleting(this.props.pro)}>
                    <FontAwesomeIcon icon={faTrash} style={{color: "#a400000",}} />
                    </button>

            </div>
        );
    }
}
 
export default Product;