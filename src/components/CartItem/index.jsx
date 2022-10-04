import toast from "react-hot-toast";

const CartItem = ({ product, currentSale, setCurrentSale }) => {
  const handleRemoveProduct = (itemProduct) => {
    const data = currentSale.filter((element) => element.id !== itemProduct.id);
    setCurrentSale(data);
    toast.success("Item removido do carrinho!", {
      style: {
        borderRadius: "5px",
        border: "1px solid var(--color-primary)",
        color: "var(--color-primary)",
      },
    });
  };
  return (
    <li>
      <figure>
        <img src={product.img} alt="" />
      </figure>
      <div>
        <p>{product.name}</p>
        <span>{product.category}</span>
      </div>
      <button onClick={() => handleRemoveProduct(product)}>Remover</button>
    </li>
  );
};

export default CartItem;
