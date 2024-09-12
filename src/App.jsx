import React from 'react';
import './App.css';
import restauranteImg from './assets/hashtaurante.webp';
import Navegacao from './navegacao';
import ItemCardapio from './ItemCardapio';
import { pratosPrincipais, sobremesas, bebidas } from './cardapio';

function App() {
  const [paginaSelecionada, alterarPaginaSelecionada] = React.useState(0);

  const secoesMenu = [pratosPrincipais, sobremesas, bebidas];

  return (
    <>
      <img src={restauranteImg} className="capa"></img>
      <Navegacao alterarPaginaSelecionada={alterarPaginaSelecionada} />
      <div className="menu">
        {secoesMenu[paginaSelecionada].map((prato) => (
          <ItemCardapio
            key={prato.nome}
            nome={prato.nome}
            preco={prato.preco}
            descricao={prato.descricao}
            imagem={prato.imagem}
          />
        ))}
      </div>
    </>
  );
}

export default App;
