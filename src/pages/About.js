


import Header from '../comp/header';
import Footer from '../comp/Footer';
import MainContent from '../comp/MainContent';
import { Helmet  } from 'react-helmet-async';

import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/config";
import { useEffect } from 'react';
import Loading from '../comp/Loading';
import Error404 from './Error404';

const About = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  },[user])
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
  return (
    <>
         <Helmet>
        <title>HTML Page</title>
        <meta name="description" content="HTMLLLLLLLLLLLLLLLL" />
      </Helmet>
    <Header />
    <MainContent pageName="About Page"  />   
    <Footer />
  </>
  );
}


export default About;
