import cartitemquantity from "./cartitemquantity";

export default function cartitem({ item, removeFromCart, addToCart}) {
    return (
        <li classname="cart-item">
            <div>
                {item.image} {item.name}
            </div>
            <cartitemquantity item={itme} removeFromCart={removeFromCart} addToCart={addToCart} />
        </li>
    )
}