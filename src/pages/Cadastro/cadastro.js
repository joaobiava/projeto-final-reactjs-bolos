import { Link } from "react-router-dom";
import '../Cadastro/cadastro.css';
import React, { useEffect } from "react";
import back_button from "../../components/imagens/Back Button.png";

function Cadastro() {

    useEffect(() => {
        const ajustarQuebraDeLinha = () => {
            const larguraTela = window.innerWidth;
            const titulo = document.getElementById("title_Bemvindo");

            if (titulo) {
                if (larguraTela <= 500) {
                    titulo.innerHTML = "Bem-vindo de <br /> volta!";
                } else {
                    titulo.innerHTML = "Bem-vindo de volta!";
                }
            }
        };

        ajustarQuebraDeLinha();

        window.addEventListener("resize", ajustarQuebraDeLinha);

        return () => {
            window.removeEventListener("resize", ajustarQuebraDeLinha);
        };
    }, []);

    function goBack() {
        window.history.back();
      }

    return (
        <div id="cadastro-container">
            <nav id="header" className="d-flex navbar bg-white">
                <div className="container">
                    <a>
                        <img id="button_back" className="ms-2" src={back_button}  onClick={goBack}/>
                    </a>
                    <h1 id="logo" className=""><Link to="/">Bólis</Link></h1>
                </div>
            </nav>
            <section className="d-flex justify-content-center">

                <div id="title_cadastro">
                    <h1 id="title_Bemvindo">Bem-vindo de  <br /> volta!</h1>
                    <h5 id="title_entre">Entre para continuar</h5>
                </div>

            </section>

            <section className="d-flex justify-content-center">

                <div id="form_cadastro">

                    <form>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="exemplo@gmail.com" />
                        </div>

                        <div data-mdb-input-init class="form-outline input-group">
                            <label for="phone" class="form-label">Telefone</label>
                            <div class="input-group">
                                <span class="input-group-text" id="flag">
                                    <img src="https://flagcdn.com/w40/br.png" alt="Brazil Flag" width="20" />
                                </span>
                                <input type="text" id="phone-input"class="form-control phone-input" placeholder="+55 42 99999-9999" readonly/>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label for="password" className="form-label">Senha</label>
                            <input type="password" className="form-control" id="password" placeholder="*******" />
                        </div>

                        <div className="mb-3">
                            <label for="password" className="form-label">Confirmar Senha</label>
                            <input type="password" className="form-control" id="password" placeholder="*******" />
                        </div>

                        <h6 id="termos-uso" className="mb-3">Ao clicar em Cadastrar você concorda com nossos <Link to="#">Termos de Serviços</Link>  e  <Link to="#">Política de Privacidade</Link></h6>

                        <button type="submit" className="btn btn-primary mb-3" id="btn-cadastrar">Cadastrar</button>
                    </form>


                    <h5 id="footer">Já tem cadastro? <Link to="/login">Entre aqui!</Link></h5>
                </div>


            </section>
        </div>
    );
}

export default Cadastro;