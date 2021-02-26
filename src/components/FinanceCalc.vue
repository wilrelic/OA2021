<template>
    <section class="calc-wrapper">
        <h1>{{ title }}</h1>
        <h3>{{ subtitle }}</h3>

        <form id="finCalc">
            <label for="carValue">Value of Car:</label>
            <input id="carValue" name="carValue" type="number" v-model="vehicleValue" placeholder="$"  />
            <label for="term">Length of Term:</label>
            <input id="term" name="term" type="range" v-model="termLength" min="3" max="7" />
            {{ termLength }} years
            <label for="rate">Rate (%):</label>
            <input id="rate" name="rate" type="range" v-model="interest" max="25" min="1" />
            {{ interest }}%
            <button id="btn-fin" class="cta-button" @click.prevent="getEstimate()">Get Estimate...</button>
            <span v-show="estimate" id="finResult">
                Your estimated repayments based on {{ interest }}% rate over {{ termLength }} years would be roughly:<br/>
                <div id="estimate"><strong>$ {{ estimate }} Per Week</strong></div>
            </span>
        </form>
    </section>
</template>

<script>
export default {
    name: 'FinanceCalc',
    data() {
        return {
            title: "Finance Calculator",
            subtitle: "Get your estimation here:",
            vehicleValue: '',
            termLength: '',
            interest: '',
            estimate: ''
        }
    },
    methods: {
        getEstimate() {
            const rate = (this.interest/100);
            const presentValue = parseInt(this.vehicleValue);
            const n = this.termLength*52;
            this.estimate = Math.ceil(presentValue*(rate/52)*Math.pow((1+rate/52), n) / (Math.pow((1+rate/52), n) - 1));
        }
    }
}
</script>

<style lang="scss" scoped>
$primary: rgb(224, 65, 38);
$secondary: rgb(49, 49, 49);
$light: rgb(190, 190, 190);
$highlight: rgb(255, 255, 255);

h1 {
    font-size: xx-large;
}

h3 {
    font-size: large;
}

.calc-wrapper {
    color: $light;
    width: 100%;
    margin: 0 auto;
    max-width: 500px;
    background: rgba($color: #000000, $alpha: .6);
    height: auto;
    margin-top: 20px;
    border-radius: 4px;
    box-shadow: 2px 2px 2px grey;
    border: 1px solid $primary;
    padding: 0px 10px;
    padding-bottom: 20px;
}

#finCalc {
    display: flex;
    flex-direction: column;
}

#carValue {
    font-size: 16px;
    padding: 10px 10px;
    border-radius: 4px;
    color: $light;
    background: rgba($color: #000000, $alpha: .5);
}

#finResult {
    font-size: smaller;
    margin-top: 10px;
}

#estimate {
    margin-top: 10px;
    font-size: xx-large;
    color: $primary;
    text-shadow: 2px 2px 2px rgb(36, 36, 36);
}

input {
    border: 1px solid transparent;
}

input:focus, input:focus-within {
    outline: none;
    border: 1px solid $primary;
    border-radius: 4px;
}

label {
    margin: 20px 0px 10px 0px;
    text-align: left;
}

label:first-child {
    margin-top: 10px;
}

#btn-fin {
    margin-top: 20px;
}

#btn-fin:focus, #btn-fin:focus-within {
    outline: none;
}




</style>