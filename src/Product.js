import { Component } from "react";
import "./Product.css"

export default class Product extends Component {
    state = {
        name: this.props.name,
        category: this.props.category,
        description: this.props.description,
        price: this.props.price
    }
    render () {
        return (
            <div className="product_item">                
                <table className="product_details_table">
                    <thead>
                        <tr>
                            <td  className="product_name" colSpan={2}>
                                    {this.state.category === 'shirts' ? '👚' :  
                                    this.state.category === 'pants' ? '👖' : 
                                    this.state.category === 'skirts' ? '👗' :
                                    this.state.category === 'jackets' && '🧥'                                    
                                    }
                                    {this.state.name} 
                            </td>
                        </tr>
                        <tr>
                            <td className="product_desc_header">Description:</td>
                            <td className="product_price_header">Price</td>
                        </tr></thead>
                    <tbody>
                        <tr>
                            <td className="product_desc">{this.state.description}</td>
                            <td className="product_price">${this.state.price}</td>
                        </tr>
                    </tbody>
                </table>                                        
            </div>
        )
    }
}