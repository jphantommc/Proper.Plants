import CartItem from "./cartitem";
import "./cart.css";

export default function Cart({ cart, removeFromCart, addToCart }) {
    return (
        <section className="cart">
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Your basket is Empty.</p>
            ) : (
                <>
                    <ul>
                        {cart.map((item) => (
                            <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
                        ))}
                    </ul>
                </>
            )}
        </section>
    );
}