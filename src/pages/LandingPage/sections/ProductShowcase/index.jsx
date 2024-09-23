import React, { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import productImage from '../../assets/product-image.png';
import pyramidImage from '../../assets/pyramid.png';
import tubeImage from '../../assets/tube.png';
import './index.css'

const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={sectionRef} className="product-showcase">
      <div className="container">
        <div className='section-heading'>
          <div className='tag-wrapper'>
            <div className='tag'>Boost your productivity</div>
          </div>
          <h2 className='section-title'>
            A more effective way to track crops
          </h2>
          <p className='section-description'>
            Effortlessly turn your farming insights into action with AI-powered crop recommendations, 
            plant disease and pest detection, and precise weather forecasts
          </p>
        </div>
        <div className='product-images'>
          <motion.div className='main-image'>
            <img src={productImage} alt='Product Image' layout="responsive" />
          </motion.div>
          <motion.div className='pyramid-image' style={{ translateY }}>
            <img src={pyramidImage} alt='Pyramid Image' width={162} height={62} />
          </motion.div>
          <motion.div className='tube-image' style={{ translateY }}>
            <img src={tubeImage} alt='Tube Image' width={248} height={248} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;