import toast from "react-hot-toast";
import { ContentTotal } from "./styles";

const CartTotal = ({ currentSale, setCurrentSale }) => {
  const handleAllRemove = () => {
    setCurrentSale([]);
    toast("Todos itens removidos do carrinho!", {
      icon: "🥳",
      style: {
        borderRadius: "5px",
        border: "1px solid var(--information)",
        background: "#fff",
        color: "var(--information)",
      },
    });
  };

  const totalAccount = currentSale.reduce((acc, acv) => acc + acv.price, 0);
  return (
    <ContentTotal>
      <p>
        Total<span>R$ {totalAccount.toFixed(2)}</span>
      </p>
      <button onClick={() => handleAllRemove()}>Remover Todos</button>
    </ContentTotal>
  );
};
export default CartTotal;
