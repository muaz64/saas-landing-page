import { useState } from "react";
// import { auth, createUserWithEmailAndPassword } from "../firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section id="signup" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Start Your Free Trial</h2>
      <input type="email" placeholder="Email" className="border p-2 mr-2" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="border p-2" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup} className="bg-blue-600 text-white px-6 py-2 mt-4 rounded-lg">Sign Up</button>
    </section>
  );
};

export default Signup;
