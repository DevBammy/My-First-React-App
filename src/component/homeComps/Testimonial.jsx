import React from "react";
import styles from "../homeComps/homeComps.module.css";

const Testimonial = () => {
  return (
    <>
    <h1>Testimonials</h1>
      <div className={styles.testcard}>
        <div className={styles.testcontent}>
          <div>
            <h4>This is an awswome blog website. Very informative</h4>
            <p>Chienedu A.</p>
          </div>
          <div>
            <h4>
              Excellent blog website very informative and very trustworthy{" "}
            </h4>
            <p>Aisha .k</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
