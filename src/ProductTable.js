import React, { Component } from "react";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.handleDestroy = this.handleDestroy.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(id) {
    this.props.onEdit(id);
  }
  handleDestroy(id) {
    this.props.onDestroy(id);
  }

  render() {
    let productsArr = this.props.products;
    let rows = [];

    productsArr.forEach((product) => {
      if (product.product.name.indexOf(this.props.filterText) === -1) {
        return;
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.id}
          onEdit={this.handleEdit}
          onDestroy={this.handleDestroy}
        ></ProductRow>
      );
    });

    return (
      <div>
        <table class="table table-striped table-sm">
          <thead class="thead-dark">
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Available in stock</th>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
