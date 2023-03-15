import React from 'react';
import 'src/styles/main.scss';
import CatImg from 'src/assets/images/cat.jpeg';
import StarSVG from 'src/assets/images/star.svg';
import 'src/modules/app/app.scss';

export function App() {
  return (
    <div className='app'>
      <div className='app__images-container'>
        <img src={CatImg} alt='Cat' className='app__image' />
        <StarSVG className='app__image' />
        <div className='app__image app__image_cat-bg'></div>
      </div>
      <span className='app__title'>Hello!</span>
    </div>
  );
}
