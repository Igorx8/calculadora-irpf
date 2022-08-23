import { Link } from "react-router-dom";
import logo from '../../assets/logo-4tax.png'

export const Menu = () => {
    return (
        <nav className="flex flex-wrap text-white items-center justify-center h-24 bg-gray-700">
            <figure className="w-full flex justify-center">
                <Link to="/">
                    <img src={logo} alt="logo-4tax" className="h-10 w-24"/>    
                </Link>
            </figure>
            <ul className="block">
                <li className="inline-block px-2">
                    <Link to="/employee">Registrar funcionário</Link>
                </li>
                <li className="inline-block px-2">
                    <Link to="/irrf">Tabelas e cálculos do IRRF</Link>
                </li>
            </ul>
        </nav>
    );
    }