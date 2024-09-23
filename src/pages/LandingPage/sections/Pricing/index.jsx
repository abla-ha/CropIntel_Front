import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import './index.css'
import { Link } from 'react-router-dom';

const pricingTiers = [
  {
    id: 'free',
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Basic Weather Forecasts",
      "Limited Pest Detection",
      "Access to Crop Library",
      "Basic support",
    ],
  },
  {
    id: 'premium',
    title: "Premium Plan",
    monthlyPrice: 200,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Detailed Pest Analysis",
      "Comprehensive Weather Forecasts",
      "Personalized Crop Recommendations",
      "Plant Disease Detection",
      "Access to Expert Webinars",
      "Priority Customer Support",
    ],
  },
  {
    id: 'enterprise',
    title: "Enterprise Plan",
    monthlyPrice: "custom",
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "All Premium Features",
      "Tailored Solutions for Larger Farms",
      "Advanced Data Analytics",
      "Integration with Farm Management Software",
      "On-site Training and Support",
      "Dedicated Account Manager",
      "Advanced security features",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="pricing-section">
      <div className="container">
        <div className='section-heading'>
          <h2 className="section-title">Pricing</h2>
          <p className="section-description">
            Free, Upgrade for unlimited tasks, better security, and exclusive features.
          </p>
        </div>
        <div className='pricing-tiers'>
          {pricingTiers.map(({ id, title, monthlyPrice, buttonText, popular, inverse, features }) => (
            <div key={id} className={`pricing-card ${inverse ? 'inverse' : ''}`}>
              <div className='card-header'>
                <h3 className={`card-title ${inverse ? 'inverse' : ''}`}>{title}</h3>
                {popular && (
                  <div className='popular-tag'>
                    <motion.span
                      animate={{
                        backgroundPositionX: '-100%',
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: 'linear',
                        repeatType: 'loop',
                      }}
                      className='popular-text'
                    >
                      Popular
                    </motion.span>
                  </div>
                )}
              </div>
              <div className='price'>
                <span className='amount'>${monthlyPrice}</span>
                <span className='period'>/year</span>
              </div>
              <Link to='/register'> 
              <a className='cta-button'>
                  {buttonText}
              </a>
              </Link>
               
              <ul className='feature-list'>
                {features.map((feature, featureIndex) => (
                  <li key={featureIndex} className='feature-item'>
                    <Check className="check-icon"/>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;