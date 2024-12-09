import { Link, useLocation } from "react-router-dom";
import carrinho from '../images/Group 8.png';
import './header.css';

function Header() {

    const location = useLocation(); // Hook para obter a localização atual

    // Define o título do header com base na rota atual
    const getPageTitle = () => {
        if (location.pathname.startsWith("/detalhes/")) {
            return "Detalhes do Produto";
        }

        switch (location.pathname) {
        case "/":
            return "Home";
        case "/sobre":
            return "Sobre Nós";
        case "/carrinho":
            return "Carrinho";
        case "/personaliza":
            return "Personalização"
        case `/detalhes/`:
            return "Detahes Do Produto"
        default:
            return "Página Desconhecida";
        }
    };

    return (
        <header className="d-flex justify-content-between align-items-center p-3">
            <div className="d-flex">
                <Link to="/" className="headerItems">Home</Link>
                <Link to="/sobre" className="headerItems">Sobre</Link>
            </div>

            <div className="location-page text-center">
                <p className="location mb-0">📍 Xique-Xique, Bahia</p>
                <h1 className="title">{getPageTitle()}</h1>
            </div>

            <div>
                <Link to="/personaliza" className="headerItems" id="personaliza">
                    Personalização
                </Link>

                <Link to="/carrinho" className="headerItems" id="carrinho">
                    <img src={carrinho} alt="carrinho" className="carrinho-img" />
                </Link>
            </div>

        </header>
    );
}

export default Header;