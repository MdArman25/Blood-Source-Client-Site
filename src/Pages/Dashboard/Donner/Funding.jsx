import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../Components/Header/SectionTitle";
import CheckOutForm from "../../../Components/User/CheckOutForm";


// TODO: add publishable key
const stripePromise = loadStripe('pk_test_51OEB62HYQBx9XJIje5mwCddGST209INYLsInEqWeE9a9R6l7ws0uOXRQMTKgdRGQllRnQBMKRMoq72ycLMm1j2Ov00Ys2cygN9');
const Funding = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please pay to eat"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Funding;