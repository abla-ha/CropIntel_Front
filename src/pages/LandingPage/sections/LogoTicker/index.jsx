import React from 'react';

import { motion } from "framer-motion";

import acmeLogo from '../../assets/logo-acme.png';
import quantumLogo from '../../assets/logo-quantum.png';
import echoLogo from '../../assets/logo-echo.png';
import celestialLogo from '../../assets/logo-celestial.png';
import pulseLogo from '../../assets/logo-pulse.png';
import apexLogo from '../../assets/logo-apex.png';
import './index.css'

const logoImages = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

const LogoTicker = () => {
  return (
    <div className="logo-ticker">
      <div className='container'>
        <div className="ticker-wrapper">
          <motion.div 
            className="ticker-content"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop'
            }}
          >
            {[...logoImages, ...logoImages].map((logo, index) => (
              <img 
                key={`${logo.alt}-${index}`}
                src={logo.src} 
                alt={logo.alt} 
                className="logo-image" 
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;