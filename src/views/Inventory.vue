<template>
    <div class="container">
        <div class="search-bar-container">
            <div class="text-input-wrap">
                <input type="text" placeholder="Search here... (eg. Commodore, Falcon etc.)" v-model="searchInput" />
            </div>
            <div class="select-wrap">
                <select>
                    <option disabled selected :value="null">Sort by...</option>
                    <option v-for="filter in filters" :key="filter.ID" :value="filter.ID">{{ filter.type }}</option>
                </select>
                <button class="price-toggle">
                    <i class="fa fa-sort" aria-hidden="true"></i>
                </button>
            </div>
        </div>
        <div class="card-grid">
            <VehicleCard v-for="car in filterBy(cars, searchInput)" :key="car.Stocknumber" :car="car" />
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
            car: '',
            filters: [
                {type: 'Price', ID: 0},
                {type: 'Make', ID: 1},
                {type: 'Year', ID: 2},
            ],
            filter: '',
            searchInput: '',
        }
    },
    created: function() {

        fetch('stock/TestCSVFeed.csv')
        .then(response => response.text())
        .then(data => this.$papa.parse(data.trim(), {header: true}))
        .then(parsedData => {
        this.cars = parsedData.data
        })

    },
}
</script>

<style scoped lang="scss">
    $primary: rgb(224, 65, 38);
    $secondary: rgb(49, 49, 49);
    $light: rgb(190, 190, 190);
    $highlight: rgb(255, 255, 255);

    .search-bar-container {
        display: flex;
        flex-direction: column;
        margin: auto;
        margin-top: 100px;
    }

    .card-grid {
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
    }

    .text-input-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        position: relative;
    }

    input {
        height: 40px;
        border-radius: 4px;
        outline: none;
        border: 1px solid #363636;
        padding: 0px 10px;
        border-radius: 40px;
        background: rgba($color: #363636, $alpha: 0.3);
        color: $secondary;
        flex: 1;
        max-width: 400px;
        position: relative;
    }

    option:focus, select:focus, input:focus-within, input:focus {
        border: 1px solid $primary;
    }

    .select-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        width: 100%;
    }

    select {
        height: 40px;
        padding: 0px 10px;
        border: 0;
        outline: none;
        background: rgba($color: #363636, $alpha: 1.0);
        color: $primary;
        text-shadow: 1px 1px #363636;
        border-radius: 4px;
        border: 1px solid transparent;
    }

    .price-toggle {
        width: 40px;
        height: 40px;
        border-radius: 4px;
        border: 0;
        outline: none;
        background: rgba($color: #363636, $alpha: 1.0);
        color: $primary;
        text-shadow: 1px 1px #363636;
        cursor: pointer;
    }

    option {
        color: #fff;
    }

    .button-wrap {
        display: flex;
        margin-bottom: 10px;
        position: relative;
        align-items: center;
    }

    .cta-button {
        width: 34px;
        height: 34px;
        margin: 0;
        border-radius: 50%;
        background-color: $light;
        box-shadow: none;
    }

    #inner-search-icon {
        color: $secondary;
    }
</style>