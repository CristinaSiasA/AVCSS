import React, { useState } from "react";

const SubscriptionForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
            setSubmitted(true);
    };

    if (submitted) {
        return (
            <>
                <h1 className="text-white mt-5">Thank you!</h1>
                <h3 className="text-white"> You will receive our Newsletter Soon.</h3>
            </>
        );
    }

    return (
        <form

            onSubmit={handleSubmit}
            method="POST"
        >
            <div className="mb-3 pt-0">
            </div>
            <div className="mb-3 pt-0" >
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="subscription_input text-muted"
                />
            </div>
            <div className="mb-3 pt-0">
                <button
                    className="btn btn-dark btn-lg btn-block"
                    type="submit"
                >
                    Subscribe >
                </button>
            </div>
        </form>
    );
};

export default SubscriptionForm;