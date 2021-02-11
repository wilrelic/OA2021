<template>
    <div class="container">
        <FinanceCalc />
    </div>
</template>

<script>
import FinanceCalc from "@/components/FinanceCalc.vue";
export default {
    name: 'Finance',
    components: {
        FinanceCalc
    }


}
</script>

<style scoped lang="scss">
    $primary: rgb(224, 65, 38);
    $secondary: rgb(49, 49, 49);
    $light: rgb(190, 190, 190);
    $highlight: rgb(255, 255, 255);

    $lightOp: rgba(190, 190, 190, 0.7);
    $highlightOp: rgba(255, 255, 255, 0.7);

    .container {
        height: calc(100vh - 70px);
        background-image: linear-gradient(to bottom right, $highlightOp, $lightOp, $highlightOp),
        url("../assets/imgs/bg.jpg");
        background-size: cover;
        background-attachment: fixed;
        padding: 120px 20px 20px 20px;
    }

</style>