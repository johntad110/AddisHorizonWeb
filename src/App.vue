<template>
  <!-- header -->
  <router-view />
  <!-- footer -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}

body,
body::before,
body::after {
  font-family: 'Nova Round', cursive;
}

.name {
  font-family: "Borel", cursive;
}

/* font-family: 'Borel', cursive;
font-family: 'Nova Round', cursive;
font-family: 'Signika', sans-serif; */

html {
  overflow-x: hidden;
}

body {
  background-color: wheat;
}
</style>
