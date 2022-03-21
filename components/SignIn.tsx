import React, { useState, useRef } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/Firebase";

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function logIn (e : any) {
      e.preventDefault();
     setLoading(true);
    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(error.message);
      });
      setLoading(false);
  };

  return (
    <div className="bg-gray-800 min-h-screen">
      <div className="max-w-7xl flex items-center justify-center">
        <div className="max-w-4xl flex flex-col items-center justify-center px-4 py-8">
          <h1 className="text-gray-200 text-2xl mb-8">Uloguj Se</h1>
          <form onSubmit={logIn} className="flex flex-col space-y-4">
            <label className="text-gray-200" htmlFor="email">
              E-Mail Adresa
            </label>
            <input
              type="email"
              id="email"
              name="email"
              ref={emailRef}
              required
            />
            <label className="text-gray-200" htmlFor="password">
              Šifra
            </label>
            <input
              type="password"
              id="password"
              name="password"
              ref={passwordRef}
              required
            />
            {error && <h1 className="text-red-600 text-xl">{error}</h1>}
            <button
              type="submit"
              disabled={loading}
              className="text-gray-200 bg-red-600 rounded w-100"
            >
              Uloguj se
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
