export default function List() {
  let products = [
    {
      name: "Tomatoes",
      price: "20",
    },
    {
      name: "Pasta",
      price: "30",
    },
    {
      name: "Coconut",
      price: "40",
    },
  ];
  return (
    <div>
      <h1 className="title">Products</h1>  
      {products.map((item, idx) => {
        return (
          <div className="food" key={idx}>
            <img src={`/food${idx}.png`} className="food-img"/>
            <h4>{item.name} ${item.price}</h4>
          </div>
        );
      })}
    </div>
  );
}