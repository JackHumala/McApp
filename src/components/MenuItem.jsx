// displays menu items
const MenuItem = ({ item, onClick }) => {
    return (
      <div className="menu-item" onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}>
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <p className="price">
          {item.hasSizes ? "Select Your Size" : `$${item.price.toFixed(2)}`}
        </p>
        <p className="calories">{item.calories}</p>
      </div>
    );
  };
  
  export default MenuItem;