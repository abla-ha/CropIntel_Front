import React from 'react';
import { ArrowRight } from 'lucide-react';
import './index.css'

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Sign Up for Free Today</h2>
          <p className="section-description">
            Celebrate the joy of accomplishment with an app designed to track your crops and motivate your efforts.
          </p>
        </div>
        <div className="cta-buttons">
          <a href="https://hackathon-cropintel.vercel.app/" className="btn btn-primary">
            Get for free
          </a>
          <a href="https://hackathon-cropintel.vercel.app/" className="btn btn-text">
            <span>Learn more</span>
            <ArrowRight className="arrow-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;