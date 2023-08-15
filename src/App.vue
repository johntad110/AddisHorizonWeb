<template>
  <!-- header -->
  <router-view />
  <!-- footer -->
  <div class="separator-line"></div>
  <div class="bottom">
    <div class="bottom-left">
      <div class="bottom-left-top">
        <h1 class="name">Addis Horizon Realty Group</h1>
        <h6>Our property, Your property.</h6>
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

/* footer styles */
.separator-line {
  height: 2px;
  width: 96%;
  margin: auto;
  margin-top: 50px;
  background-color: rgb(255, 255, 255);
}

/* Bottom part */
.bottom {
  display: flex;
  justify-content: space-between;
  margin: 20px;
  margin-top: 30px;
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
  color: #2c3e50;
}

.copy-right {
  color: rgb(52, 92, 56);
}
</style>
