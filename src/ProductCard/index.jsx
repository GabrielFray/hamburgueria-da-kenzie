import Button from "../Button";

import { ContentDetails, ContentList } from "./styles";

const ProductCard = ({ cardDetails, setCurrentSale, handleProduct }) => {
  return (
    <ContentList>
      <figure>
        <img src={cardDetails.img} alt="" />
      </figure>
      <ContentDetails>
        <h3>{cardDetails.name}</h3>
        <p>{cardDetails.category}</p>
        <span>R$ {cardDetails.price.toFixed(2)}</span>
        <Button
          cardDetails={cardDetails}
          setCurrentSale={setCurrentSale}
          handleProduct={handleProduct}
        >
          Adicionar
        </Button>
      </ContentDetails>
    </ContentList>
  );
};

export default ProductCard;
