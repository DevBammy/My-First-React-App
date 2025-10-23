import React from "react";
import styles from "./homeComps.module.css";

const testimonials = [
  {
    id: 1,
    name: "Ada Johnson",
    role: "Software Engineer",
    text: "Blozy helped me discover insightful content that truly improved my daily workflow. I love how smooth and inspiring the experience is!",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Michael Lee",
    role: "UI/UX Designer",
    text: "The design, layout, and simplicity of Blozy make it one of the best platforms I’ve used. Highly recommend to creatives!",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Sophia Davis",
    role: "Content Creator",
    text: "I’ve been using Blozy for months, and it’s been a game-changer for my productivity and inspiration. Keep it up!",
    image: "https://i.pravatar.cc/100?img=3",
  },
];

const Testimonial = () => {
  return (
    <section className={styles.testimonialSection}>
      <h2 className={styles.testimonialTitle}>What Our Users Say</h2>
      <div className={styles.testimonialContainer}>
        {testimonials.map((item) => (
          <div key={item.id} className={styles.testimonialCard}>
            <img src={item.image} alt={item.name} className={styles.testimonialImage} />
            <p className={styles.testimonialText}>"{item.text}"</p>
            <h4 className={styles.testimonialName}>{item.name}</h4>
            <span className={styles.testimonialRole}>{item.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
