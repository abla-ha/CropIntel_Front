import React, { useRef } from 'react';

import { motion, useScroll } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import cogImage from '../../assets/cog.png';
import { Link } from 'react-router-dom';

import './index.css'

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section ref={heroRef} className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="tag">Version 1.0 is here</div>
            <h1 className="hero-title">
              Welcome to CropIntel AI
            </h1>
            <p className="hero-description">
              We use artificial intelligence to give farmers real-time advice on crops, pests, and weather.
              Our platform helps make smart farming decisions with easy-to-use mobile and web app
            </p>
            <div className="cta-buttons">
              <Link to ='/register'> 
                <a  className="btn btn-primary">
                  Get for free
                </a>
              </Link>
            
              <a  className="btn btn-text">
                <span>Learn more</span>
                <ArrowRight className="arrow-icon" />
              </a>
            </div>
          </div>
          <div className="hero-image">
          <motion.img 
                src={cogImage} 
                alt="Cog image"
                className="cog-image"

              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 3,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </section> 
  );
};

export default Hero;