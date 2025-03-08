import { useState } from "react";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    alert(`Signed up as: ${fullName}, Email: ${email}`);
  };

  return (
    <section id="signup" className="py-16 px-6 flex justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2">Start your free trial</h2>
        <p className="text-gray-600 text-center mb-4">Signup now. It's free and takes less than 3 minutes.</p>
        
        <input
          type="text"
          placeholder="Full Name"
          className="border border-gray-300 w-full p-3 mb-3 rounded-md"
          onChange={(e) => setFullName(e.target.value)}
        />
        
        <input
          type="email"
          placeholder="Email address"
          className="border border-gray-300 w-full p-3 mb-3 rounded-md"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 w-full p-3 mb-4 rounded-md"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="bg-black text-white w-full py-3 rounded-md font-bold hover:bg-gray-800 transition"
        >
          GET STARTED FOR FREE
        </button>
      </div>
    </section>
  );
};

export default Signup;
