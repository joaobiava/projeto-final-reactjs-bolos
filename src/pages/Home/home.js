import { Link } from "react-router-dom";
import './home.css';

function Home() {
  return (
    <div>
      <h1 className="text-center my-4">Bem-vindo à Loja de Bolos de Pote!</h1>

      {/* Carrossel */}
      <div id="boloCarrossel" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://via.placeholder.com/800x400?text=Bolo+de+Chocolate" className="d-block w-100" alt="Bolo de Chocolate" />
          </div>
          <div className="carousel-item">
            <img src="https://via.placeholder.com/800x400?text=Bolo+de+Morango" className="d-block w-100" alt="Bolo de Morango" />
          </div>
          <div className="carousel-item">
            <img src="https://via.placeholder.com/800x400?text=Bolo+de+Limão" className="d-block w-100" alt="Bolo de Limão" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#boloCarrossel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#boloCarrossel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>

      {/* Bolos Mais Escolhidos */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Bolos Mais Escolhidos</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/300x200?text=Bolo+Prestígio" className="card-img-top" alt="Bolo Prestígio" />
              <div className="card-body">
                <h5 className="card-title">Bolo Prestígio</h5>
                <p className="card-text">Chocolate com coco, o favorito dos nossos clientes!</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/300x200?text=Bolo+de+Cenoura" className="card-img-top" alt="Bolo de Cenoura" />
              <div className="card-body">
                <h5 className="card-title">Bolo de Cenoura</h5>
                <p className="card-text">A combinação perfeita de cenoura com brigadeiro.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://via.placeholder.com/300x200?text=Bolo+de+Limão" className="card-img-top" alt="Bolo de Limão" />
              <div className="card-body">
                <h5 className="card-title">Bolo de Limão Siciliano</h5>
                <p className="card-text">Leve e refrescante, ideal para qualquer momento!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
