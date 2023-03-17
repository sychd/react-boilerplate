import React from 'react';
import 'src/styles/main.scss';
import CatImg from 'src/assets/images/cat.jpeg';
import StarSVG from 'src/assets/images/star.svg';
import 'src/modules/welcome-screen/welcome-screen.scss';

export function WelcomeScreen() {
  return (
    <div className='welcome-screen'>
      <div className='welcome-screen__images-container'>
        <img src={CatImg} alt='Cat' className='welcome-screen__image' />
        <StarSVG className='welcome-screen__image' />
        <div className='welcome-screen__image welcome-screen__image_cat-bg' />
      </div>
      <span className='welcome-screen__title'>Hello!</span>
    </div>
  );
}
