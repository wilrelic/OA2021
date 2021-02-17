<template>
  <div class="latest">
    <h3>LATEST VEHICLES</h3>
    <h5>Check out what's hot in stock this week:</h5>
    
    <carousel :perPage="1" :autoplay="true" :autoplayHoverPause="true">
      <slide v-for="car in cars" :key="car.StockNumber">
        <img :src="'/stock/images/' + car.StockNumber + '_1.jpg'" width="100%" />
      </slide>
    </carousel>

  </div>
</template>

<script>
export default {
  name: "Latest",
  data() {
    return {
      cars: []
    }
  },
  created: function() {

    fetch('stock/TestCSVFeed.csv')
    .then(response => response.text())
    .then(data => this.$papa.parse(data.trim(), {header: true}))
    .then(parsedData => {
      this.cars = parsedData.data    
    })
  }
};

    
</script>

<style scoped lang="scss">
$primary: rgb(224, 65, 38);
$secondary: rgb(49, 49, 49);
$light: rgb(190, 190, 190);
$highlight: rgb(255, 255, 255);

.latest {
  background-color: $secondary;
  padding: 10px 20px 20px 20px;
  text-align: left;
  border-radius: 4px;
  max-width: 500px;
  grid-area: latest;
  margin: 0 auto;
  margin-top: 20px;
  box-shadow: 2px 2px 2px grey;
}

.latest img {
  border-radius: 4px;
  box-shadow: 2px 2px 2px #000;
}

@media screen and (min-width: 960px) {
  .latest {
    margin-top: 0;
    max-width: 400px; 
  }
}
</style>
