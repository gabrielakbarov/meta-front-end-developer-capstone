import '../../App.css'
import './Testimonials.css';

function Testimonials() {
    return (
        <>
            <div className={"testimonials"}>
                <h1 className={"text-dark"}>Testimonials</h1>
                <div className={"section-container"}>
                    <section>
                        <div className={"rating-head"}>
                            <h2 className={"text-dark"}>Jonathan Fidanovic</h2>
                            <h2 className={"text-orange"}>5/10</h2>
                        </div>
                        <p className={"text-dark"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                        <p className={"text-dark"}>2h ago</p>
                    </section>
                    <section>
                        <div className={"rating-head"}>
                            <h2 className={"text-dark"}>Connor McGregor</h2>
                            <h2 className={"text-orange"}>7/10</h2></div>
                        <p className={"text-dark"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                        <p className={"text-dark"}>6h ago</p>
                    </section>
                    <section>
                        <div className={"rating-head"}>
                            <h2 className={"text-dark"}>Nick Schwabbelsand</h2>
                            <h2 className={"text-orange"}>10/10</h2></div>
                        <p className={"text-dark"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                        <p className={"text-dark"}>yesterday</p>
                    </section>
                    <section>
                        <div className={"rating-head"}>
                            <h2 className={"text-dark"}>Sabine van der Marel van der Hollande van der Justus</h2>
                            <h2 className={"text-orange"}>9.5/10</h2></div>
                        <p className={"text-dark"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                        <p className={"text-dark"}>last week</p>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Testimonials;