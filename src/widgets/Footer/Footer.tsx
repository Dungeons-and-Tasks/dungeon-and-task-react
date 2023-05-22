import { FC } from 'react';
import Social from "@/shared/ui/Social/Social";
import { EvoSocial } from "@/shared/ui/Social/Social.config";

const Footer: FC = () => {
  return (
    <footer className='full-width block_column align-center'>
      <div className="maxw_container block_row justify-between align-center p_30X">
        <div className="image_centerY">
          <img src="/favicon/react.svg" alt="logo"/>
        </div>
        
        <div className="footer__link block_row">
        
        
        </div>
        <div className='block_column align-start'>
          <p>Наши соцсети</p>
          
          <div className="image_centerY">
            <Social config={ EvoSocial } blank={ true }/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;