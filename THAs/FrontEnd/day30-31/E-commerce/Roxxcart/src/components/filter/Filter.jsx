import React, { useState } from "react";
import { connect } from "react-redux";
import "./Filter.css";
import { useDispatch } from 'react-redux';
import { 
  filterByGender,
  filterBySize,
  filterByPrice 
} from '../../redux/actions'

// import { filterProducts, sortProducts } from "../actions/productActions";
export default function Filter() {
  const dispatch = useDispatch();
  const [sizeFilter, setSizeFilter] = useState('ALL');
  const [genderFilter, setGenderFilter] = useState('Select');
  const [priceFilter, setPriceFilter] = useState('Select');

  return (
    <div className="filter">
      <div className="order">


        <label>
          Order by Price: {priceFilter}
          <select
            className="form-control"
            value={priceFilter}
            onChange={(e) => {
              dispatch(filterByPrice(e.target.value));
              setPriceFilter(e.target.value);
            }}
          >
            <option value="">Select</option>
            <option value="lowestprice">Lowest to highest</option>
            <option value="highestprice">Highest to lowest</option>
          </select>
        </label>
      </div>
      <div className="filter-options">

      <label>
          Gender
          <select
            className="form-control"
            id='filter-gender'
            value={genderFilter}
            onChange={(e) => {
              dispatch(filterByGender(e.target.value));
              setGenderFilter(e.target.value);
              setPriceFilter('Select');
            }}
          >
            <option value="Select">Select</option>
            <option value="Men">Male</option>
            <option value="Women">Female</option>
          </select>
        </label>
        
        <label>
          {" "}
          Filter Size
          <select
            className="form-control"
            id='filter-size'
            value={sizeFilter}
            onChange={(e) => {
              dispatch(filterBySize(e.target.value));
              setSizeFilter(e.target.value);
            }}
          >
            <option value="ALL">ALL</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </label>
      </div>
    </div>
  );
}
// const mapStateToProps = (state) => ({
//   products: state.products.items,
//   filteredProducts: state.products.filteredItems,
//   size: state.products.size,
//   sort: state.products.sort,
// });
// export default connect(mapStateToProps, { filterProducts, sortProducts })(
//   Filter
// );
