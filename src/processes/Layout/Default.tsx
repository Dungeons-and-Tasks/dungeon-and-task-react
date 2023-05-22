import { FC, ReactNode } from 'react';
import Header from "@/widgets/Header/Header";
import Footer from "@/widgets/Footer/Footer";

export interface IDefaultProps {
  children: ReactNode
}

const Default: FC<IDefaultProps> = ({ children }) => {
  return (
    <>
     <Header />
      
      { children }
      
     <Footer />
    </>
  );
};

export default Default;