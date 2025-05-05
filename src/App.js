import React, {useState} from 'react';
import './styles.css';
import Navbar from './components/Navbar';
import MenuItem from './components/MenuItem';
import Cart from './components/Cart';
import ItemModal from './components/ItemModal';
import Footer from './components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCartShopping } from '@fortawesome/free-solid-svg-icons';




function App() {
    const [cart,setCart] = useState([]);
    const [showCart,setShowCart] = useState(false);
    const [currentItem,setCurrentItem] = useState(null);
    const [showItemModal, setShowItemModal] = useState(false);

    // my menu items with necessaary info
    const menuItems = [
        {
            id: 1, 
            name: "Big Mac®", 
            price: 5.20, 
            calories: "580 cal.", 
            hasSizes: false,
            image: "/images/Menu1.jpg"
        },

        {
            id: 2, 
            name: "Quarter Pounder®", 
            price: 4.60, 
            calories: "520 cal.", 
            hasSizes: false,
            image: "/images/Menu2.jpg"
        },
        { 
            id: 3, 
            name: "McChicken®", 
            price: 2.99, 
            calories: "390 cal.", 
            hasSizes: false,
            image: "/images/Menu3.jpg"
          },
          { 
            id: 4, 
            name: "Filet-O-Fish®", 
            price: 4.59, 
            calories: "380 cal.", 
            hasSizes: false,
            image: "/images/Menu4.jpg"
          },
          { 
            id: 5, 
            name: "Chicken McNuggets®", 
            price: 3.99, 
            sizePrices: {small: 1.59, medium: 3.99, large: 7.39},
            calories: "", 
            hasSizes: true,
            image: "/images/Menu5.jpg" 
          },
          { 
            id: 6, 
            name: "World Famous Fries®", 
            price: 3.79, 
            sizePrices: {small: 2.99, medium: 3.79, large: 4.59},
            calories: "", 
            hasSizes: true,
            image: "/images/Menu6.jpg" 
          },
          { 
            id: 7, 
            name: "Hamburger Happy Meal®", 
            price: 4.59, 
            calories: "475 cal.", 
            hasSizes: false,
            image: "/images/Menu7.jpg" 
          },
          { 
            id: 8, 
            name: "Chocolate Chip Cookie", 
            price: 0.59, 
            calories: "170 cal.", 
            hasSizes: false,
            image: "/images/Menu8.jpg" 
          },
          { 
            id: 9, 
            name: "Hotcakes", 
            price: 5.69, 
            calories: "580 cal.", 
            hasSizes: false,
            image: "/images/Menu9.jpg" 
          },
          { 
            id: 10, 
            name: "Hash Brown", 
            price: 3.49, 
            calories: "140 cal.", 
            hasSizes: false,
            image: "/images/Menu10.jpg" 
          }
    ];


    const addToCart = (item, quantity, size) => {
      const newItem = {
        ...item,
        quantity,
        size,
        displayPrice: item.price.toFixed(2)
  };

      setCart(prevCart => {
        // Check if item already exists in cart
        const existingItemIndex = prevCart.findIndex(cartItem => 
          cartItem.id === item.id && 
          (!item.hasSizes || cartItem.size === size)
        );
    
        if (existingItemIndex >= 0) {
          // Update quantity if item exists
          const updatedCart = [...prevCart];
          updatedCart[existingItemIndex].quantity += quantity;
          return updatedCart;
        } else {
          // Add new item to cart
          return [...prevCart, newItem];
        }
      });
    };
    
    const removeFromCart = (index) => {
        setCart(prevCart => {
            const newCart = [...prevCart];
            newCart.splice(index, 1);
            return newCart;
          });
    };
    
    const updateCartItem = (index, change) => {
        setCart(prevCart => {
          const newCart = [...prevCart];
          if (newCart[index].quantity + change < 1) {
            return prevCart;
          }
          newCart[index].quantity += change;
          return newCart;
        });
    };
    
    const clearCart = () => {
        setCart([]);
    };
    
    const checkout = () => {
        if (cart.length === 0) {
            alert('Your cart is empty');
            return;
          }
          
          alert(`Thank you for your order! Total: $${calculateTotal().toFixed(2)}`);
          clearCart();
          setShowCart(false);
    };


    const calculateTotal = () => {
      const total = cart.reduce((total, item) => {
        return total + (Math.round(item.price * 100 * item.quantity) / 100);
      }, 0);
      return parseFloat(total.toFixed(2));
    };



     return (


        <div className="app">
          <Navbar />
          
          <div className="menu-container">
            {menuItems && menuItems.map(item => (
              <MenuItem 
                key={item.id} 
                item={item} 
                onClick={() => {
                  setCurrentItem(item);
                  setShowItemModal(true);
                }} 
              />
            ))}
          </div>
    
          <button className="cart-button" onClick={() => setShowCart(true)}>
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="cart-count">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
            </button>
    
          {showCart && (
            <Cart 
              cart={cart}
              onClose={() => setShowCart(false)}
              removeFromCart={removeFromCart}
              updateCartItem={updateCartItem}
              clearCart={clearCart}
              checkout={checkout}
            />
          )}
    
          {showItemModal && (
            <ItemModal 
              item={currentItem}
              onClose={() => setShowItemModal(false)}
              addToCart={addToCart}
            />
          )}
    
          <Footer />
        </div>
    );
}
export default App;