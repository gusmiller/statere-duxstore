/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University - refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 22 - State: Redux Store
 * 
 * Filename: index.jsx
 * Date : 1/22/2024 6:03:40 PM
 *******************************************************************/
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {
     const [state, dispatch] = useStoreContext();

     const {
          image,
          name,
          _id,
          price,
          quantity
     } = item;

     const { cart } = state

     const addToCart = () => {
          const itemInCart = cart.find((cartItem) => cartItem._id === _id)
          if (itemInCart) {
               dispatch({
                    type: UPDATE_CART_QUANTITY,
                    _id: _id,
                    purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
               });
               idbPromise('cart', 'put', {
                    ...itemInCart,
                    purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
               });
          } else {
               dispatch({
                    type: ADD_TO_CART,
                    product: { ...item, purchaseQuantity: 1 }
               });
               idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
          }
     }

     return (
          <div className="card px-1 py-1">
               <Link to={`/products/${_id}`}>
                    <img
                         alt={name}
                         src={`/images/${image}`}
                    />
                    <p>{name}</p>
               </Link>
               <div>
                    <div>{quantity} {pluralize("item", quantity)} in stock</div>
                    <span>${price}</span>
               </div>
               <button onClick={addToCart}>Add to cart</button>
          </div>
     );
}

export default ProductItem;
