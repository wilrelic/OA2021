<template>
  <div class="call-wrapper">
      <h2>CALL US NOW</h2>
      <h3>TO BOOK A TEST DRIVE</h3>
      <a href="tel:+61895284300"><button class="cta-button">CALL US (08) 9528 4300</button></a>
  </div>
</template>

<script>
export default {
    name: "CallUs"
}
</script>

<style scoped lang="scss">

    $primary: rgb(224, 65, 38);
    $secondary: rgb(49, 49, 49);
    $light: rgb(190, 190, 190);
    $highlight: rgb(255, 255, 255);

    h2 {
        font-size: 3em;
        color: $secondary;
        font-family: 'GothamBold', sans-serif;
        margin-bottom: 0;
    }

    h3 {
        color: $primary;
        letter-spacing: 3px;
        font-family: 'GothamBold',sans-serif;
        margin: 0;
    }

    @media screen and (min-width: 500px) {
        
    }
</style>