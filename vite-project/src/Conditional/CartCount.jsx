
const CartCount = () => {
  return (
    <div>
        <Cart/>
    </div>
  )
}

export default CartCount;

const Cart = () => {
    const items = ["Wireless Earbuds", "Power Bank", "New SSD", "Hoddies"]
    return(
        <div>
            <h1>Cart Items 🛒🛒</h1>
            {
                items.length > 0 && <h2> You have {items.length} items in your cart.</h2>
            }
        </div>
    )
}