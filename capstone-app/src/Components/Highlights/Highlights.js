import '../../App.css'
import './Highlights.css';
import greekSaladImage from '../../assets/greek salad.jpg'
import bruchettaImage from '../../assets/bruchetta.jpg'
import lemonDessertImage from '../../assets/lemon dessert.jpg'

function Highlights() {
    return (
        <>
            <div>
                <div className={"highlights"}>
                    <h1 className={"text-dark"}>This weeks specials!</h1>
                    <button className={"button button-yellow"}>Online Menu</button>
                </div>
                <div className={"highlights"}>
                    <article className={"special"}>
                        <img src={greekSaladImage} alt={"Greek Salad"}/>
                        <div className={"special-description background-grey"}>
                            <div className={"special-description-head"}>
                                <h2>Greek salad</h2>
                                <h2 className={"text-orange"}>$12.99</h2>
                            </div>
                            <p>The famous Greek salad is a vibrant mix of fresh cucumbers, juicy tomatoes, red onions,
                                Kalamata olives, and creamy feta cheese. Dressed with olive oil and oregano, it's a
                                classic taste of the Mediterranean.</p>
                            <button className={"button button-grey"}>Order a delivery</button>
                        </div>
                    </article>
                    <article className={"special"}>
                        <img src={bruchettaImage} alt={"Bruchetta"}/>
                        <div className={"special-description background-grey"}>
                            <div className={"special-description-head"}>
                                <h2>Bruchetta</h2>
                                <h2 className={"text-orange"}>$5.99</h2>
                            </div>
                            <p>The classic bruschetta is a delicious Italian appetizer featuring toasted bread topped
                                with a fresh blend of diced tomatoes, garlic, basil, and olive oil. Simple yet
                                flavorful, it’s a perfect start to any meal.</p>
                            <button className={"button button-grey"}>Order a delivery</button>
                        </div>
                    </article>
                    <article className={"special"}>
                        <img src={lemonDessertImage} alt={"Lemon Dessert"}/>
                        <div className={"special-description background-grey"}>
                            <div className={"special-description-head"}>
                                <h2>Lemon dessert</h2>
                                <h2 className={"text-orange"}>$5.00</h2>
                            </div>
                            <p>The zesty lemon dessert is a refreshing treat, combining tangy lemon flavor with a sweet,
                                creamy texture. Light and indulgent, it’s the perfect way to brighten up any
                                occasion.</p>
                            <button className={"button button-grey"}>Order a delivery</button>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}
export default Highlights;