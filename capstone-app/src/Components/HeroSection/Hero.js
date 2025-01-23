import '../../App.css'
import './Hero.css';
import heroImage from '../../assets/restauranfood.jpg'

function Hero() {
    return (
        <>
            <div className={"background-green"}>
            <div className={"hero"}>
                <div>
                    <h1 className={"text-yellow"}>Little Lemon</h1>
                    <h2 className={"text-light"}>Chicago</h2>
                    <p className={"text-light"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className={"button-yellow"}>Reserve a Table</button>
                </div>
                <img src={heroImage} alt={""}/>
            </div>
            </div>
        </>
    );
}

export default Hero;