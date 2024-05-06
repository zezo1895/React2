import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/config";
import { useEffect } from "react";
import Moment from 'react-moment';
import 'moment-timezone';
import Loading from "../comp/Loading";
import Error404 from "./Error404";

const Porfile = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user && !loading) {
      navigate("/signin");
    }
    if(!user.emailVerified){
      navigate("/");
    }
  }, );
  if (loading) {
    return (
      <>
    <Loading />
      </>
    );
  }
  if(error){
    <Error404/>
  }

  if(user.emailVerified){
  return (
    <>
      <Helmet>
        <title>Porfile</title>
        <meta name="description" content="JAVASCRIPTTTTTTTTTTTTTTTTTTTTT" />
        <style type="text/css">{`
        main{
          display:flex;
          flex-direction: column;
          align-items: flex-start;
          width: fit-content;
          margin: 0 auto;
          gap:15px;
        }
   main .email , main .user , main .create , main .last{
    color:#000
   }
.Dark  main .email,.Dark main .user , .Dark main .create ,.Dark main .last  {
  color:#fff;
}
main button{
  font-size:1.3rem;
  width:10rem;
  height:2rem;
  
  background-color:red;
  border:2px solid red;
  
}
button:active{
  scale: .9;
}
.Light .date{
color:#000
}
        
    `}</style>
      </Helmet>
      <Header />

      <main>
        <div className="user">user_names <span>🧡</span>: {user.displayName}</div>
        <div className="email">Email<span>🧡</span>: {user.email}</div>
        <div className="create">Created at <span>🧡</span>: <Moment  className="date" format="YYYY/MM/DD">
        {user.metadata.creationTime}
            </Moment> </div>
        <div className="last">last Sign <span>🧡</span>:<Moment className="date" tz="Egypt/Cairo" date={user.metadata.lastSignInTime} format="hh:mm:ss" durationFromNow /> </div>
        <button>Delete</button>
      </main>
      <Footer />
    </>
  );
}
};

export default Porfile;
