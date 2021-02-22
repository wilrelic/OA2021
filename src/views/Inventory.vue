<template>
    <div class="container">
        <div class="search-bar-container">
            <div class="search-wrapper">
            <div class="button-wrap">
                <input type="text" placeholder="Search here..." v-model="searchInput" />
                <button class="cta-button"><i class="fa fa-search fa-1x" id="search-icon" aria-hidden="true"></i></button>
            </div>
            <select>
                <option disabled value="">Sort by Brand...</option>
                <option v-for="car in cars" :key="car.StockNumber" :value="car.Make.value">{{ car.Make }}</option>
            </select>
        </div>
        </div>
        <div class="card-grid">
            <VehicleCard v-for="car in filterBy(cars, this.searchInput)" :key="car.Stocknumber" :car="car" />
        </div>
    </div>
</template>

<script>
import VehicleCard from '@/components/VehicleCard.vue';
import Vue2Filters from 'vue2-filters';
export default {
    name: "Inventory",
    components: {
        VehicleCard,
    },
    mixins: [Vue2Filters.mixin],
    data() {
        return {
            cars: '',
            searchInput: '',
            filter: '',
            car: '',
            makes: ''
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
    },
    methods: {
        getFilterType() {
            console.log(this.filter)
        }
    }
}
</script>

<style scoped lang="scss">
    $primary: rgb(224, 65, 38);
    $secondary: rgb(49, 49, 49);
    $light: rgb(190, 190, 190);
    $highlight: rgb(255, 255, 255);

    .search-bar-container {
        margin-top: 100px;
    }

    .card-grid {
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
    }

    .search-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    input {
        height: 40px;
        border-radius: 4px;
        outline: none;
        border: 1px solid #363636;
        padding: 0px 10px;
        flex: 3;
    }

    option:focus, select:focus, input:focus-within, input:focus {
        border: 1px solid $primary;
    }

    select {
        width: 100%;
        max-width: 400px;
        height: 40px;
        padding: 0px 10px;
        border: 0;
        outline: none;
        background: rgba($color: #363636, $alpha: 1.0);
        color: $primary;
        text-shadow: 1px 1px #363636;
        border-radius: 4px;
    }

    option {
        color: #fff;
    }

    .button-wrap {
        display: flex;
        width: 100%;
        max-width: 400px;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        gap: 6px;
    }

    .cta-button {
        max-width: 400px;
        height: 40px;
        margin: 0;
        flex: 1;
    }
</style>