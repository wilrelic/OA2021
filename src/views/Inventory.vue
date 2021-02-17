<template>
    <div class="container">
        <div class="card-grid">
            <VehicleCard v-for="car in cars" :key="car.Stocknumber" :car="car" />
        </div>
    </div>
</template>

<script>
import VehicleCard from '@/components/VehicleCard.vue';
export default {
    name: "Inventory",
    components: {
        VehicleCard
    },
    data() {
        return {
            cars: ''
        }
    },
    created: function() {

        fetch('stock/TestCSVFeed.csv')
        .then(response => response.text())
        .then(data => this.$papa.parse(data.trim(), {header: true}))
        .then(parsedData => {
        this.cars = parsedData.data
        console.log(this.cars)
        })
    }
}
</script>

<style scoped lang="scss">
    $primary: rgb(224, 65, 38);
    $secondary: rgb(49, 49, 49);
    $light: rgb(190, 190, 190);
    $highlight: rgb(255, 255, 255);

    .card-grid {
        margin-top: 120px;
    }
</style>