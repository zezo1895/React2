import React from 'react';
import "../comp/loading.css"
import Header from './header';
import Footer from './Footer';

const Loading = () => {
  return (
<>
<Header/>
<main>
<div class="loader"></div>
</main>
<Footer/>
</>
  );
}

export default Loading;
