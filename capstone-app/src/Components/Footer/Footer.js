import '../../App.css'
import './Footer.css';
import logo from '../../assets/Asset 20@4x.png';

function Footer() {
    return (
        <>
            <div className={"footer"}>


                <div className={"section-container"}>
                    <img src={logo} alt={""}/>
                    <div className={"section"}>
                        <h2>Navigation</h2>
                        <ul>
                            <li><a className={"text-dark"} href="/">Home</a></li>
                            <li><a className={"text-dark"} href="about">About</a></li>
                            <li><a className={"text-dark"} href="menu">Menu</a></li>
                            <li><a className={"text-dark"} href="reservations">Reservations</a></li>
                            <li><a className={"text-dark"} href="order-online">Order online</a></li>
                            <li><a className={"text-dark"} href="login">Login</a></li>
                        </ul>
                    </div>
                    <div className={"section"}>
                        <h2>Contact</h2>
                    </div>
                    <div className={"section"}>
                        <h2>Social media</h2>
                        <ul>
                            <li><a className={"text-dark"} href="https://www.instagram.com/">Instagram</a></li>
                            <li><a className={"text-dark"} href="https://www.facebook.com/">Facebook</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;