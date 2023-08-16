<template>
  <nav class="header">
    <div class="logo">
      <img src="@/assets/addis-logo.png" alt="Addis Horizon" />
    </div>
    <div class="nav">
      <button>Home</button>
      <button>About</button>
      <button class="properties">Properties</button>
    </div>
    <div class="bar-icon" @click="toggleSideBar">
        <i class="fa-solid fa-bars"></i>
      </div>
    <div class="nav-smaller" v-show="showSidebar">
      <div class="bar-icon" @click="toggleSideBar">
        <i class="fa-solid fa-x"></i>
      </div>
      <div class="small-nav-buttons">
        <button @click="goHome">Home</button>
        <button @click="goAbout">About</button>
        <button>Properties</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showSidebar: false,
    };
  },
  methods: {
    toggleSideBar() {
      this.showSidebar = !this.showSidebar;
    },
    goHome() {
      this.$router.push("/")
    },
    goAbout() {
      this.$router.push("/about")
    }
  }
};
</script>

<style>
/* header styles */
.logo {
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  color: gold;
}

.logo img {
  margin-left: 10px;
  height: 50px;
}

.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header button {
  font-weight: bold;
  font-size: 1em;
  padding: 8px 16px;
  margin-right: 10px;
  border: none;
  border-radius: 8px;
  background-color: transparent;
  color: #2c3e50;
  transition: all 0.3s ease;
}

.header button:hover {
  background-color: rgb(0, 157, 97);
  color: wheat;
}

.header .properties {
  background-color: rgb(0, 157, 97);
  color: wheat;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.header .properties:hover {
  background-color: transparent;
  border: 2px solid rgb(0, 157, 97);
  color: rgb(0, 157, 97);
}

.header .bar-icon {
  color: #2c3e50;
  width: fit-content;
  display: none;
}

.nav-smaller {
  display: none;
}

@media screen and (max-width: 600px) {
  .header .nav {
    display: none;
  }

  .header .bar-icon {
    display: block;
  }

  .nav-smaller {
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    width: 50%;
    flex-wrap: wrap-reverse;
    align-content: flex-start;
    background-color: wheat;
    padding-top: 20px;
    box-shadow:-10px 0px 50px 10px rgb(0 0 0 / 30%)
  }

  .small-nav-buttons {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .small-nav-buttons button {
    margin: 5px auto;
  }
}
</style>
