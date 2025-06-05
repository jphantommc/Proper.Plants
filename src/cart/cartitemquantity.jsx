


export default function CartItemQuantity({ item, removefromCart, addToCart }) {
    return (
        <div className="cart-item-quantity">
            <button onClick={() => removefromCart(item)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => addToCart(item)}>+</button>

        </div>
    );
}