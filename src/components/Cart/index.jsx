import CartItem from "../CartItem";
import CartTotal from "../CartTotal";

import { ContentCart, ContentCartDetails, ContentUl } from "./styles";

const Cart = ({ currentSale, setCurrentSale }) => {
  if (currentSale.length > 0) {
    return (
      <ContentCart>
        <h2>Carrinhos de compras</h2>
        <ContentUl>
          {currentSale.map((elem) => (
            <CartItem
              product={elem}
              key={elem.id}
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
            />
          ))}
        </ContentUl>
        <CartTotal currentSale={currentSale} setCurrentSale={setCurrentSale} />
      </ContentCart>
    );
  } else {
    return (
      <ContentCart>
        <h2>Carrinhos de compras</h2>
        <ContentCartDetails>
          <p>Sua sacola está vazia</p>
          <span>Adicione itens</span>
        </ContentCartDetails>
      </ContentCart>
    );
  }
};

export default Cart;
