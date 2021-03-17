<template>
  <div class="card-wrapper">
    <div class="card-header">
        <router-link :to="{name: 'VehiclePage', params: {carMake: car.Make, carModel: car.Model, stockNumber: car.StockNumber},}">
            <span class="card-title">
                {{ car.Year }}
                {{ car.Make }}<br/>
                {{ car.Model }}
            </span>
        </router-link>
        <span class="card-price">{{ car.Price | currency('$', 0) }}</span>
    </div>
    <div class="hero-image">
        <router-link :to="{name: 'VehiclePage', params: {carMake: car.Make, carModel: car.Model, stockNumber: car.StockNumber},}">
            <img :src="'/stock/images/' + car.StockNumber + '_1.jpg'" width="100%" />
        </router-link>
    </div>
    <div class="card-bullet-wrapper">
        <dl class="bullets">
            <dt><strong>Color:</strong></dt> 
            <dd>{{ car.Color }}</dd>
            <dt><strong>Trans:</strong></dt>
            <dd>{{ car.GearType}}</dd>
            <dt><strong>KMs:</strong></dt>
            <dd>{{ addCommas(car.Odometer) }}</dd>
            <dt><strong>Fuel Type:</strong></dt>
            <dd>{{ car.FuelType }}</dd>
            <dt><strong>Cyl:</strong></dt>
            <dd>{{ car.Cylinders }}</dd>
            <dt><strong>Body:</strong></dt>
            <dd>{{ car.Body }}</dd>
        </dl>
    </div>
    <div class="read-more">
        <router-link :to="{name: 'VehiclePage', params: {carMake: car.Make, carModel: car.Model, stockNumber: car.StockNumber},}">
            <button class="cta-button">
                Read More >>
            </button>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: "VehicleCard",
    props: ['car'],
    methods: {
        addCommas(nStr){
            nStr;
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
        max-width: 400px;
        background: rgba($color: #000000, $alpha: .6);
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
        text-shadow: 1px 1px $secondary;
    }

    .card-price {
        font-size: 1.5em;
        font-weight: 600;
        padding-bottom: 10px;
        text-shadow: 1px 1px $secondary;
    }

    img {
        width: 100%;
        border-radius: 4px;
        border: 1px solid $primary;
        box-shadow: 0px 0px 1px $secondary;
    }

    .card-bullet-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    dl.bullets {
        float: left;
        width: 100%;
        margin: 1em 0;
        padding: 0;
        border-bottom: 1px solid #999;
    }

    .bullets dt {
        clear: left;
        float: left;
        width: 40%;
        margin: 0;
        padding: 5px;
        border-top: 1px solid #999;
        font-weight: bold;
        text-align: right;
    }

    .bullets dd {
        float: left;
        width: 60%;
        margin: 0;
        padding: 5px;
        border-top: 1px solid #999;
        text-align: left;
    }

    @media screen and (min-width: 768px) {
        .card-wrapper {
            max-width: 300px;
        }
    }
</style>