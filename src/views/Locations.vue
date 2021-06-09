<template>
  <div class="container">
      <div class="location-wrapper">
        <h1>Our Locations</h1>
        <div class="location">
          <div class="rockingham">
            <h4>ROCKINGHAM WA</h4>
              <a href="https://www.google.com/maps/place/45+Dixon+Rd,+Rockingham+WA+6168/@-32.2761326,115.7512398,17z/data=!3m1!4b1!4m5!3m4!1s0x2a328354c1519b63:0x391085ef6ec658a0!8m2!3d-32.2761372!4d115.7534285" target="_blank">
                <img src="../assets/imgs/rocky.png" />
              </a>
            <p>
              45 Dixon Road
              Rockingham WA
              6168
            </p>
            <p>
              Tel: 
              <a href="tel:+61895284300">(08) 9528 4300</a>
            </p>
          </div>
          <div class="mandurah">
            <h4>MANDURAH WA</h4>
              <a href="https://www.google.com/maps/place/22+Panton+Rd,+Greenfields+WA+6210/@-32.5141139,115.7440563,17z/data=!3m1!4b1!4m5!3m4!1s0x2a327ea35062db29:0x5310488fc8b88215!8m2!3d-32.5141184!4d115.746245" target="_blank">
                <img src="../assets/imgs/mand.png" />
              </a>
            <p>
              22 Panton Road
              Mandurah WA
              6120
            </p>
            <p>
              Tel: 
              <a href="tel:+61895205255">(08) 9520 5255</a>
            </p>
          </div>
        </div>
      </div>
      <CallUs />
  </div>
</template>

<script>
import CallUs from "@/components/CallUs.vue"
export default {
  name: "Location",
  components: {
    CallUs
  }
}
</script>

<style scoped lang="scss">
  a {
    color: #e04126;
  }

  p {
    text-align: center;
  }

  .location-wrapper {
    margin-top: 100px;
  }

  .location {
    display: flex;
    gap: 60px;
    justify-content: center;
    align-items: center;
  }

  img {
    box-shadow: 0px 0px 10px #363636;
    border-radius: 10px;
    max-width: 300px;
  }

  @media screen and (max-width: 960px) {
    .location {
      display: block;
      margin: 0 auto;
    }
  }

</style>