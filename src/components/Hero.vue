<template>
  <div class="hero">
    <div class="background-image"></div>

    <nav class="navbar">
      <div class="logo">
        <img src="../assets/addis-logo.png" alt="Addis Horizon" />
      </div>
      <div class="buttons dropdown" :class="{ show: isDropdownOpen }">
        <button>Buy</button>
        <button>Sell</button>
        <button>Rent</button>
      </div>
      <div class="bar-icon" @click="toggleDropdown">
        <i class="fa-solid fa-bars"></i>
      </div>
    </nav>
    <div class="navbar-shadow"></div>

    <div class="search-bar">
      <input
        type="text"
        placeholder="Search for your desired Home"
        v-model="searchQuery"
        @input="performSearch"
      />
      <button type="submit" @click="performSearch">Search</button>
    </div>

    <div v-if="searchResults.length" class="search-results">
      <ul>
        <li
          v-for="result in searchResults"
          :key="result.id"
          @click="navigateToDetails(result.id)"
        >
          {{ result.name }}
        </li>
      </ul>
    </div>
    <div class="scroll-indicator" @click="scrollToExplore">
      <div class="capsule">
        <div class="cusom-shape"></div>
      </div>
      <div class="arrow"></div>
    </div>
  </div>
</template>
  
<script>
import "@fortawesome/fontawesome-free/css/all.css";
import { onMounted, onUnmounted } from 'vue';

export default {
  props: ["homes"],
  data() {
    return {
      isDropdownOpen: false,
      searchResults: [],
      searchQuery: "",
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    performSearch() {
      // Clear previous search results
      this.searchResults = [];

      // Perform the search
      if (this.searchQuery.trim() !== "") {
        const searchTerm = this.searchQuery.toLowerCase();
        this.searchResults = this.homes.filter((home) =>
          home.name.toLowerCase().includes(searchTerm)
        );
      }
    },
    navigateToDetails(homeID) {
      // Show details for that home
      console.log("Going to Details Page for home: " + homeID);
      this.$router.push(`/property-details/${homeID}`)
    },
    scrollToExplore() {
      const exploreSection = document.querySelector('.explore');
      const options = {
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      };
      exploreSection.scrollIntoView(options);
    },
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

/* hero section styling */
.hero {
  position: relative;
  width: 100vw;
  height: 100vh;
  opacity: 1;
  transition: opacity 0.5s easeout;
}

.hero.fade-out {
  opacity: 0;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/real-estate.webp");
  background-size: cover;
}

/* top navigation bar */
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 20px;
  box-sizing: border-box;
  background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  transition: all 0.3s ease;
}

.navbar:hover {
  background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
}

.navbar-shadow {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
}

.logo {
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  color: gold;
}

.logo img {
  margin-left: 10px;
  height: 70px;
}

button {
  font-weight: bold;
  font-size: 1em;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background-color: transparent;
  color: wheat;
  transition: all 0.3s ease;
}

button:hover {
  background-color: rgb(0, 157, 97);
  color: white;
}

.buttons {
  display: flex;
  gap: 10px;
  margin-right: 30px;
}

.bar-icon {
  display: none;
  color: wheat;
  margin-right: 30px;
  font-size: x-large;
}

/* search bar */
.search-bar {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  text-align: center;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.search-bar input[type="text"] {
  width: 100%;
  height: 60px;
  padding: 0 10px;
  border: none;
  border-radius: 16px;
  font-size: 1em;
  font-weight: bold;
  background-color: rgb(245, 222, 179,  0.5);
  backdrop-filter: blur(10px);
  color: black;
  caret-color: black;
}

.search-bar input[type="text"]::placeholder {
  color: black;
  font-size: 0.9em;
  font-weight: bold;
  /* padding-left: 10px; */
}

.search-bar button {
  height: 40px;
  position: absolute;
  border: none;
  color: wheat;
  background-color: rgb(0, 157, 97, 0.8);
  border-radius: 8px;
  margin: 10px;
}

.search-bar button:hover {
  background-color: rgb(52, 92, 56);
  color: white;
  box-shadow: 0 0 55px rgba(255, 255, 255, 0.5);
}

.search-bar button i {
  color: #888;
}

/* Search Result Styles */
.search-results {
  position: absolute;
  top: calc(55% + 10px);
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  text-align: center;
  background-color: rgb(245, 222, 178, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 10px;
  z-index: 1;
}

.search-results ul {
  list-style-type: none;
  padding: 0;
}

.search-results li {
  cursor: pointer;
  color: black;
  padding: 10px;
  transition: background-color 0.3s ease;
  border-radius: 8px;
  font-weight: bold;
}

.search-results li:hover {
  background-color: rgba(0, 157, 97, 0.8);
  color: wheat;
}

/* scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

.capsule {
  margin: auto;
  height: 50px;
  width: 50px;
  border: 2px solid white;
  display: inline-block;
  animation: rotate 2s infinite;
}

.custom-shape {
  /* will create a custom shape to replace the div */
  width: 20px;
  height: 20px;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.arrow {
  margin: auto;
  width: 20px;
  height: 20px;
  border-right: 2px solid wheat;
  border-bottom: 2px solid wheat;
  transform: translateY(50px);
  animation: bounce 1s infinite alternate, transform 0.3 ease;
}

.scroll-indicator:hover {
  cursor: pointer;
}

.scroll-indicator:hover .arrow {
  /* background: white; */
  box-shadow: 0 0 30px 20px rgba(255, 255, 255, 0.5);
}

@keyframes bounce {
  0% {
    transform: translateY(50px);
  }
  100% {
    transform: translateY(-50px);
  }
}

@media (max-width: 768px) {
  .bar-icon {
    display: block;
  }

  .buttons {
    display: none;
  }

  .dropdown {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 5px 5px rgb(0, 157, 97, 0.3);
    padding: 30px;
    margin: auto 30px;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.3s ease;
  }

  .dropdown.show {
    visibility: visible;
    opacity: 1;
  }

  .search-bar input[type="text"]::placeholder {
    font-size: 70%;
  }
}
</style>