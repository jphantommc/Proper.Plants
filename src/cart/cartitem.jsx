import CartItemQuantity from "./cartitemquantity";

export default function CartItem({ item, removeFromCart, addToCart}) {
    return (
        <li className="cart-item">
            <div>
                {item.image} {item.name}
            </div>
            <CartItemQuantity item={item} removeFromCart={removeFromCart} addToCart={addToCart} />
        </li>
    )
}