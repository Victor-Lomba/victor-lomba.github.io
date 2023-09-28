import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import Carousel from "./components/Carousel/Carousel";
import Header from "./components/Header/Header";
import teste from "./public/icon-dress.svg";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Carousel
        title="Por que comprar na Maeztra?"
        titleFontSize={16}
        items={[
          <Card
            title="Produtos importados"
            key={1}
            subTitle="Produto de Alta Qualidade"
            image={teste}
          ></Card>,
          <Card
            title="Estoque no Brazil"
            subTitle="Produtos mais perto de você!"
            image={teste}
            key={2}
          ></Card>,
          <Card
            title="Trocas Garantidas"
            subTitle="Trocas em até 48 horas, vejas as regras"
            image={teste}
            key={3}
          ></Card>,
          <Card
            title="Ganhe 5% off"
            subTitle="Pagando à vista no Cartão"
            image={teste}
            key={4}
          ></Card>,
          <Card
            title="Frete Grátis"
            subTitle="Em compras acima de R$ 499,00"
            image={teste}
            key={5}
          ></Card>,
        ]}
      />
      <Carousel
        title="Marcas Parceiras"
        titleFontSize={32}
        items={[
          <img
            src="https://i.imgur.com/Qoc0YF7.png"
            style={{ margin: "0 auto", display: "block" }}
            key={1}
          />,
          <img
            src="https://i.imgur.com/cHLLxR4.png"
            style={{ margin: "0 auto", display: "block" }}
            key={2}
          />,
          <img
            src="https://i.imgur.com/JOTNQgl.png"
            style={{ margin: "0 auto", display: "block" }}
            key={3}
          />,
          <img
            src="https://i.imgur.com/PN0nOAY.png"
            style={{ margin: "0 auto", display: "block" }}
            key={4}
          />,
          <img
            src="https://i.imgur.com/qZ1WvYA.png"
            style={{ margin: "0 auto", display: "block" }}
            key={5}
          />,
        ]}
      ></Carousel>
    </>
  );
}

export default App;
