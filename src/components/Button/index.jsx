import { ContentButton } from "./styles";

const Button = ({ children, cardDetails, handleProduct }) => {
  return (
    <ContentButton onClick={() => handleProduct(cardDetails)}>
      {children}
    </ContentButton>
  );
};

export default Button;
