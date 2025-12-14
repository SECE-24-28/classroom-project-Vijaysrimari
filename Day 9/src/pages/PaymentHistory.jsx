// src/pages/PaymentHistory.jsx
import React, { useEffect, useState } from "react";

const PaymentHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("paymentHistory")) || [];
    setHistory(data);
  }, []);

  return (
    <div className="w-screen min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6">Payment History</h1>

      {history.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-600">No payments found.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {history.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row justify-between"
            >
              <div className="space-y-1">
                <p className="font-semibold text-lg">{item.title}</p>
                <p className="text-gray-600">Data: {item.data}</p>
                <p className="text-gray-600">Validity: {item.validity}</p>
                <p className="text-sm text-gray-500">
                  Paid on: {item.date}
                </p>
              </div>

              <div className="mt-4 md:mt-0 text-right">
                <p className="text-xl font-bold text-green-600">
                  {item.price}
                </p>
                <p className="text-sm text-green-500 font-semibold">
                  Successful
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
