<template>
  <div
    class="card"
    @mousemove="moveCard"
    :style="cardStyle"
    @mouseover="hover = true"
    @mouseout="hover = false"
  >
    <div class="image-container">
      <img src="../assets/real-estate.webp" alt="" srcset="" />
      <transition name="fade">
        <div class="gradient" v-if="hover">
          <div class="text-container">
            <h3>{{ title }}</h3>
            <p>{{ subtitle }}</p>
          </div>
        </div>
      </transition>
    </div>
    <transition name="fade">
      <div class="gradient-top" v-if="hover">
        <div class="icons-container">
          <i class="icon nav-arrow fas fa-arrow-right" @click="showDetails"></i>
          <i class="icon heart fas fa-heart" @click="likeImage"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";

export default {
  data() {
    return {
      hover: false,
      title: "Addis Ababa, Bole",
      subtitle: "Image Description",
      mouseX: 0,
      mouseY: 0,
    };
  },
  computed: {
    cardStyle() {
      if (this.hover) {
        const maxRotation = 30;
        const rotationX = (this.mouseY / window.innerHeight) * maxRotation;
        const rotationY = (this.mouseX / window.innerWidth) * maxRotation;

        return {
          transform: `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
        };
      } else {
        return {};
      }
    },
  },
  methods: {
    showDetails() {
      // Navigate to Show Details Page
    },
    likeImage() {
      // Handle save property logic.
    },
    moveCard(event) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    },
  },
};
</script>

<style>
.card {
  background-color: grey;
  position: relative;
  width: 250px;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s;
  transform-origin: center;
}

.card:hover .image-container > img,
.card {
  transform: scale(1.025);
  box-shadow: 0 2px 8px 4px rgb(0, 157, 97);
}

/* image styles */
.image-container {
  position: relative;
  height: 100%;
}

.image-container > img {
  height: 100%;
  max-height: 300px;
  display: block;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transition: 200ms transform ease;
}

/* gradient transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* bottom gradient */
.gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to top, rgba(0, 157, 97, 0.8), transparent);
  display: flex;
  align-items: flex-end;
  justify-content: left;
  transition: opacity 0.3s;
}

.text-container {
  text-align: left;
  color: wheat;
  margin: 10px;
  font-size: 1em;
}

/* top gradient */
.gradient-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: linear-gradient(to bottom, rgb(0, 157, 97, 0.8), transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;
}

.icons-container {
  position: absolute;
  top: 10px;
  right: 10px;
}

.icon {
  margin: 10px;
  color: #fff;
  cursor: pointer;
}

.icon:hover {
  color: wheat;
  background-color: rgba(245, 222, 179, 0.5);
  box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.5);
  transition: box-shadow 0.3s ease, background-color 0.3s ease;
}

.icon.nav-arrow {
  transform: rotate(-45deg);
}
</style>
