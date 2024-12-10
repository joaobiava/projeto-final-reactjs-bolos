import { Link } from "react-router-dom";
import '../Login/login.css';
import React, { useEffect } from "react";
import back_button from "../../components/imagens/Back Button.png";
import facebook from "../../components/imagens/icons8-facebook.png";
import google from "../../components/imagens/logo_google.svg";

function Login() {


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
        <div id="login-container">
            <nav id="header" className="d-flex navbar bg-white">
                <div className="container">
                    <a>
                        <img id="button_back" className="ms-2" src={back_button}  onClick={goBack}/>
                    </a>
                    <h1 id="logo" className=""><Link to="/">Bólis</Link></h1>
                </div>
            </nav>
            <section className="d-flex justify-content-center">

                <div id="title_login">
                    <h1 id="title_Bemvindo">Bem-vindo de  <br /> volta!</h1>
                    <h5 id="title_entre">Entre para continuar</h5>
                </div>

            </section>

            <section className="d-flex justify-content-center">

                <div id="form_login">

                    <form>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="exemplo@gmail.com" />
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">Senha</label>
                            <input type="password" className="form-control" id="password" placeholder="*******" />
                            <div id="esqueci-senha" className="form-text">Esqueci minha senha</div>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="lembrar" />
                            <label className="form-check-label" for="lembrar">Lembre de mim</label>
                        </div>
                        <Link to="/"><button type="submit" className="btn btn-primary" id="btn-entrar">Entrar</button></Link>
                        
                    </form>

                    <div className="linha-com-texto">ou entre com</div>

                    <div class="d-flex flex-column align-items-center mb-3 mt-4">
                        <a href="#" id="icons-btn" class="btn btn-custom btn-branco my-2">
                            <img src={facebook} class="img-fluid p-1 imagens" width="30" />
                            <span class="ml-2">Continuar com o Facebook</span>
                        </a>

                        <a href="#" id="icons-btn" class="btn btn-custom btn-branco my-2">
                            <img src={google} class="img-fluid p-1 imagens" width="30" />
                            <span class="ml-2">Continuar com o Google</span>
                        </a>
                    </div>
                    <h5 id="footer">Não tem uma conta? <Link to="/cadastro">cadastra-se</Link></h5>
                </div>


            </section>

        </div>
    );
}

export default Login