import React from 'react';
import Header from './Header';
import Feature from './Feature';
import './App.css'; // General styles

function App() {
  return (
    <div className="App">
      <Header />
      <Feature
        title="Enjoy on Your TV."
        description="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        image="/images/feature-1.gif"
        isImageFirst={false}
      />
      <Feature
        title="Download your shows to watch offline."
        description="Save your favourites easily and always have something to watch."
        image="/images/feature-2.gif"
        isImageFirst={true}
      />
      <Feature
        title="Watch everywhere."
        description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        image="/images/feature-3.gif"
        isImageFirst={false}
      />
      <Feature
        title="Create profiles for kids."
        description="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        image="/images/feature-4.png"
        isImageFirst={true}
      />
      {/* Add other components for FAQ, Footer, etc. */}
    </div>
  );
}

export default App;
