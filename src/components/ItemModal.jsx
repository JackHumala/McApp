import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ItemModal = ({ item, onClose, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('medium');
  const [price, setPrice] = useState(item.price);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    if (item.hasSizes) {
      setPrice(item.sizePrices[size]);
    }
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      ...item,
      price,
      size: item.hasSizes ? selectedSize : null
    }, quantity);
    onClose();
  };

  return (

    // Displays item name & close button
    <div className="item-modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{item.name}</h2>
          <button onClick={onClose} className="modalclose">
          <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        {/* displays sizes of item if they have any. Updates size and price based on selection */}
        <div className="modal-body">
          {item.hasSizes && (
            <div className="size-options">
              <h3>Select Size</h3>
              <div className="size-buttons">
                <button
                  className={selectedSize === 'small' ? 'selected' : ''}
                  onClick={() => handleSizeChange('small')}
                >
                  <div>Small</div>
                  <div>${item.sizePrices.small.toFixed(2)}</div>
                </button>
                <button
                  className={selectedSize === 'medium' ? 'selected' : ''}
                  onClick={() => handleSizeChange('medium')}
                >
                  <div>Medium</div>
                  <div>${item.sizePrices.medium.toFixed(2)}</div>
                </button>
                <button
                  className={selectedSize === 'large' ? 'selected' : ''}
                  onClick={() => handleSizeChange('large')}
                >
                  <div>Large</div>
                  <div>${item.sizePrices.large.toFixed(2)}</div>
                </button>
              </div>
            </div>
          )}

          {/* buttons to add or remove 1 of an item */}
          <div className="quantity-selector">
            <h3>Quantity</h3>
            <div className="quantity-control">
              <button onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleQuantityChange(-1);}}
                >-</button>
              <input 
                type="number" 
                value={quantity} 
                min="1" 
                onChange={(e) =>
                  setQuantity(parseInt(e.target.value) || 1)}
              />
              <button onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleQuantityChange(1);}}
              >+</button>
            </div>
          </div>
        </div>

        {/* button to add item to your cart */}
        <div className="modal-footer">
          <button onClick={handleAddToCart}>
            Add to Cart - ${(price * quantity).toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;