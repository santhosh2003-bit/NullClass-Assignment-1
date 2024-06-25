import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useDispatch } from "react-redux";
import { subscribePlan } from "../../Actions/paymentActions";

const CheckoutForm = ({ planId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("payment method", paymentMethod);
      dispatch(subscribePlan(planId, paymentMethod.id));

      // if (response.requiresAction) {
      //   const { error: confirmError } = await stripe.confirmCardPayment(
      //     response.paymentIntentClientSecret
      //   );

      //   if (confirmError) {
      //     console.log("[confirmError]", confirmError);
      //   } else {
      //     console.log("Payment successful!");
      //   }
      // } else {
      //   console.log("Payment successful!");
      // }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className="mt-8" />
      <button
        type="submit"
        disabled={!stripe}
        className="text-white font-bold bg-black pt-1 pb-1 pl-2 pr-2 mt-5 rounded-xl"
      >
        Subscribe
      </button>
    </form>
  );
};

export default CheckoutForm;
