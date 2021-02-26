<template>
    <div class="container">
        <div class="search-bar-container">
            <div class="text-input-wrap">
                <input type="text" id="search-bar" placeholder="Search here... (eg. Commodore, Ford, V8, 14990 etc.)" v-model="searchInput" />
                <i class="fa fa-search fa-2x" id="search-icon" aria-hidden="true"></i>
            </div>
            <div class="select-wrap">
                <select v-model="filter" @change="filteredCars">
                    <option v-for="filter in filterTypes" :key="filter.ID" :value="filter.ID">{{ filter.type }}</option>
                </select>
            </div>
        </div>
        
        <div class="card-grid">
            <VehicleCard v-for="car in filterBy(filteredCars, searchInput)" :key="car.Stocknumber" :car="car" />
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
            filterTypes: [
                {type: 'Price (Low to High)', ID: 0},
                {type: 'Price (High to Low)', ID: 1},
                {type: 'Make', ID: 2},
                {type: 'Year', ID: 3},
            ],
            filter: 0,
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
    computed: {
        filteredCars() {
                if (this.filter == 0) {
                    return this.orderBy(this.cars, 'Price');
                } else if (this.filter == 1) {
                    return this.orderBy(this.cars, 'Price', -1);
                } else if (this.filter == 2) {
                    return this.orderBy(this.cars, 'Make');
                } else if (this.filter == 3) {
                    return this.orderBy(this.cars, 'Year');
                } else {
                    return this.cars
                }
        },
    }
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
        max-width: 400px;
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
        padding: 0px 40px;
        border-radius: 40px;
        background: rgba($color: #363636, $alpha: 0.3);
        color: $secondary;
        flex: 1;
        max-width: 400px;
        font-size: 1em;
    }

    #search-icon {
        position: absolute;
        left: 6px;
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
        max-width: 400px;
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
        flex: 1;
        font-size: 1em;
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

    .price-toggle:focus {
        border: 1px solid $primary;
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