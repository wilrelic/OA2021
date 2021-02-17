<template>
  <div class="card-wrapper">
    <div class="card-header">
        <span class="card-title">
            {{ car.Year }}
            {{ car.Make }}
            {{ car.Model }}
        </span>
        <span class="card-price">${{ addCommas(Math.ceil(car.Price)) }}</span>
    </div>
    <div class="hero-image">
        <img :src="'/stock/images/' + car.StockNumber + '_1.jpg'" width="100%" />
    </div>
    <div class="card-bullet-wrapper">
        <ul class="bullets">
            <li><strong>Color:</strong> {{ car.Color }}</li>
            <li><strong>Trans:</strong> {{ car.GearType}}</li>
            <li><strong>KMs:</strong> {{ car.Odometer }}</li>
            <li><strong>Seats:</strong> {{ car.Seats }}</li>
            <li><strong>Fuel Type:</strong> {{ car.FuelType }}</li>
            <li><strong>Cyl:</strong> {{ car.Cylinders }}</li>
            <li><strong>Body:</strong> {{ car.Body }}</li>
        </ul>
    </div>
    <div class="read-more">
        <button class="cta-button">
            Read More >>
        </button>
    </div>
  </div>
</template>

<script>
export default {
    name: "VehicleCard",
    props: ['car'],
    methods: {
        addCommas(nStr){
            nStr += '';
            var x = nStr.split('.');
            var x1 = x[0];
            var x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
            return x1 + x2;
        }
    }
}
</script>

<style scoped lang="scss">
    $primary: rgb(224, 65, 38);
    $secondary: rgb(49, 49, 49);
    $light: rgb(190, 190, 190);
    $highlight: rgb(255, 255, 255);

    .card-wrapper {
        width: 100%;
        color: $light;
        margin: 0 auto;
        margin-bottom: 10px;
        max-width: 500px;
        background: rgba($color: #000000, $alpha: .5);
        border-radius: 4px;
        box-shadow: 2px 2px 2px grey;
        border: 1px solid $primary;
        padding: 0px 10px;
    }

    .card-title, .card-price {
        display: block;
    }

    .card-title {
        font-size: 1.5em;
        color: $primary;
        padding: 10px;
        font-weight: 600;
    }

    .card-price {
        font-size: 1.5em;
        font-weight: 600;
        padding-bottom: 10px;
    }

    img {
        width: 100%;
        border-radius: 4px;
    }
</style>