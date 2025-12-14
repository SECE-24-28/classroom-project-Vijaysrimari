// src/pages/Payment.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [paymentDone, setPaymentDone] = useState(false);

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        No plan selected
      </div>
    );
  }

  const handlePayment = () => {
    const history = JSON.parse(localStorage.getItem("paymentHistory")) || [];

    const newPayment = {
      id: Date.now(),
      title: state.title,
      price: state.price,
      data: state.data,
      validity: state.validity,
      date: new Date().toLocaleString(),
    };

    localStorage.setItem(
      "paymentHistory",
      JSON.stringify([newPayment, ...history])
    );

    setPaymentDone(true);
  };

  return (
    <div className="w-screen min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8 text-center">
        {!paymentDone ? (
          <>
            <h2 className="text-3xl font-bold mb-6">Payment</h2>

            <div className="space-y-3 text-gray-700 text-left">
              <p><strong>Plan:</strong> {state.title}</p>
              <p><strong>Price:</strong> {state.price}</p>
              <p><strong>Data:</strong> {state.data}</p>
              <p><strong>Validity:</strong> {state.validity}</p>
            </div>

            <button
              onClick={handlePayment}
              className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold"
            >
              Pay Now
            </button>
          </>
        ) : (
          <>
            <div className="text-green-600 text-5xl mb-4">✔</div>

            <h2 className="text-3xl font-bold text-green-600 mb-2">
              Payment Successful
            </h2>

            <p className="text-gray-600 mb-6">
              Your recharge has been completed successfully
            </p>

            <div className="space-y-3">
              <button
                onClick={() => navigate("/history")}
                className="w-full bg-gray-800 hover:bg-black text-white py-3 rounded-lg font-semibold"
              >
                View Payment History
              </button>

              <button
                onClick={() => navigate("/plans")}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold"
              >
                Go to Recharge Plans
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Payment;
