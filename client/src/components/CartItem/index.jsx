/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University - refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 22 - State: Redux Store
 * 
 * Filename: index.jsx
 * Date : 1/22/2024 6:03:40 PM
 *******************************************************************/
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item }) => {

     const [, dispatch] = useStoreContext();

     const removeFromCart = item => {
          dispatch({
               type: REMOVE_FROM_CART,
               _id: item._id
          });
          idbPromise('cart', 'delete', { ...item });

     };

     const onChange = (e) => {
          const value = e.target.value;
          if (value === '0') {
               dispatch({
                    type: REMOVE_FROM_CART,
                    _id: item._id
               });
               idbPromise('cart', 'delete', { ...item });

          } else {
               dispatch({
                    type: UPDATE_CART_QUANTITY,
                    _id: item._id,
                    purchaseQuantity: parseInt(value)
               });
               idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

          }
     }

     return (
          <div className="flex-row">
               <div>
                    <img
                         src={`/images/${item.image}`}
                         alt=""
                    />
               </div>
               <div>
                    <div>{item.name}, ${item.price}</div>
                    <div>
                         <span>Qty:</span>
                         <input
                              type="number"
                              placeholder="1"
                              value={item.purchaseQuantity}
                              onChange={onChange}
                         />
                         <span
                              role="img"
                              aria-label="trash"
                              onClick={() => removeFromCart(item)}
                         >
                              🗑️
                         </span>
                    </div>
               </div>
          </div>
     );
}

export default CartItem;
