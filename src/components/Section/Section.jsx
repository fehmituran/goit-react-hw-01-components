import React from "react";
import css from "./Section.module.css"
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
    return (
        <section className= {css.section}>
        <div>
          <h1>{title}</h1>
          <div className= {css.children}>
          {children}

          </div>
          
        </div>
      </section>
    )
};


Section.prototype = {
    title: PropTypes.string.isRequired,
  };

export default Section;