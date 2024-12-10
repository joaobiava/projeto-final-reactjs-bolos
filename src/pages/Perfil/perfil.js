import { Link } from "react-router-dom";
import React from "react";
import '../../pages/Perfil/perfil.css';
import perfil from '../../components/imagens/perfil.avif';
import cupcake from '../../components/imagens/cupcake.svg';

function Perfil() {
    return (
        <div className="perfil-container">
            {/* Cabeçalho */}
            <header className="perfil-header">
                <div className="perfil-location">
                    <span><i class="bi bi-geo-alt"></i> Guarapuava, Paraná</span>
                </div>
                <div className="perfil-edit">
                    <button><i class="bi bi-pencil-square"></i></button>
                </div>
            </header>

            {/* Informações do usuário */}
            <section className="perfil-info">
                <h1>João Biava</h1>
                <div className="perfil-photo">
                    <img src={perfil} alt="Foto de perfil" />
                </div>
            </section>

            {/* Opções da conta */}
            <section className="perfil-options">
                <div className="perfil-option">
                    <span><i class="bi bi-archive"></i> Minha caixa</span>
                    <Link to="/minha-caixa">→</Link>
                </div>
                <div className="perfil-option">
                    <span><i class="bi bi-newspaper"></i> Política de Privacidade</span>
                    <Link to="/politica-privacidade">→</Link>
                </div>
                <div className="perfil-option">
                    <span><i class="bi bi-wallet"></i> Métodos de Pagamento</span>
                    <Link to="/metodos-pagamento">→</Link>
                </div>
                <div className="perfil-option">
                    <span><i class="bi bi-gift"></i> Vale-presentes e pontos</span>
                    <Link to="/vale-presentes">→</Link>
                </div>
                <div className="perfil-option">
                    <span><i class="bi bi-clock-history"></i> Histórico de Pedidos</span>
                    <Link to="/historico-pedidos">→</Link>
                </div>
                <div className="perfil-option">
                    <span><i class="bi bi-people-fill"></i> Atendimento ao Cliente</span>
                    <Link to="/atendimento-cliente">→</Link>
                </div>
            </section>
            <p>2022 © Bôlis Corp Todos os direitos reservados</p>

            {/* Rodapé */}
            <footer className="perfil-footer">
                <nav className="footer-nav">
                    <Link to="/" className="footer-icon">
                        <i class="bi bi-house"></i>
                    </Link>
                    <Link to="/carrinho" className="footer-icon">
                        <i class="bi bi-cart"></i>
                    </Link>
                    <Link to="/personaliza" className="footer-icon">
                        <i class="bi bi-cake"></i>
                    </Link>
                    <Link to="/perfil" className="footer-icon">
                        <i class="bi bi-person"></i>
                    </Link>
                </nav>
            </footer>

        </div>
    );
}

export default Perfil;
