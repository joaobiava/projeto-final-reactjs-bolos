import './sobre.css';
import doceria from '../../components/images/fingimento.jpg'

function Sobre() {
  return (
    <div>
      {/* Seção Principal */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>Nossa História</h2>
            <p>
              Tudo começou com o sonho de levar doçura e felicidade para todos. 
              Criamos bolos de pote com ingredientes de alta qualidade e muito amor. 
              Nosso objetivo é trazer sabores irresistíveis em um formato prático e encantador.
            </p>
          </div>
          <div className="col-md-6">
            <img 
              src={doceria} 
              alt="Nossa Loja" 
              className="img-fluid rounded"
              width="500"
            />
          </div>
        </div>
      </div>

      {/* Valores */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <h2>Nossos Valores</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <i className="bi bi-heart-fill text-danger fs-1"></i>
              <h5 className="mt-3">Amor e Dedicação</h5>
              <p>Cada bolo é preparado com carinho para oferecer o melhor a você.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-box-seam fs-1"></i>
              <h5 className="mt-3">Praticidade</h5>
              <p>Sabores irresistíveis em um formato fácil de transportar e consumir.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-people-fill fs-1"></i>
              <h5 className="mt-3">Conexão</h5>
              <p>Nosso propósito é criar momentos de alegria para famílias e amigos.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contato */}
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-md-12">
            <h2>Entre em Contato</h2>
            <p>Estamos aqui para ouvir você. Envie-nos sua dúvida, sugestão ou elogio!</p>
            <a 
              href="mailto:"
              className="btn btn-warning text-white mt-3"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
