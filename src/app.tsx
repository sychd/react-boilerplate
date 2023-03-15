import React from 'react';
import 'src/styles/main.scss';
import CatImg from 'src/assets/images/cat.jpeg';
import StarSVG from 'src/assets/images/star.svg';

export function App() {
  return (
    <div className='app-container'>
      <div className='images'>
        <img src={CatImg} alt='Cat' height={25} width={25} />
        <div className='sleeping-cat-block'></div>
        <StarSVG height={25} width={25} />
      </div>
      <span className='header'>Hello world</span>
    </div>
  );
}
