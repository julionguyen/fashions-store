import { Component } from "react";
import { products } from "./data";
import Product from "./Product";
import "./ProductList.css";


export default class ProductList extends Component {

    state = {
        productList: products,
        txtSearch: '',
        priceSortAsc: true
    }

    // Filter the product list by category of "shirts"
    doGetShirts = () => {
        
        this.setState({
            productList: products.filter(shirts=>shirts.category === 'shirts')
        })        

    }

    // Filter the product list by category of "pants" or "skirts"
    doGetPantsSkirts = () => {
        
        this.setState({
            productList: products.filter(pants=>(pants.category === 'pants' || pants.category === 'skirts'))
        })

    }

    // Filter the product list by category of "jackets"
    doGetJackets = () => {

        this.setState({
            productList: products.filter(jackets=>jackets.category === 'jackets')
        })

    }   
    
    // Reset the product list
    doGetAll = () => {
        
        // Reset the list
        this.setState({
            productList: products
        })

    }

    // Sort the price by ascending or descending
    doPriceSort= () => {
        if (this.state.priceSortAsc) {
            this.setState({
                productList: [...this.state.productList.sort((a,b) => a.price-b.price)],
                priceSortAsc: ! this.state.priceSortAsc
            })            
        } else {
            this.setState({
                productList: [...this.state.productList.sort((a,b) => b.price-a.price)],
                priceSortAsc: ! this.state.priceSortAsc
            })
        }                
    }

    // Update the text in the search input to state and filter the list by name or description with the provided
    handleChange = event => {
        let txtSearchSt = event.target.value
        this.setState({     
            txtSearch: txtSearchSt, 
            productList: products.filter(product_search=>
                (product_search.name.toLocaleLowerCase().includes(txtSearchSt) || 
                product_search.description.toLocaleLowerCase().includes(txtSearchSt)))
        })
    }

    render () {
        console.log(this.state.priceSortAsc, this.state.productList)
        return (
            <div className="main">
                    <p className="shop_name">Fashion Boutique</p>
                    <div className="product_category">
                        <button className="button_shirts" onClick={this.doGetShirts}>Shirts</button>
                        <button className="button_pants_skirts" onClick={this.doGetPantsSkirts}>Pants and skirts</button>
                        <button className="button_jackets" onClick={this.doGetJackets}>Jackets</button>
                        <button className="button_all" onClick={this.doGetAll}>All products</button>
                        <button className="button_price_sort" onClick={this.doPriceSort} >
                            {this.state.priceSortAsc ? 'Price Sort Asc.' : 'Price Sort Desc. '}
                        </button>

                        <input type="text" className="txtSearch" placeholder="Search any name or description..." onChange={this.handleChange} />
                </div>                
                <div className="productList_main">
                    {this.state.productList.map((product_item, index) => 
                        <Product key={product_item.category+index+this.state.txtSearch+product_item.price} name={product_item.name} 
                                category={product_item.category} 
                                description={product_item.description} 
                                price={product_item.price}/>)
                    }
                </div>
            </div>
        )
    }

}