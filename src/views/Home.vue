<template>
  <Hero :homes="homes" class="hero"/>
  <section>
    <div class="explore">
      <h1>Explore More Homes</h1>
    </div>
    <div class="cards">
      <Card v-for="home in homes" :key="home.id" :home="home" @click="cardClicked(home.id)"/>
    </div>
  </section>

  <div class="container">
    <div class="projects">
      <h2>Projects</h2>
      <div class="project-image" @click="$router.push('/projects')">
        <button @click="$router.push('/projects')">Open</button>
        <img src="../assets/project1.jpg" alt="Projects" />
        <div class="project-gradient">
          <h3>"Something Giong on in Our Project"</h3>
          <p>"This is a Project Description"</p>
        </div>
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

</template>

<script>
import Hero from "@/components/Hero.vue";
import Card from "@/components/Card.vue";
import { ref } from "vue";

import propertiesData from '../../data/db.json';
import { useRouter } from 'vue-router';

export default {
  name: "Home",
  components: {
    Hero,
    Card,
  },
  setup() {
    const homes = ref(propertiesData);
    const router = useRouter()

    function cardClicked(homeID) {
      router.push(`/property-details/${homeID}`)
    }

    return { homes, cardClicked };
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
  gap: 40px;
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
  overflow: hidden;
}

.project-image {
  position: relative;
}

.project-image img {
  background-color: red;
  max-width: 100%;
}

.projects h2 {
  font-size: 3em;
  margin-top: 50px;
  margin-bottom: 30px;
}

.project-image button {  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid wheat;
  padding: 10px 20px;
  font-size: 18px;
  color: wheat;
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 30px 5px rgb(0, 157, 97, 0.5);
}

.project-image:hover button {
  box-shadow: 0 0 30px 5px purple;
  background-color: white;
  color: rgb(0, 157, 97);
  cursor: pointer;
}

.project-image:hover {
  cursor: pointer;
}

.project-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(to top, rgb(0, 157, 97), transparent);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  transition: opacity 0.3s;
  color: white;
  padding: 10px;
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
</style>
