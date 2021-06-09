<template>
    <div class="container">
        <div class="career-container">
            <h1>Careers at <em>ORANGE</em> <span class="greyTitleText">AUTOS</span></h1>
            <div class="career-grid">
                <div class="career-left">
                    <p>
                        The DRIVEN Auto Group employs staff in a variety of roles including sales representatives, mechanics, technicians, apprentices, administration, marketing and managerial staff.
                    </p>
                    <p>
                        Would you like to have the opportunity to sell some of the world's leading automotive brands in a sales role? Maybe you would like to get your hands dirty under the hood of them instead? Or do you just like telling people what to do? 
                    </p>
                    <p>
                        We have excellent opportunities in many departments including:
                    </p>
                    <ul class="job-list">
                        <li>Used Car Sales</li>
                        <li>Automotive Technicians</li>
                        <li>Service Advisors</li>
                        <li>Parts Personnel</li>
                    </ul>
                    <p>
                        Whether you have experience in the industry, or are at the beginning of your career, we'd love to chat.
                    </p>
                    <p>
                        To find out about our current opportunities, please contact us by sending an enquiry message.
                    </p>
                </div>
                <div class="career-right">
                    <ContactForm />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue"
export default {
    name: 'Careers',
    components: {
        ContactForm
    },
    data () {
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

    $lightOp: rgba(190, 190, 190, 0.7);
    $highlightOp: rgba(255, 255, 255, 0.7);

    .career-grid {
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-width: 960px;
    }

    .career-container {
        margin: 0 auto;
        margin-top: 120px;
    }

    .job-list {
        font-weight: 800;
        list-style-type: none;
        margin-bottom: 10px;
    }

    .job-list li {
        font-size: x-large;
        line-height: 3rem;
    }

    .career-right {
        display: flex;
        align-items: center;
        min-width: 300px;
    }

    .career-left {
        text-align: justify;
        justify-content: center;
        align-items: center;
    }

    .career-left h1, ul {
        text-align: center;
    }

    .greyTitleText {
        color: $secondary;
    }

    @media screen and (min-width: 960px) {
        .career-grid {
            flex-direction: row;
            margin: 0 auto;
            margin-top: 20px;
        }

    }
</style>