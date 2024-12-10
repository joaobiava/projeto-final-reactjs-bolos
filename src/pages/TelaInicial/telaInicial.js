import { Link } from "react-router-dom";
import '../TelaInicial/telaInicial.css';

function TelaIcial() {
    return (
        <div id="telaInicial-container">
            <nav id="header" className="d-flex navbar">
                <div className="container">
                    <h1 id="logo" className=""><Link to="/">Bólis</Link></h1>
                </div>
            </nav>
            <section className="d-flex justify-content-center align-items-end" id="conteudo">
                <div id="botoes">
                    <h1>Faça você <br /> mesmo!</h1>
                    <Link to="/login"><button type="submit" className="btn btn-primary mb-3 mt-3" id="btnentrar-telaInicial">Entrar</button></Link>
                    <Link to="/cadastro"><button type="submit" className="btn btn-primary" id="btn-registrar">Registrar</button></Link>
                    
                </div>
            </section>
        </div>
    );
}
export default TelaIcial