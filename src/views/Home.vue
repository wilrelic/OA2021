<template>
  <div class="container">
    <div class="titles-wrapper"> <!-- PAGE 1 WRAPPER -->
      <div class="titles">
        <h4>{{ locations }}</h4>
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
        <button class="cta-button">
          <router-link to="Inventory">
            <i class="fa fa-search" id="search-icon" aria-hidden="true"></i>SEARCH
          NOW
          </router-link>
        </button>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="content-grid"> 
        <div class="home-copy">
          <p class="snippet">
            <strong><span class="orangeText"><em>ORANGE</em></span> AUTOS is a large,
              family owned and operated, used car dealership located on nearly
              10,000m<sup>2</sup> across 2 great locations in Rockingham &amp;
              Mandurah.
            </strong>
          </p>
          <p>
            As part of the <strong><em>DRIVEN</em> Auto Group</strong> we offer
            all the conveniences of a franchise dealership in a relaxed &amp;
            friendly environment, with friendly sales people, competitive on-site
            finance and the availability of great vehicle protection plans. Each
            of our vehicles receive an in depth 100 point safety inspection and
            service performed by one of our highly trained technicians at our
            Service Centre.
          </p>
          <p>
            We have the availability to access all makes and models across all
            price ranges, whether you are in the market for your first car, a
            beast V8, an off-road monster or the class of a luxury SUV, we have
            you covered!
          </p>
        </div>
        <Latest />
      </div>
    </div>
    <CallUs />
  </div>
</template>

<script>
import Latest from "@/components/Latest.vue";
import CallUs from "@/components/CallUs.vue";

export default {
  name: "Home",
  components: {
    Latest,
    CallUs
  },
  data() {
    return {
      locations: "ROCKINGHAM & MANDURAH",
      title: "USED CARS FOR SALE",
      subtitle: "Find Used Cars, Vans, 4x4s, SUVs & Commercials at incredibly low prices",
      toggle: true
    };
  }
};
</script>

<style lang="scss" scoped>
$primary: rgb(224, 65, 38);
$secondary: rgb(49, 49, 49);
$light: rgb(190, 190, 190);
$highlight: rgb(255, 255, 255);


#search-icon {
  margin: 0px 4px;
}

.home-copy {
  grid-area: home-copy;
}

.titles-wrapper {
  margin-top: 120px;
}

@media screen and (min-width: 960px) {
  .content-grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-areas: "home-copy home-copy latest";
    max-width: 960px;
    margin: 0 auto;
  }

  .home-wrapper {
    padding-top: 0;
  }

  .content-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    width: 100%;
    padding-top: 60px;
  }

  .titles-wrapper {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0;
  }

  .home-copy p {
    font-size: 16px;
    font-family: "Gotham", sans-serif;
    line-height: 20px;
    padding-right: 20px;
  }
}
</style>
