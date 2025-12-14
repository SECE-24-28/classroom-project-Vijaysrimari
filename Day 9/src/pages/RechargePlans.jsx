// src/pages/RechargePlans.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    title: "Hero",
    price: "₹349",
    data: "1.5 GB/day",
    validity: "28 days",
    benefits: ["Unlimited 5G Data", "Unlimited calls", "Weekend data rollover"],
    icon: "https://i.imgur.com/4YQZjqF.png",
  },
  {
    title: "SuperHero",
    price: "₹365",
    data: "2 GB/day",
    validity: "28 days",
    benefits: ["12am–12pm Unlimited Data", "Weekend Data Rollover"],
    icon: "https://i.imgur.com/4YQZjqF.png",
    tag: "Most Popular",
  },
  {
    title: "SuperHero",
    price: "₹408",
    data: "2 GB/day",
    validity: "28 days",
    benefits: [
      "Unlimited 5G Data",
      "Sony LIV Subscription",
      "12am–12pm Unlimited Data",
    ],
    icon: "https://i.imgur.com/4YQZjqF.png",
    ott: "https://i.imgur.com/TCuJ6d1.png",
  },
  {
    title: "OTT Pack",
    price: "₹175",
    data: "10 GB",
    validity: "28 days",
    benefits: [
      "19 OTTs on Movies & TV App",
      "Watch on TV & Mobile",
      "No Service Validity",
    ],
    ott: "https://i.imgur.com/TCuJ6d1.png",
    tag: "19 OTTs on TV & Mobile",
  },
  {
    title: "Hero",
    price: "₹859",
    data: "1.5 GB/day",
    validity: "84 days",
    benefits: ["Unlimited calls", "Weekend data rollover"],
    icon: "https://i.imgur.com/4YQZjqF.png",
  },
  {
    title: "SuperHero",
    price: "₹979",
    data: "2 GB/day",
    validity: "84 days",
    benefits: [
      "12am–12pm Unlimited Data",
      "Unlimited Calls",
      "LIV, ZEE5 + 18 OTTs included",
    ],
    icon: "https://i.imgur.com/4YQZjqF.png",
    tag: "Includes 19 OTTs",
  },

  {
    title: "Hero",
    price: "₹199",
    data: "1 GB/day",
    validity: "21 days",
    benefits: ["Unlimited calls", "100 SMS/day", "Weekend data rollover"],
    icon: "https://i.imgur.com/4YQZjqF.png",
  },
  {
    title: "Hero Max",
    price: "₹239",
    data: "1.5 GB/day",
    validity: "24 days",
    benefits: ["Unlimited calls", "Priority network", "Data rollover"],
    icon: "https://i.imgur.com/4YQZjqF.png",
  },
  {
    title: "SuperHero OTT Pack",
    price: "₹499",
    data: "2 GB/day",
    validity: "28 days",
    benefits: [
      "20+ OTT apps included",
      "Unlimited calls",
      "Night unlimited data",
    ],
    icon: "https://i.imgur.com/4YQZjqF.png",
    ott: "https://i.imgur.com/TCuJ6d1.png",
  },
  {
    title: "Data Add-on",
    price: "₹58",
    data: "3 GB",
    validity: "Existing Pack",
    benefits: ["Instant high-speed data"],
    icon: "https://i.imgur.com/4YQZjqF.png",
  },
  {
    title: "Data Add-on",
    price: "₹118",
    data: "12 GB",
    validity: "Existing Pack",
    benefits: ["Extra data for heavy usage"],
    icon: "https://i.imgur.com/4YQZjqF.png",
  },
  {
    title: "Unlimited Mini",
    price: "₹299",
    data: "Unlimited",
    validity: "15 days",
    benefits: ["Unlimited 5G Data", "Unlimited calls"],
    icon: "https://i.imgur.com/4YQZjqF.png",
  },
  {
    title: "SuperHero Long",
    price: "₹1449",
    data: "2 GB/day",
    validity: "84 days",
    benefits: ["Unlimited 5G Data", "8 OTT Apps", "100 SMS/day"],
    icon: "https://i.imgur.com/4YQZjqF.png",
    ott: "https://i.imgur.com/TCuJ6d1.png",
  },
  {
    title: "Long Validity Hero",
    price: "₹1799",
    data: "1.5 GB/day",
    validity: "180 days",
    benefits: ["Unlimited calls", "Weekend rollover"],
    icon: "https://i.imgur.com/4YQZjqF.png",
  },
  {
    title: "Annual SuperHero",
    price: "₹2999",
    data: "2 GB/day",
    validity: "365 days",
    benefits: [
      "Unlimited calls all year",
      "Unlimited 5G data",
      "OTT included",
    ],
    icon: "https://i.imgur.com/4YQZjqF.png",
    ott: "https://i.imgur.com/TCuJ6d1.png",
    tag: "Best Annual Value",
  },
  {
    title: "Mega Data Pack",
    price: "₹699",
    data: "50 GB",
    validity: "90 days",
    benefits: ["Bulk high-speed data", "Carry-forward supported"],
    icon: "https://i.imgur.com/4YQZjqF.png",
  },
  {
    title: "OTT Lite",
    price: "₹149",
    data: "2 GB/day",
    validity: "28 days",
    benefits: ["Mini OTT subscription", "Night unlimited data"],
    ott: "https://i.imgur.com/TCuJ6d1.png",
  },
  {
    title: "Saver Pack",
    price: "₹79",
    data: "200 MB",
    validity: "14 days",
    benefits: ["Low-cost recharge", "100 mins calling"],
    icon: "https://i.imgur.com/4YQZjqF.png",
  },
  {
    title: "5G Booster",
    price: "₹121",
    data: "5 GB",
    validity: "Existing Pack",
    benefits: ["High-speed 5G boost"],
    icon: "https://i.imgur.com/4YQZjqF.png",
  },
  {
    title: "Student Pack",
    price: "₹249",
    data: "1 GB/day",
    validity: "28 days",
    benefits: ["E-learning subscription", "Night unlimited data"],
    icon: "https://i.imgur.com/4YQZjqF.png",
  },
  {
    title: "Premium Unlimited",
    price: "₹2099",
    data: "Unlimited",
    validity: "365 days",
    benefits: ["Unlimited 5G", "Priority network", "Premium support"],
    icon: "https://i.imgur.com/4YQZjqF.png",
    tag: "Premium Plan",
  },
];

const RechargePlans = () => {
  const navigate = useNavigate();

  const handleBuy = (plan) => {
    navigate("/payment", { state: plan });
  };

  return (
    <div className="w-screen min-h-screen bg-white p-10">
      <h1 className="text-4xl font-extrabold mb-10 text-gray-800">
        Recharge Plans
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {plans.map((p, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition"
          >
            {p.tag && (
              <div className="inline-block bg-yellow-300 text-black text-xs font-semibold px-3 py-1 rounded-md mb-3">
                {p.tag}
              </div>
            )}

            <div className="flex justify-between">
              <div>
                <h2 className="text-lg font-bold">{p.title}</h2>
                <p className="text-3xl font-bold text-red-600 mt-2">
                  {p.price}
                </p>

                <div className="flex gap-6 mt-3 text-sm">
                  <div>
                    <p className="font-semibold">{p.data}</p>
                    <p className="text-gray-500 text-xs">data</p>
                  </div>
                  <div>
                    <p className="font-semibold">{p.validity}</p>
                    <p className="text-gray-500 text-xs">validity</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {p.icon && (
                  <img
                    src={p.icon}
                    alt="icon"
                    className="w-12 h-12 object-contain"
                  />
                )}
                {p.ott && (
                  <img
                    src={p.ott}
                    alt="ott"
                    className="w-12 h-12 object-contain"
                  />
                )}
              </div>
            </div>

            <hr className="my-4 border-gray-300" />

            <ul className="text-sm text-gray-700 space-y-1">
              {p.benefits.map((b, idx) => (
                <li key={idx}>• {b}</li>
              ))}
            </ul>

            <button
              onClick={() => handleBuy(p)}
              className="mt-5 w-24 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold"
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RechargePlans;
