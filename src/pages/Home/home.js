import React, { useState } from "react";
import { Link } from "react-router-dom";
import './home.css';

// Importando imagens
import boloBonito from "../../components/images/boloDePoteBonito.png";
import mauroLurde from "../../components/images/MauroELurde.png";
import rico from "../../components/images/boloDeRico.png";
import galinhaPintuda from "../../components/images/GalinhaPintuda.png";
import unicornio from "../../components/images/boloDeUnicornio.png";
import feinho from "../../components/images/fein.png";
import sacola from "../../components/images/shopping-bag 1.png";

export const products = [
  { id: 1, name: "Bolo de pote bonito", price: 57, image: boloBonito, description: "Um bolo decorado, delicioso e visualmente incrível!", rating: 4.3 },
  { id: 2, name: "Bolo de pote feio", price: 25, image: feinho, description: "Um bolo prático e econômico para o dia a dia.", rating: 3.5 },
  { id: 3, name: "Bolo galinha pintuda", price: 38, image: galinhaPintuda, description: "Perfeito para festas infantis, com tema da Galinha Pintuda.", rating: 4.69 },
  { id: 4, name: "Bolo Mauro e Lurde", price: 41, image: mauroLurde, description: "Inspirado nos chefs Mauro e Lurde, sabor único.", rating: 5 },
  { id: 5, name: "Bolo de rico", price: 69, image: rico, description: "Se você não sabe mais onde gastar seu dinheiro, compre este bolo.", rating: 4.5 },
  { id: 6, name: "Bolo de chifrudo", price: 14, image: unicornio, description: "Fofo e mágico, ideal para quem quer um bolo chifrudo.", rating: 2 },
];

function Home() {
  // Estado para busca e produtos filtrados
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Função para atualizar a lista de produtos com base na busca
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    // Filtra produtos que contenham o termo buscado
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="container mt-4">
      {/* Barra de Busca */}
      <div className="search-bar d-flex mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar customização..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Lista de Produtos */}
      <div className="products row mt-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-md-4 col-sm-6 mb-4" key={product.id}>
              <div className="card">
                {/* Clique na imagem leva para detalhes */}
                <Link to={`/detalhes/${product.id}`} state={product}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top"
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">R$ {product.price}</p>
                  <Link to={'/carrinho'}>
                  <img 
                    className="card-sacola" 
                    src={sacola} 
                    alt="Ícone de sacola" 
                    style={{
                      width: "40px",
                      height: "auto",
                      position: "absolute",
                      right: "10px",
                      bottom: "10px",
                      zIndex: 10,
                      objectFit: "contain",
                    }}
                  /></Link>

                </div>

              </div>
            </div>
          ))
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
