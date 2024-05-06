import React, { useState } from "react";
import Header from "../comp/header";
import Footer from "../comp/Footer";
import { NavLink } from "react-router-dom";
import { auth } from "../config/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./signin.css"
import Loading from "../comp/Loading";
const Signin = () => {
  const [email, setemail] = useState("");
  const [reemail, setreemail] = useState("");
  const [password, setpassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [showerr, setshowerr] = useState(false);
  const [errorr, seterror] = useState("");
  const [showreset, setshowreset] = useState("");
  const [showsend, setshowsend] = useState(false);
  const navigate = useNavigate();

  const handellogin = (eo) => {
    eo.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("done ya zozzzz");
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        switch (errorCode) {
          case "auth/invalid-email":
            seterror("Enter a correct Email ");
            break;
          case "auth/invalid-credential":
            seterror("Email or Password wrong");
            break;
          case "auth/network-request-failed":
            seterror("Check your internet");
            break;

          case "auth/missing-password":
            seterror("Enter Your Password");
            break;
          default:
            seterror(errorCode);
            break;
        }

        setshowerr(true);
      });
  };
  if (loading) {
    return (
      <>
    <Loading />
      </>
    );
  }
  return (
    <>
      <Header />
      <main className="signup">
        <form action="" className={`reset ${showreset}`}>
        <i onClick={() => {
          setshowreset("")
        }} class="fa-solid fa-xmark close"></i>
          <input
            onChange={(eo) => {
              setreemail(eo.target.value);
            }} 
            type="email"
            placeholder="Email🧡:"
            required />
            <button onClick={(eo) => {
            eo.preventDefault();
              sendPasswordResetEmail(auth, reemail)
              .then(() => {
                // Password reset email sent!
                // ..
                setshowsend(true)
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
              });
            }}> Reset</button>
        { showsend && <p>Check Your Email</p>}
        </form>
        <h1 className="headsign">
          Sign in <span>🧡</span>
        </h1>
        <form className="flex" action="">
          <input
            onChange={(eo) => {
              setemail(eo.target.value);
            }}
            type="email"
            placeholder="Email🧡:"
            required
          />
          <input
            onChange={(eo) => {
              setpassword(eo.target.value);
            }}
            placeholder="Pssword🧡:"
            type="password"
            required
          />
          <button type="submit" onClick={handellogin}>
            Sign in{" "}
          </button>
          <p>
            Don 't have account ? <NavLink to="/signup">Sign Up</NavLink>
          </p>
          <p onClick={() => {
            setshowreset("show-reset")
          }} style={{ cursor:"pointer" }}>Forget Your password</p>
        </form>
        {showerr && (
          <div className="toast">
            <i className="fa-solid fa-exclamation"> </i>
            {errorr}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Signin;
