import Feature from "../feature/Feature";

const PriceCart = ({ price }) => {
  return (
    <div className="bg-red-300 mt-10 p-4 rounded-md">
      <div className="text-center ">
        <span className="text-3xl font-bold text-red-500">{price.price}</span>
        <span className="text-2xl font-medium text-white">/mon</span>
      </div>
      <h5 className="text-2xl text-center font-bold mt-2">{price.name}</h5>
      <p className="text-lg font-semibold underline text-white">Features:</p>
      {
        price.features.map((feature, idx) => <Feature 
        key={idx}
        feature={feature}
        ></Feature>)
      }
    </div>
  );
};

export default PriceCart;
