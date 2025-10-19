import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <section className={`${styles.footer} padding_Buttom container`}>
      <div className={styles.container}>
        <div className={styles.desc}>
          <img src="/assets/img/logo.svg" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
            tempus felis vitae sit est quisque.
          </p>
        </div>
        <div>
          <p  className={styles.title}>Service</p>
          <ul>
            <li>Payment & Tax</li>
            <li>Features</li>
            <li>View Booking</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
            <p className={styles.title}>About</p>
          <ul>
            <li>About us</li>
            <li>News</li>
            <li>Pricing</li>
            <li>New Property</li>
          </ul>
        </div>
        <div>
          <p className={styles.title}>Our Location</p>
          <span className={styles.location}>2972 Westheimer Rd. Santa Ana, Illinois 85486 </span>
          <div className={styles.social}>
            <img src="/assets/img/footer/facebook.svg" />
            <img src="/assets/img/footer/x.svg" />
            <img src="/assets/img/footer/linkedin.svg" />
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        <div>
          <span>Copyright 2024 flora. All Rights Reserved</span>
        </div>
        <div>
          <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
