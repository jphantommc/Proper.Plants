import CartItem from "./cartitem";
import "./cart.css";

export default fuction cart({ cart, removeFromCart, addToCart}) {
    return (
        <section className="cart">
        <h2>Cart</h2>
        {cart.length === 0 ? (
            <p>Your Cart is Empty.</p>
        ) : (
            <>
            <ul>
            {cart.map((item) => (
                <cartitem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart} />

            ))}
            </ul>
            </>
        )}
        </section>
    );
}