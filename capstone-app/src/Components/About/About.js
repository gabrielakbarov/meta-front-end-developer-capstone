import '../../App.css'
import './About.css';
import ownerImage from './Mario and Adrian b.jpg';

function About() {
    return (
        <>
            <div className={"background-green"}>
                <div className={"about"}>
                    <div className={"text-container"}>
                        <h1 className={"text-yellow"}>Little Lemon</h1>
                        <h2 className={"text-light"}>Chicago</h2>
                        <p className={"text-light"}>
                            Welcome to Little Lemon, where tradition meets innovation. We are a family-owned Mediterranean restaurant
                            dedicated to bringing the flavors of the Mediterranean to your table with a modern twist.
                        </p>
                        <p className={"text-light"}>
                            Our journey began with a love for sharing authentic recipes passed down through generations.
                            From vibrant mezze platters to perfectly seasoned grilled dishes, every plate is crafted with fresh,
                            locally sourced ingredients and a dash of creativity.
                        </p>
                        <p className={"text-light"}>
                            At Little Lemon, we strive to create a warm, inviting atmosphere where everyone feels like part of the family.
                            Whether you're here for a cozy dinner, a celebration, or a quick lunch, we aim to make every visit memorable with our
                            passion for great food and heartfelt hospitality.
                        </p>
                        <p className={"text-light"}>
                            Come savor the taste of tradition reimagined at Little Lemon – where every bite is a story.
                        </p>
                    </div>
                    <div className={"image-container"}>
                        <img src={ownerImage} alt={"Owners"}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About