const Testimonials = () => {
    const testimonials = [
      { name: "John Doe", text: "This tool transformed my business!" },
      { name: "Jane Smith", text: "A must-have for productivity!" },
    ];
  
    return (
      <section id="testimonials" className="py-16 bg-gray-200 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic">"{t.text}"</p>
              <p className="mt-2 font-bold">- {t.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  