import { FC } from 'react';

const Header: FC = () => {
  
  return (
    <header className='w_100p'>
      <div className="header__wrapper">
        <a href="/" className='image_centerY gap_15 text_gray_700 text_bold'>
          <img src="/favicon/react.svg" alt="logo"/>
        </a>
        
        <div className="block_row gap_25 align-center header__link">
        </div>
        
        
        <button className='button'>Войти</button>
      </div>
    </header>
  );
};

export default Header;