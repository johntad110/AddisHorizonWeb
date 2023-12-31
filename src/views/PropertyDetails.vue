<template>
  <Header />
  <!-- move header to app.vue in future -->
  <div class="property-details">
    <h1 class="property-name">{{ property.name }}</h1>
    <div class="hero-section">
      <div class="big-image">
        <img :src="getImagePath(property.image[0])" alt="Property" />
      </div>
      <div class="small-images">
        <div
          class="small-image"
          v-for="(image, index) in property.image.slice(1, 4)"
          :key="index"
        >
          <img
            :src="getImagePath(image)"
            alt="Property"
            @click="showImage(index + 1)"
          />
        </div>
      </div>
    </div>

    <div class="description">
      <h2>{{ property.name }}</h2>
      <p>{{ property.description }}</p>
    </div>

    <div class="similar-homes">
      <h3>Similar Homes</h3>
      <div class="scrollable-list">
        <div
          class="similar-home"
          v-for="home in similarHomes"
          :key="home.id"
          @click="navigateToDetails(home.id)"
        >
          <img :src="getImagePath(home.image[0])" alt="Similar Property" />
          <div class="home-details">
            <h4>{{ home.name }}</h4>
            <p>{{ home.location }}</p>
            <p>{{ formatPrice(home.price) }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="image-modal" v-if="showModal">
      <span class="close-modal" @click="closeImage">&times;</span>
      <img :src="getImagePath(property.image[modalIndex])" alt="Property" />
    </div>
  </div>
</template>

<script>
import propertiesData from "../../data/db.json";
import Header from "@/components/Header.vue"

export default {
  components: {
    Header,
  },
  data() {
    return {
      showModal: false,
      modalIndex: 0,
    }
  },
  computed: {
    property() {
      const id = parseInt(this.$route.params.id);
      return propertiesData.find((home) => home.id === id);
    },
    similarHomes() {
      return propertiesData.filter((home) => home.id !== this.property.id);
    },
  },
  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);
    },
    getImagePath(filename) {
      return require(`@/assets/${filename}`);
    },
    navigateToDetails(homeID) {
      this.$router.push(`/property-details/${homeID}`);
    },
    showImage(index) {
      this.showModal = true;
      this.modalIndex = index;
    },
    closeImage() {
      this.showModal = false;
      this.modalIndex = 0;
    }
  },
};
</script>

<style>
.property-name {
  font-weight: bold;
  font-size: 4em;
  padding: 20px;
}

.property-details {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.hero-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.big-image img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  cursor: pointer;
}

.small-images {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 10px;
}

.small-images img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer;
}

.description {
  margin-bottom: 20px;
}

.description h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

/* similar homes styles */
.similar-homes {
  margin-bottom: 40px;
}

.similar-homes h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.scrollable-list {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  padding-bottom: 10px;
}

.similar-home {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  margin-right: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
  width: 200px;
  height: 250px;
  transition: transform 0.3s ease background-color 0.5s ease-in;
}

.similar-home img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
}

.similar-home h4 {
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 5px;
}

.similar-home p {
  font-size: 14px;
  margin-bottom: 5px;
}

.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.close-modal {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}

.image-modal img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 5px;
}

.similar-home:hover {
  cursor: pointer;
  background-color: #cfba94;
  border-radius: 16px;
}

.similar-home:hover img {
  transform: scale(1.025);
}

.home-details h4 {
  font-size: 18px;
  margin-bottom: 5px;
}

.home-details p {
  font-size: 14px;
  margin: 0;
}

@media screen and (max-width: 600px) {
  .hero-section {
    grid-template-columns: 1fr;
  }

  .small-images {
    justify-content: center;
  }

  .similar-homes {
    margin-bottom: 20px;
  }

  .similar-home {
    width: 160px;
    height: 200px;
  }

  .similar-home img {
    height: 90px;
  }

  .property-details {
    padding: 10px;
  }
}
</style>