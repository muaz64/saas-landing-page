const Pricing = () => {
    const plans = [
      { name: "Basic", price: "$10/mo", features: ["5 Users", "Basic Support"] },
      { name: "Pro", price: "$30/mo", features: ["20 Users", "Priority Support"] },
      { name: "Enterprise", price: "$100/mo", features: ["Unlimited Users", "24/7 Support"] },
    ];
  
    return (
      <section className="py-16 px-5">
        <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="text-2xl font-bold my-2">{plan.price}</p>
              <ul className="text-gray-600">
                {plan.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Pricing;
  