import React from 'react';
import { motion } from 'framer-motion';
import './index.css'

import avatar1 from "../../assets/avatar-1.png";
import avatar2 from "../../assets/avatar-2.png";
import avatar3 from "../../assets/avatar-3.png";
import avatar4 from "../../assets/avatar-4.png";
import avatar5 from "../../assets/avatar-5.png";
import avatar6 from "../../assets/avatar-6.png";
import avatar7 from "../../assets/avatar-7.png";
import avatar8 from "../../assets/avatar-8.png";
import avatar9 from "../../assets/avatar-9.png";

const testimonials = [
    {
      text: "CropIntel AI's Crop Recommendation feature helped me choose the best crops for my land, significantly improving my yield and profitability.",
      imageSrc: avatar1,
      name: "Uwumukiza Anitha",
      username: "@anithau",
    },
    {
      text: "Accurate weather forecasts from CropIntel AI help protect my coffee crops from unexpected weather changes.",
      imageSrc: avatar2,
      name: "Hakizimana Janvier",
      username: "@hkzjanvier",
    },
    {
      text: "The detailed LLM diagnostic reports from CropIntel AI provide actionable insights, improving my orchard’s health and overall productivity.",
      imageSrc: avatar3,
      name: "Manzi Rwaje",
      username: "@manzixx",
    },
    {
      text: "CropIntel AI optimizes planting schedules and reduces pesticide use with effective pest detection.",
      imageSrc: avatar4,
      name: "Zawadi Amina",
      username: "@zwamiina1",
    },
    {
      text: "Accurate data from CropIntel AI supports my organic farming with crop rotations and pest management.",
      imageSrc: avatar5,
      name: "Rurangirwa Kassim",
      username: "@kassimmr",
    },
    {
      text: "CropIntel AI optimizes planting schedules and reduces pesticide use with effective pest detection.",
      imageSrc: avatar6,
      name: "Kabano Dalia",
      username: "@kab_dalia",
    },
    {
      text: "Early disease detection with CropIntel AI reduces crop loss and improves my wheat farm’s health",
      imageSrc: avatar7,
      name: "Mugabo Tito",
      username: "@mutitoo",
    },
    {
      text: "Weather updates and disease alerts from CropIntel AI improve crop health and yields.",
      imageSrc: avatar8,
      name: "Mutesi Alice",
      username: "@mutesia",
    },
    {
      text: "Its user-friendly interface and robust features support our diverse needs.",
      imageSrc: avatar9,
      name: "Nyirazo Adrien",
      username: "@nyiraa1",
    },
  ];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = ({ className, testimonials, duration }) => (
  <div className={`testimonials-column ${className || ''}`}>
    <motion.div
      animate={{
        translateY: '-50%',
      }}
      transition={{
        duration: duration || 10,
        repeat: Infinity,
        ease: 'linear',
        repeatType: 'loop',
      }}
      className="testimonials-column-content"
    >
      {[...new Array(2)].map((_, index) => (
        <React.Fragment key={index}>
          {testimonials.map(({ text, imageSrc, name, username }, cardIndex) => (
            <div key={cardIndex} className="testimonial-card">
              <div className="testimonial-text">{text}</div>
              <div className="testimonial-author">
                <img
                  src={imageSrc}
                  alt={name}
                  width={40}
                  height={40}
                  className="author-image"
                />
                <div className="author-info">
                  <div className="author-name">{name}</div>
                  <div className="author-username">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-heading">
          <div className="tag-container">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title">What our users say</h2>
          <p className="section-description">
            From intuitive design to powerful features, our system has become an essential tool for users around Africa.
          </p>
        </div>
        <div className="testimonials-container">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden-mobile"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden-tablet"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};


export default Testimonials;