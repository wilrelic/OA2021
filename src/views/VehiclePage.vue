<template>
    <div class="container">
        <div class="page-card">
            <VehicleCard />
        </div>
    </div>
</template>

<script>
import VehicleCard from "@/components/VehicleCard.vue"
export default {
    name: 'VehiclePage',
    components: {
            VehicleCard
        },
    data() {
        return {
            
        }
    }
}
</script>

<style scoped lang="scss">
    $primary: rgb(224, 65, 38);
    $secondary: rgb(49, 49, 49);
    $light: rgb(190, 190, 190);
    $highlight: rgb(255, 255, 255);
    
    .page-card {
        width: 100%;
        color: $light;
        margin: 0 auto;
        margin-top: 100px;
        margin-bottom: 10px;
        max-width: 1024px;
        background: rgba($color: #000000, $alpha: .6);
        border-radius: 4px;
        box-shadow: 2px 2px 2px grey;
        border: 1px solid $primary;
        padding: 0px 10px;
    }
</style>