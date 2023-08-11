<template>
  <Hero :homes="homes" class="hero"/>
  <section>
    <div class="explore">
      <h1>Explore More Homes</h1>
    </div>
    <div class="cards">
      <Card v-for="home in homes" :key="home.id"/>
    </div>
  </section>

  <div class="container">
    <div class="projects">
      <h2>Projects</h2>
      <div class="project-image">
        <img src="../assets/projects.jpg" alt="Projects" />
      </div>
    </div>

    <div class="news">
      <h2>Latest News</h2>
      <div class="news-item">
        <h3>Bews Bitle 1</h3>
        <p>News Content</p>
      </div>
      <div class="news-item">
        <h3>Bews Bitle 1</h3>
        <p>News Content</p>
      </div>
    </div>
  </div>

  <div class="visit-us">
    <img src="../assets/office.jpg" alt="Office" />
    <button class="visit-button">Visit us</button>
  </div>

  <div class="bottom">
    <div class="bottom-left">
      <div class="bottom-left-top">
        <h1 class="name">Addis Horizon Realty Group</h1>
        <h6>Our property, your property.</h6>
      </div>
      <div class="bottom-left-bottom"></div>
    </div>
    <div class="bottom-right">
      <h3>Company</h3>
      <p><a href="#">About</a></p>
      <p><a href="#">News</a></p>
      <p><a href="#">Privacy</a></p>
      <p><a href="#">Properties</a></p>
    </div>
  </div>

  <footer class="footer">
    <div class="social-media">
      <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
      <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
      <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
    </div>
    <div class="copy-right">
      &copy; 2023 Addis Horizen Realty Group. All rights reserved.
    </div>
  </footer>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Card from "@/components/Card.vue";
import { ref } from "vue";

import propertiesData from '../../data/db.json';

export default {
  name: "Home",
  components: {
    Hero,
    Card,
  },
  setup() {
    const homes = ref(propertiesData);

    return { homes };
  },
};
</script>

<style scopped>
Hero {
  box-sizing: border-box;
}

.explore h1 {
  color: black;
  font-size: 3em;
  margin: 50px 0 25px 0px;
}

.cards {
  margin: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
  gap: 30px;
}

@media (min-width: 768px) {
  .cards {
    justify-items: center;
  }
}

@media (min-width: 1024px) {
  .cards {
    flex-wrap: nowrap;
    max-height: calc(3 * (300px + 10px));
  }
}

/* Projects & News Section */
.container {
  display: flex;
  justify-content: space-around;
}

.projects {
  flex-basis: 66.67%;
  margin: 20px;
}

.project-image img {
  background-color: red;
  max-width: 100%;
}

.news {
  flex-basis: 33.33%;
  background-color: #f1f1f1;
  margin: 30px auto;
  padding: 20px;
  max-width: 300px;
}

.news-item {
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .projects,
  .news {
    flex-basis: 100%;
  }

  .news {
    margin: 30px;
  }
}

/* Visit us styling */
.visit-us {
  position: relative;
  width: 100%;
}

.visit-us img {
  width: 100%;
  height: auto;
  display: block;
  max-height: 460px;
}

.visit-us::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
}

.visit-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid wheat;
  padding: 10px 20px;
  font-size: 18px;
}

.visit-button:hover {
  color: rgb(0, 157, 97);
  background: wheat;
  box-shadow: 0 0 10px 0 rgb(0, 157, 97);
}

/* Bottom part not footer */
.bottom {
  display: flex;
  justify-content: space-between;
  margin: 20px;
  margin-top: 50px;
}

.bottom-left-top {
  text-align: start;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.bottom-right {
  padding: 10px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.bottom-right h3 {
  padding-bottom: 10px;
}

.bottom-right a {
  text-decoration: none;
  color: black;
  font-family: 'Borel';
}

.bottom-right a:hover {
  color: rgb(0, 157, 97);
}

/* footer styling */
.footer {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  gap: 30px;
}

.social-media .social-link {
  color: rgb(0, 157, 97);
  margin-right: 10px;
  font-size: 18px;
}

.social-media .social-link:hover {
  color: black;
}

.copy-right {
  color: rgb(52, 92, 56);
}
</style>
