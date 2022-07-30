import { ContentHeader, ContentInputButton } from "./styles";

import burguerKenzieLogo from "../assets/burguerKenzieLogo.png";
import search from "../assets/search.gif";

const Header = ({ setFilteredProducts, products }) => {
  const showProducts = (item) => {
    const filtered = products.filter((elem) =>
      elem.name.toLowerCase().includes(item.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <ContentHeader>
      <img src={burguerKenzieLogo} alt="Logo da Hamburgueria" />
      <ContentInputButton>
        <input
          type="text"
          placeholder="Digitar pesquisa"
          onChange={(event) => showProducts(event.target.value)}
        />
        <img src={search} alt="" />
      </ContentInputButton>
    </ContentHeader>
  );
};

export default Header;
