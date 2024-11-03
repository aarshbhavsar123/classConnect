import React, {useState,useEffect} from 'react';
import { IonIcon } from '@ionic/react';
import './Footer1.css';

const Footer = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;

      setIsSticky(bodyHeight < windowHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  console.log("hfbdsf");
  console.log(isSticky);
  return (
    <div className={isSticky ? "foo1-sticky" : "foo1"}>
          <footer className="footer1">
          <p>&copy;Copyright : ClassConnect by ProjectDAVS</p>
        </footer>
    </div>
    
  );
};

export default Footer;
