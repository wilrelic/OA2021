<template>
    <div class="container">
        <div class="fin-grid">
            <div class="fin-spiel">
                <h1>Financing with <em>ORANGE</em> <span class="greyTitleText">AUTOS</span></h1>
                <p>At <strong>ORANGE <em>Autos</em></strong> we are dedicated to ensuring that our customers have everything they need to be happy in their new car. This includes making sure that they have the best experience when paying for it. That is why we use <a href="https://www.loansunlimited.com.au/"><strong>Loans Unlimited</strong></a> for all of our Finance needs.</p>
                <p>Loans Unlimited is Perth’s ultimate source for different types of loans, including car, personal, and commercial finance. They are a customer-centric business whose mission is simple: to help their customers find the perfect loan.</p>
                <p>With a combined industry experience of 25 years, they have amassed the necessary knowledge, which they believe is beneficial for their company and their customers.</p>
                <p>They take the time to learn more about lenders and their products. Then, they discover more about you. Armed with the information they need, it allows them to provide you with the top options no matter how unique your situation may be.</p>
                <div class="loans">
                    <a href="https://www.loansunlimited.com.au" target="_blank"><img src="../assets/imgs/loans-unlimited-logo.png" /></a>
                    <p id="loans-spiel">All of our finance options are provided by our on-site broker <strong><a href="https://www.loandsunlimited.com.au" target="_blank">Loans Unlimited.</a></strong></p>
                </div>
            </div>
                
            <div class="fin-calc">
                <FinanceCalc />
            </div>
        </div>
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

    .fin-grid {
        max-width: 960px;
        margin: 0 auto;
        margin-top: 100px;
    }

    .fin-spiel {
        grid-area: text;
    }

    .fin-calc {
        grid-area: calc;
    }

    .greyTitleText {
        color: $secondary;
    }

    p {
        margin-right: 20px;
    }

    .loans {
        display: flex;
        gap: 14px;
        align-items: center;
    }

    img {
        margin-top: 10px;
    }

    @media screen and (min-width: 960px) {
        
        .container {
            height: calc(100vh - 70px);
        }

        .fin-grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            grid-template-areas: "text calc";
        }

        h1 {
            text-align: left;
        }
    }

</style>