<template>
  <div id="app">
    <Header />
    <router-view />
    <ContactForm v-show="toggle" />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ContactForm from "@/components/ContactForm.vue";
export default {
  components: {
    Header,
    Footer,
    ContactForm
  },
  data () {
    return {
      toggle: false
    }
  }
};
</script>

<style lang="scss">
@font-face {
  display: swap;
  font-family: "Gotham";
  src: local("Gotham"), url(./assets/fonts/GothamPro.woff) format("woff"),
    url(./assets/fonts/GothamPro.woff2) format("woff2");
}
@font-face {
  display: swap;
  font-family: "GothamBold";
  src: local("Gotham"), url(./assets/fonts/GothamPro-Bold.woff) format("woff"),
    url(./assets/fonts/GothamPro-Bold.woff2) format("woff2");
}
@font-face {
  display: swap;
  font-family: "GothamLight";
  src: local("Gotham"), url(./assets/fonts/GothamPro-Light.woff) format("woff"),
    url(./assets/fonts/GothamPro-Light.woff2) format("woff2");
}
@font-face {
  display: swap;
  font-family: "GothamItal";
  src: local("Gotham"), url(./assets/fonts/GothamPro-Italic.woff) format("woff"),
    url(./assets/fonts/GothamPro-Italic.woff2) format("woff2");
}

$fa-font-path: "~@fortawesome/fontawesome-free/webfonts";
@import "~@fortawesome/fontawesome-free/scss/fontawesome";
@import "~@fortawesome/fontawesome-free/scss/solid"; // fas
@import "~@fortawesome/fontawesome-free/scss/regular"; // far
@import "~@fortawesome/fontawesome-free/scss/brands"; // fab

$primary: rgb(224, 65, 38);
$secondary: rgb(49, 49, 49);
$light: rgb(190, 190, 190);
$highlight: rgb(255, 255, 255);

$lightOp: rgba(190, 190, 190, 0.7);
$highlightOp: rgba(255, 255, 255, 0.7);


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Hide scrollbar for Chrome, Safari and Opera */
body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  font-size: 1em;
}

h1 {
  font-family: "GothamBold", sans-serif;
  color: $primary;
  margin: 10px 0px;
  font-size: 4em;
}

h2 {
  font-family: "GothamLight", sans-serif;
  color: $secondary;
  font-size: 0.8rem;
  margin: 10px 0px;
}

h3 {
  font-family: "Gotham", sans-serif;
  color: $light;
  font-size: 1.4rem;
  margin: 10px 0px;
}

h4 {
  font-family: "Gotham", sans-serif;
  color: $secondary;
  font-size: 0.8rem;
  margin: 10px 0px;
  letter-spacing: 2px;
}

h5 {
  font-family: "GothamLight", sans-serif;
  color: $primary;
  font-size: 0.8rem;
  margin: 10px 0px;
}

a {
  color: $secondary;
  text-decoration: none;
}

a:hover {
    text-decoration: none;
  }

button a {
  text-decoration: none;
  color: $highlight;
}

p {
  margin: 10px 0px;
  text-align: justify;
  font-size: 0.8rem;
  line-height: 1.4em;
  font-weight: 600;
}

.orangeText {
  color: $primary;
}

.container {
  width: 100%;
  min-height: calc(100vh - 70px);
  background-image: linear-gradient(to bottom right, $highlightOp, $lightOp, $highlightOp),
  url("./assets/imgs/bg.jpg");
  background-size: cover;
  background-attachment: fixed;
  padding: 20px 20px 20px 20px;
}

.cta-button {
  font-family: "GothamBold", sans-serif;
  font-size: 1.5rem;
  background-color: $primary;
  color: $highlight;
  width: 100%;
  height: 50px;
  border-radius: 6px;
  border: 0;
  box-shadow: 0px 2px 6px $secondary;
  margin: 10px 0px;
  cursor: pointer;
  max-width: 500px;
}

.cta-button:focus, .cta-button:focus-within {
  outline: none;
}

#app {
  font-family: "Gotham", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $secondary;
  font-size: 16px;
}

.bm-burger-bars {
  background-color: $light;
}

.bm-burger-button:hover {
  background-color: $primary;
}

.bm-burger-button {
  top: 20px;
  right: 20px !important;
  margin: 0;
  padding: 0;
  width: 22px;
  height: 16px;
}

.bm-menu {
  background-color: $secondary;
}

.cross-style {
  top: 4px;
  right: 4px !important;
}

</style>
