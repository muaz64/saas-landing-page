import { motion } from "framer-motion";

const Pricing = () => {
  const plans = [
    { 
      name: "Basic", 
      price: "$10/mo", 
      features: ["5 Users", "Basic Support", "10GB Storage", "Email Support"] 
    },
    { 
      name: "Pro", 
      price: "$30/mo", 
      features: ["20 Users", "Priority Support", "50GB Storage", "Live Chat Support"] 
    },
    { 
      name: "Enterprise", 
      price: "$100/mo", 
      features: ["Unlimited Users", "24/7 Support", "1TB Storage", "Dedicated Account Manager"] 
    },
  ];

  return (
    <section className="py-16 px-5">
      <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {plans.map((plan, index) => (
          <motion.div 
            key={index} 
            className="bg-gray-100 p-6 rounded-lg shadow-md text-center w-80"
            initial={{ opacity: 0, y: 50 }} // Starts hidden & lower
            whileInView={{ opacity: 1, y: 0 }} // Fades in & moves up
            transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered delay effect
            viewport={{ once: true }} // Animates once per scroll
          >
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="text-2xl font-bold my-2">{plan.price}</p>
            <ul className="text-gray-600 mb-4">
              {plan.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-700 transition transform hover:scale-105 hover:shadow-lg">
              Choose This Plan
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
