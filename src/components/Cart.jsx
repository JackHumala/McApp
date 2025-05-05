import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCartShopping } from '@fortawesome/free-solid-svg-icons';


const Cart = ({ cart, onClose, removeFromCart, updateCartItem, clearCart, checkout }) => {
    const calculateTotal = () => {
      return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };
  
    return (
      <div className="cart-modal">
        <div className="cart-content">
          <div className="cart-header">
            <h2>Your Order</h2>
            <button onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} className="cartclose"/>
            </button>
          </div>
  
          {/* Displays message when cart is empty */}
          <div className="cart-items">
            {cart.length === 0 ? (
              <p className="empty-cart">Your cart is empty</p>
            ) : (
              cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    {item.size && <p>Size: {item.size}</p>}
                    <p>${item.price.toFixed(2)} each</p>
                  </div>

                  <div className="item-controls">
                    <div className="quantity-control">
                      <button onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        updateCartItem(index, -1);
                      }}
                      >-</button>

                      <span>{item.quantity}</span>

                      <button onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        updateCartItem(index, 1);
                      }} 
                      >+</button>
                    </div>

                    <button 
                      className="remove-item"
                      onClick={() => removeFromCart(index)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          
          {/* buttons to clear and checkout items in cart */}
          {cart.length > 0 && (
            <div className="cart-footer">
              <div className="cart-total">
                <span>Total:</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
              <div className="cart-actions">
                <button onClick={clearCart}>Clear Cart</button>
                <button onClick={checkout}>Checkout</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Cart;