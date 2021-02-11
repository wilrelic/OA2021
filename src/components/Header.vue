<template>
  <div class="top-bar">
    <div class="search-button">
      <i class="fa fa-search fa-3x" id="search-icon" aria-hidden="true"></i>
    </div>
    <router-link to="/">  
      <img alt="OA Logo" src="../assets/imgs/logo.png" />
      <p class="logo-tagline">MORE CARS | MORE CHOICE</p>
    </router-link>
      <Slide right :closeOnNavigation="true">
          <router-link to="Inventory"> 
              <span class="nav-links">Browse Inventory</span> 
          </router-link>
          <router-link to="Finance"> 
              <span class="nav-links">Finance Options</span>  
          </router-link>
          <router-link to="Warranty"> 
              <span class="nav-links">Warranty Plans</span> 
          </router-link>
          <router-link to="Aftercare"> 
              <span class="nav-links">Aftercare</span>
          </router-link>
          <router-link to="Careers"> 
              <span class="nav-links">Careers</span> 
          </router-link>
          <router-link to="Locations"> 
              <span class="nav-links">Locations</span> 
          </router-link>
      </Slide>
  </div>
</template>

<script>
import { Slide } from "vue-burger-menu";
export default {
  name: "Header",
  components: {
    Slide,
  }
};
</script>

<style lang="scss" scoped>
$primary: rgb(224, 65, 38);
$secondary: rgb(49, 49, 49);
$light: rgb(190, 190, 190);
$highlight: rgb(255, 255, 255);

a {
  text-decoration: none;
}

.nav-links {
  color: $light;
}

.nav-links:hover {
    color: $primary;
}

.top-bar {
  background-color: $secondary;
  color: $primary;
  height: 100px;
  padding: 20px 20px;
  box-shadow: 0px 2px 8px black;
  font-size: x-small;
  letter-spacing: 2px;
  font-weight: bold;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  p {
    margin-top: 4px;
  }
}

.logo-tagline {
  color: $primary;
  text-align: center;  
}

.search-button {
  position: fixed;
  top: 20px;
  left: 20px;
  cursor: pointer;
  color: $light;

  :hover {
    color: $primary;
  }
}
</style>
