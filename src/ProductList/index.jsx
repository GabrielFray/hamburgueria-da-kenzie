import ProductCard from "../ProductCard";
import { ContentImage, ContentMain, ContentNoProducts } from "./styles";
import toast from "react-hot-toast";
import { useEffect, useRef } from "react";

import lottie from "lottie-web";

const ProductList = ({ setCurrentSale, currentSale, filteredProducts }) => {
  const handleProduct = (product) => {
    const productVerificator = currentSale.find(
      (elem) => elem.id === product.id
    );
    if (!productVerificator) {
      setCurrentSale((oldProducts) => [...oldProducts, product]);
      toast.success("Item adicionado ao carrinho!", {
        style: {
          borderRadius: "5px",
          border: "1px solid var(--color-primary)",
          color: "var(--color-primary)",
        },
      });
    } else {
      toast("Item já adicionado no carrinho!", {
        icon: "🤔",
        style: {
          borderRadius: "5px",
          border: "1px solid var(--warning)",
          color: "var(--warning)",
        },
      });
    }
  };

  const renderImg = filteredProducts.length > 0 ? "none" : "block";

  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/loading.json"),
    });
    return () => lottie.destroy();
  }, [renderImg]);

  return (
    <ContentMain>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            cardDetails={product}
            setCurrentSale={setCurrentSale}
            handleProduct={handleProduct}
          />
        ))
      ) : (
        <ContentNoProducts>
          <h2>Não temos resultados para essa busca...</h2>
          <ContentImage none={renderImg} ref={container} alt=""></ContentImage>
        </ContentNoProducts>
      )}
    </ContentMain>
  );
};

export default ProductList;
