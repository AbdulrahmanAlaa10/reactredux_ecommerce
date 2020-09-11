import React, { Component } from "react";
import { getById } from "../api/products";
import {addToCart} from "../Actions/actions";
import {connect} from "react-redux";

class OnlineProduct extends Component{


    state ={
        loading: true,
        quantity : 1,
        foood: {}
    };

    componentDidMount(){
        const id = this.props.match.params.id;

        getById(parseInt(id)) 
           .then(foood => {
               this.setState({
                   foood,
                   loading: false
               });
           })

    }

    handleQuantity = (event) => {
        const value = event.target.value;
        if(value < 1)
        return ;

        this.setState({
            quantity: value
        })
    }
    addToCart = (foood) => {
        this.props.addToCart(foood, this.state.quantity);
    }


    render(){
        if(this.state.loading)
        return 'Loading ^..^';
        const foood = this.state.foood;
        const quantity =this.state.quantity;

        return (
            <div>
                <div className={'row'}>
    
                    <div className="col-12">
                        <div className="container">
                    <h1 className="fooodh1">{foood.name}</h1>
                    <img className="fooodh2" src={foood.channel1} />
                    <img className="fooodh2" src={foood.channel2} />
                    <img className="fooodh2" src={foood.channel3} />
                    <img className="fooodh2" src={foood.channel4} />
                    <img className="fooodh2"src={foood.channel5} />
                    <img className="fooodh2" src={foood.channel7} />
                    <img className="fooodh2" src={foood.channel8} />
                    <img className="fooodh2" src={foood.channel9} />
                    <img className="fooodh2" src={foood.channel10} />
                    <img className="fooodh2" src={foood.channel11} />
                    <img className="fooodh2" src={foood.channel12} />
                    <img className="fooodh2" src={foood.channel13} />
                    <img className="fooodh2" src={foood.channel14} />
                    <img className="fooodh2" src={foood.channel15} />
                    <img className="fooodh2" src={foood.channel17} />
                    <img className="fooodh2" src={foood.channel18} />
                    <img className="fooodh2" src={foood.channel19} />
                    <img className="fooodh2" src={foood.channel20} />
                    <img className="fooodh2" src={foood.channel21} />
                    <img className="fooodh2" src={foood.channel22} />
                    <img className="fooodh2" src={foood.channel23} />
                    <img className="fooodh2" src={foood.channel24} />
                    <img className="fooodh2" src={foood.channel25} />
                    <img className="fooodh2" src={foood.channel26} />
                    <img className="fooodh2" src={foood.channel27} />
                    <img className="fooodh2" src={foood.channel28} />
                    <img className="fooodh2" src={foood.channel29} />
                    <img className="fooodh2" src={foood.channel30} />
                    <img className="fooodh2" src={foood.channel31} />
                    <img className="fooodh2" src={foood.channel32} />
                    <img className="fooodh2" src={foood.channel33} />
                    <img className="fooodh2" src={foood.channel34} />
                    <img className="fooodh2" src={foood.channel35} />
                    <img className="fooodh2" src={foood.channel36} />
                    <img className="fooodh2" src={foood.channel37} />



                    </div>

                    </div>
                
                </div>
                </div>
     
    
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (productInfo, quantity) => dispatch(addToCart(productInfo, quantity)),
    };
}

export default connect(null, mapDispatchToProps)(OnlineProduct);