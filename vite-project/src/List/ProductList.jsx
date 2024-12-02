const ProductList = () => {
  const products = [
    { id: 1, name: "Phone", price: "$699" },
    {
      id: 2,
      name: "Laptop",
      price: "$1200",
    },
    {
      id: 3,
      name: "Headphones",
      price: "$899",
    },
  ];
  return <div>
    <h3>The name and price of the product are:</h3>
    {
        products.map(({id, name, price}) => (
            <div key={id}>
                <h4> {name} </h4>
                <p>{price} </p>
            </div>
        ))
    }
  </div>;
};

export default ProductList;
