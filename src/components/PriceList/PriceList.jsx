import { useEffect, useState } from "react";
import PriceCart from "../priceCart/PriceCart";

const PriceList = () => {
  const [prices, setPrices] = useState([]);

  useEffect(()=>{
    fetch('prices.json')
    .then(res => res.json())
    .then(data => setPrices(data))
  },[]);
  return (
    <div className="mx-14">
      <h2 className="text-3xl font-bold text-center text-slate-900 bg-red-400 p-3 rounded-sm">Awesome Affordable Prices</h2>
      <div className="md:grid grid-cols-3 gap-5">
      {
        prices.map(price => <PriceCart 
          key={price.id}
          price={price}
          ></PriceCart>)
      }
      </div>
    </div>
  );
};

export default PriceList;