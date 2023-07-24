// components/Login.tsx
import firebase from "../../firebaseConfig";
import React, { useState, FormEvent } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    console.log("ทำไม");
    try {
      console.log(email);
      console.log(password);

      const data = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log(data);
    } catch (error) {
      console.log(error);

      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-center p-10">
      <form onSubmit={handleLogin} className=" flex gap-5">
        <input
          style={{ color: "#000" }}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={{ color: "#000" }}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
