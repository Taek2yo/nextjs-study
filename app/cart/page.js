import {age, name} from './data'

export default function Cart() {
  let 장바구니 = ['Tomatoes', 'Pasta']
  return (
    <div>
      <h4 className="title">Cart</h4>
      {장바구니.map((item, idx) => {
        return <CartItem item={item} key={idx}/>
      })}
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
