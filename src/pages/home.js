import Header from "../comp/header";
import Footer from "../comp/Footer";

import { Helmet } from "react-helmet-async";
import { auth } from "../config/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import "../comp/home.css";
import { sendEmailVerification } from "firebase/auth";
import Loading from "../comp/Loading";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return (
      <>
    <Loading />
      </>
    );
  }

  if (!user) {
    return (
      <>
        <Header />
        <main>
          {" "}
          (
          <main>
            Please{" "}
            <NavLink
              to="/signin"
              className="wait"
              style={{ margin: "0px 10px" }}
            >
              {" "}
              Sign in
            </NavLink>{" "}
            to continue. . . . <span>🧡</span>
          </main>
          )
        </main>
        <Footer />
      </>
    );
  }
  

  if (user) {
    return (
      <>
        <Helmet>
          <title>HOME Page</title>
          <meta name="description" content="HOMEEEEEEEEEEEE" />
        </Helmet>

        <Header />

        <main style={{ flexDirection: "column" }}>
        <div className="welcome">  Welcome <span>🧡</span>:{user.displayName}</div>
          {user && !user.emailVerified && (
            <>
              <h2>Please verify Your account to countine</h2>
              <button
                style={{
                  fontSize: "1.3rem",

                  width: "10rem",
                  height: "2rem",
                  marginTop: "10px",
                  backgroundColor: "red",
                  border: "2px solid red",
                }}
              >
                <NavLink to="/signup"> Verify</NavLink>
              </button>
            </>
          )}
        </main>

        <Footer />
      </>
    );
  }
};

export default Home;
