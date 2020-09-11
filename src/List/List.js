import React, { Component, Fragment } from "react";
import ProductsApi from "../api/products";
import ListItem from "./ListItem";


class List extends Component {

  state = {
    List: [],
  };

  componentDidMount() {
    ProductsApi.getAll()
      .then( data => {
        this.setState({
          List: data
        })

      });

  }
    render() {
        return(
            
    <Fragment>    
        <div className="fooof text-center">
        <h2 className="List">Channel List Paid </h2>
        <br />
        </div>

        <div class="row row-cols-1 row-cols-md-3">
          {this.state.List.map(foood =>
                <div class="col mb-4" key={foood.id}>
                  <ListItem foood={foood} />

                </div>

            )}
        </div>

    </Fragment>
        )
    };
}

export default List;