
const ProductInfo = () => {
    const Product = {
        name: "Laptop",
        price: "$1200",
        availability: "In stock"
    }
  return (
    <div>
        <hr />
        <h4> {`${Product.name} in Sell`} </h4>
        <p> Price: {Product.price} </p>
        <p> Availability: {Product.availability} </p>
    </div>
  )
}

export default ProductInfo;