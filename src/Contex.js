import React, { Component } from 'react';
import {Data, DetailData} from './Data';

const ProductContent = React.createContext();

class ProductDisplay extends Component {
    state = {
        products: [],
        details : DetailData,
        cart : [],
        modalOpen : false,
        modalProduct : DetailData,
        cartSubTotal : 0,
        cartTax: 0,
        cartTotal : 0,
    };
    componentDidMount() {
        this.setProducts()
    }
    setProducts = () => {
        let tempProducts= [];
        Data.forEach((item) => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem]
        })
        this.setState(() => {
            return {products: tempProducts};
        })
    };

    getItem = (id) => {
        const product = this.state.products.find(item => item.id ===id);
        return product;
    };
    
    handleDetails = id => {
        const product = this.getItem(id);
        this.setState(() => {
          return { details: product };
        });
      };
    
    addToBag = (id) => {
        let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
        this.setState(() => {
            return { 
                products: [...tempProducts],
                cart: [...this.state.cart, product], };
          }, this.addTotal);

    };
    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
          return { modalProduct: product, modalOpen: true };
        });
      };
      closeModal = () => {
        this.setState(() => {
          return { modalOpen: false };
        });
      };
    increment = (id) => {
        let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(() => {
      return {
        cart: [...tempCart]
      };
    }, ()=> {this.addTotal()});
  };
    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => {
          return item.id === id;
        });
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;
        if (product.count === 0) {
          this.removeItem(id);
        } else {
          product.total = product.count * product.price;
          this.setState(() => {
            return { cart: [...tempCart] };
          }, ()=> {this.addTotal()});
        }
    }
    removeItem = id => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter((item) => {
            return item.id !== id;
        })

        const index = tempProducts.indexOf(this.getItem(id))
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;
        this.setState(()=>{
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            }
        }, ()=> {
            this.addTotal()
        })
    }
    clearAll = () => {
        this.setState(()=>{
            return {cart:[]}
        }, ()=>{
            this.setProducts();
            this.addTotal()
        })
    }
    addTotal = () => {
        let total = 0;
        this.state.cart.map((item) => (total += item.total))
        const tempTax = total * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const subTotal = total + tax;
        this.setState(()=> {
            return {
                cartSubTotal : subTotal,
                cartTax : tax,
                cartTotal: total,
            }
        })
    }

    render() {
        return (
            <ProductContent.Provider value={{
            ...this.state,
            handleDetails: this.handleDetails,
            addToBag : this.addToBag,
            openModal: this.openModal,
            closeModal: this.closeModal,
            decrement : this.decrement,
            increment: this.increment,
            removeItem : this.removeItem,
            clearAll : this.clearAll,
            }}>
                {this.props.children}
            </ProductContent.Provider>
        )
    }
}
 const ProductConsumer = ProductContent.Consumer;


 export {ProductDisplay, ProductConsumer}