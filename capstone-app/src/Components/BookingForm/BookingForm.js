import '../../App.css';
import './BookingForm.css';
import React, {useState} from "react";
import {fetchAPI, submitAPI} from "../../util/time-api.js";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

function BookingForm({availableTimes, setAvailableTimes}) {
    const [date, setDate] = useState("");

    const initialValues = {
        firstName: '',
        lastName: '',
        date: '',
        time: '',
        guests: 1,
        occasion: 'Birthday',
        terms: false
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        date: Yup.date().required("Date is required"),
        time: Yup.string().required("Time is required"),
        guests: Yup.number().min(1).max(10).required("Guests are required"),
        occasion: Yup.string().required("Occasion is required"),
    });

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);

        setAvailableTimes([...fetchAPI(new Date(selectedDate))]);
    };

    const onSubmit = (values) => {
        console.log(values);
        if (submitAPI(values)) {
            alert("Reservation submitted!");
        }
    };

    const occasions = ["Birthday", "Anniversary"];

    return (
        <div className="bookingForm">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({setFieldValue}) => (
                    <Form>
                        <div className="bookingContainer">
                            {/* Persönliche Informationen */}
                            <div className="bookingBox">
                                <Field name="firstName">
                                    {({field}) => (
                                        <div>
                                            <label>First Name</label>
                                            <input {...field} type="text" placeholder="Enter your First Name"/>
                                            <ErrorMessage name="firstName" component="div" className="error"/>
                                        </div>
                                    )}
                                </Field>

                                <Field name="lastName">
                                    {({field}) => (
                                        <div>
                                            <label>Last Name</label>
                                            <input {...field} type="text" placeholder="Enter your Last Name"/>
                                            <ErrorMessage name="lastName" component="div" className="error"/>
                                        </div>
                                    )}
                                </Field>
                            </div>

                            {/* Reservierungsdetails */}
                            <div className="bookingBox">
                                <Field name="date">
                                    {({field}) => (
                                        <div>
                                            <label>Choose Date</label>
                                            <input
                                                type="date"
                                                {...field}
                                                value={date}
                                                onChange={(e) => {
                                                    setFieldValue("date", e.target.value);
                                                    handleDateChange(e);
                                                }}
                                            />
                                            <ErrorMessage name="date" component="div" className="error"/>
                                        </div>
                                    )}
                                </Field>

                                <Field name="time">

                                    <div>
                                        <label>Reservation Time</label><br/>
                                        <Field id="time" name="time" as="select">
                                            {availableTimes.map((time) => (
                                                <option key={time} value={time}>
                                                    {time}
                                                </option>
                                            ))}
                                        </Field>
                                        <ErrorMessage name="time" component="div" className="error"/>
                                    </div>

                                </Field>
                            </div>

                            {/* Zusätzliche Details */}
                            <div className="bookingBox">
                                <Field name="guests">
                                    {({field}) => (
                                        <div>
                                            <label>Number of Guests</label>
                                            <input
                                                type="number"
                                                {...field}
                                                min="1"
                                                max="10"
                                                placeholder="1"
                                            />
                                            <ErrorMessage name="guests" component="div" className="error"/>
                                        </div>
                                    )}
                                </Field>

                                <Field name="occasion">

                                    <div>
                                        <label>Occasion</label><br/>
                                        <Field id="occasion" name="occasion" as="select">
                                            {occasions.map((occasion) => (
                                                <option key={occasion} value={occasion}>
                                                    {occasion}
                                                </option>
                                            ))}
                                        </Field>
                                        <ErrorMessage name="occasion" component="div" className="error"/>
                                    </div>

                                </Field>
                            </div>
                        </div>
                        <div className="bookingButton">
                            <button className="button-yellow" type="submit">
                                Confirm Reservation
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default BookingForm;
