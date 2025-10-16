import styles from './homeComps.module.css';
import testimonialimage from '../../assets/hero.jpg';
const Testimonial = () => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.testimonialHead}>
        <h2>Testimonials</h2>
        <p>Here is what people think about our blogs and insights</p>
      </div>
      <div className={styles.Container}>
        <div className={styles.box}>
          <img src={testimonialimage} alt="" />
          <h4>Dvora Chukwu</h4>
          <span>Content Writer</span>
          <p>"This blog helped me improve writing and SEO skils.Every article is full of value! "</p>
        </div>
        <div className={styles.box}>
          <img src={testimonialimage} alt="" />
          <h4>Adaaja David</h4>
          <span>user</span>
          <p>"The blogs are well written, and more detailed, this has helped me gain more information on things in my enviroment! "</p>
        </div>
        <div className={styles.box}>
          <img src={testimonialimage} alt="" />
          <h4>Kingsley Ejeka</h4>
          <span>CEO</span>
          <p>" I love how simple and visually clean we have made the blog app it has been efficient to our users! "</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
