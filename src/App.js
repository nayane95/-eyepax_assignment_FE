import React from 'react';
import './App.css';
import Slider from './components/Carousel/Carousel';

const App = () => {

return (
  <div className="App">
    <Slider slide_count={5} infinte={false}/>
  </div>
);
};

export default App
