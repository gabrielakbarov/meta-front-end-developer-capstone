import './Navbar.css';
import '../../App.css';
import logo from '../../assets/Logo.svg';


function Navbar() {
    return (
        <>
            <div className="header">
                <img src={logo} alt="Little Lemon Logo" className="logo" />
                <nav>
                    <ul>
                        <li><a className={"text-dark"} href="/">HOME</a></li>
                        <li><a className={"text-dark"} href="about">ABOUT</a></li>
                        <li><a className={"text-dark"} href="menu">MENU</a></li>
                        <li><a className={"text-dark"} href="reservations">RESERVATIONS</a></li>
                        <li><a className={"text-dark"} href="order-online">ORDER ONLINE</a></li>
                        <li><a className={"text-dark"} href="login">LOGIN</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
export default Navbar;
