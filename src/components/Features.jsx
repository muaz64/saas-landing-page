const Features = () => {
    const features = [
      { title: "AI Automation", desc: "Save hours with AI-driven workflows." },
      { title: "Cloud-Based", desc: "Access anywhere, anytime." },
      { title: "Security First", desc: "Enterprise-grade security." },
    ];
  
    return (
      <section className="py-16 px-5">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Features;
  
  