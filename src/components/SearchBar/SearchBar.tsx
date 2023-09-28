import styles from "./styles.module.scss";
import searchIcon from "../../public/icon-search.svg";

export default function SearchBar() {
  return (
    <>
      <div className={styles.container}>
        <input type="text" placeholder="O Que Você Busca?" />
        <button>Buscar</button>
      </div>
      <button className={styles.searchIconButton}>
        <img src={searchIcon} alt="" />
      </button>
    </>
  );
}
