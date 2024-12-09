import { Link } from "react-router-dom";
import '../Cadastro/cadastro.css';

function Cadastro() {

    return (
        <div>
            <div>
                <label className='form-label'>Nome Completo</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="exemplo: João Antonio Biava da Silva Neto Niemeyer"></input>
            </div>
        </div>
    );
}

export default Cadastro