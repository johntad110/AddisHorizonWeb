<template>
  <Header />
  <div class="about-page">
    <h1>About Addis Horizon Realty Group</h1>
    <img src="@/assets/addis-logo.png" alt="Company Logo" class="logo">
    <p>
      Welcome to Addis Horizon Realty Group, your trusted partner in real estate services in Addis Ababa and beyond. We are a dedicated team of professionals committed to providing exceptional real estate solutions to our clients.
    </p>
    <p>
      At Addis Horizon Realty Group, we understand that buying, selling, or renting a property can be a complex and overwhelming process. That's why we strive to make your real estate journey as smooth and stress-free as possible. With our extensive knowledge of the local market, personalized approach, and attention to detail, we are here to guide you every step of the way.
    </p>
    <h2>Our Mission</h2>
    <p>
      Our mission is to exceed our clients' expectations by delivering outstanding real estate services with integrity, professionalism, and a commitment to excellence. We aim to build long-term relationships based on trust and mutual respect, ensuring that our clients' needs and goals are always the top priority.
    </p>
    <h2>Our Services</h2>
    <ul>
      <li>Residential property sales and purchases</li>
      <li>Commercial property sales and leases</li>
      <li>Property management and rentals</li>
      <li>Real estate investment guidance</li>
      <li>Market analysis and property valuation</li>
      <li>Legal and financial assistance</li>
      <li>Relocation services</li>
      <li>And more!</li>
    </ul>
    <h2>Why Choose Us</h2>
    <ul>
      <li>Experienced and knowledgeable team</li>
      <li>Personalized approach and attention to detail</li>
      <li>Extensive local market expertise</li>
      <li>Strong network of industry professionals</li>
      <li>Commitment to transparency and integrity</li>
      <li>Exceptional customer service</li>
      <li>Proven track record of successful transactions</li>
      <li>Continual dedication to professional growth and development</li>
    </ul>
    <h2>Contact Us</h2>
    <p>
      If you have any questions or would like to discuss your real estate needs, please don't hesitate to get in touch with us. We look forward to assisting you!
    </p>
    <p>
      Adress: 123 Main Street, Addis Ababam Ethiopia<br>
      Phone: +251-113-455-788<br>
      Email: info@addishorizonrealtygroup.com<br>
  </p>
    <div class="contact-buttons">
      <button class="btn-primary">Call Us</button>
      <button class="btn-secondary">Email Us</button>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'AboutPage',
  components: {
    Header,
  },
}
</script>

<style scoped>
.about-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  color: #333;
}

h1 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
  margin-bottom: 20px;
}

ul li {
  font-size: 16px;
  line-height: 1.5;
}

.logo {
  width: 200px;
  margin-bottom: 20px;
}

.contact-buttons {
  margin-top: 40px;
}

.btn-primary,
.btn-secondary {
  display: inline-block;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border: 2px solid wheat;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 10px;
}

.btn-primary {
  background-color: rgb(0, 157, 97);
  color: wheat;
}

.btn-secondary {
  background-color: transparent;
  color: rgb(0, 157, 97);
  border: 2px solid;
}

.btn-primary:hover {
  background-color: transparent;
  border: 2px solid;
  color: rgb(0, 157, 97);
}

.btn-secondary:hover {
  color: wheat;
  background-color: rgb(0, 157, 97);
}
</style>
