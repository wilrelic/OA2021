<template>
    <div class="search-wrapper">
        <div class="button-wrap">
            <input type="text" placeholder="Search here..." v-model="searchInput" />
            <button class="cta-button"><i class="fa fa-search fa-1x" id="search-icon" aria-hidden="true"></i></button>
        </div>
        <select v-model="filter">
            <option disabled value="">Sort by...</option>
            <option v-for="filter in filters" :key="filter" :value="filter" @change="getFilterType()">{{ filter }}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'Search',
    data() {
        return {
            searchInput: '',
            filters: [
                'Alphabetical',
                'By Price (Low to High)',
                'By Price (High to Low)',
            ],
            filter: '',
        }
    },
    methods: {
        
    }
}
</script>

<style scoped lang="scss">
    $primary: rgb(224, 65, 38);
    $secondary: rgb(49, 49, 49);
    $light: rgb(190, 190, 190);
    $highlight: rgb(255, 255, 255);

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