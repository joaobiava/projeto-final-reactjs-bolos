import { Link } from "react-router-dom";
import './header.css';

function header(){
    return(
        <header>
            <Link to='/' className="headerItems">Home</Link>
            <Link to='/sobre' className="headerItems">Sobre</Link>
            <Link to='/compra' className="headerItems">Compra</Link>
            <Link to='/Login' className="headerItems">Login</Link>
        </header>
    );
}

export default header;   