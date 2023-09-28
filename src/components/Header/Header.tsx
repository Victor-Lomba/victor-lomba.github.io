import "./styles.scss";
import logo from "../../public/logo-maeztra.png";
import SearchBar from "../SearchBar/SearchBar";
import userIcon from "../../public/icon-user.svg";
import shoppingBagIcon from "../../public/icon-shopping-bag.svg";
import shoppingBagBigIcon from "../../public/icon-shopping-bag-big.svg";
import hearthIcon from "../../public/icon-heart.svg";
import dressIcon from "../../public/icon-dress.svg";
import menuHamburguerIcon from "../../public/icon-menu-hamburguer.svg";

export default function Header() {
  return (
    <header>
      <div className="header-top-bar">
        <p>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</p>
      </div>
      <nav>
        <button className="menu-hamburguer-button">
          <img src={menuHamburguerIcon} alt="Menu" />
        </button>
        <a href="/">
          <img src={logo} alt="Maeztra Logo" />
        </a>
        <SearchBar />
        <div className="links">
          <button className="user-link">
            <img src={userIcon} alt="User" />
            Minha Conta
          </button>
          <button className="heart-link">
            <img src={hearthIcon} alt="Heart" />
            Minha Conta
          </button>
          <button className="shopping-bag-link">
            <img src={shoppingBagIcon} alt="Shopping Bag" />
            Meu Carrinho
          </button>
        </div>
        <button className="shopping-bag-big-link">
          <img src={shoppingBagBigIcon} alt="Shopping Bag" />
        </button>
      </nav>
      <menu>
        <li className="menu-link-highlight">
          <img src={dressIcon} alt="Dress Icon" />
          <a href="/">Novidades</a>
        </li>
        <li>
          <a href="/">Vestidos</a>
        </li>
        <li>
          <a href="/">Roupas</a>
        </li>
        <li>
          <a href="/">Sapatos</a>
        </li>
        <li>
          <a href="/">Lingerie</a>
        </li>
        <li>
          <a href="/">Acessórios</a>
        </li>
        <li>
          <a href="/">OUTLET</a>
        </li>
      </menu>
    </header>
  );
}
