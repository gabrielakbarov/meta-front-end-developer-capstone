import '../../App.css'
import './BookingPage.css';
import BookingForm from "../BookingForm/BookingForm.js";
import {useState} from "react";
import {fetchAPI} from "../../util/time-api.js";

const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
};

const updateTimes = (Date) => {
    return fetchAPI(new Date(Date));
};


function BookingPage() {
    const [availableTimes, setAvailableTimes] = useState(initializeTimes, updateTimes);

    return (
        <>
            <div className={"background-green"}>
                <div className={"bookingPage"}>
                    <div className={"text-section"}>
                        <h1 className={"text-yellow"}>Little Lemon</h1>
                        <h2 className={"text-light"}>Reserve your table now!</h2>
                    </div>
                </div>
            </div>
            <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>
        </>
    );
}

export default BookingPage;