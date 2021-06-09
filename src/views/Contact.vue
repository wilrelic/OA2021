<template>
    <div class="container">
        <div class="contact-wrapper">
            <h1>Contact Us.</h1>
            <div class="contact-flex">
                <div class="contact-left">
                    <p>
                        Whether you are looking to book a test drive, enquire about finance or looking to sell your car - don't hesitate to give us a call or send us a message and someone will get back to you as soon as possible.
                    <p style="font-size: larger">Telephone</p>
                    <p>
                        Rockingham Yard: <a href="tel:+61895284300">(08) 9528 4300</a><br />
                        Mandurah Yard: <a href="tel:+61895205255">(08) 9520 5255</a><br />
                    </p>
                    <p style="font-size: larger">Email</p>
                    <p>  
                        <a href="mailto:reception@drivenautogroup.com.au">reception@orangeautos.com.au</a>
                    </p>
                    <p style="font-size: larger">Post</p>
                    <p>
                        Head Office: <a href="https://www.google.com/maps/place/4+Ambrose+St,+Rockingham+WA+6168/@-32.2766614,115.744047,17z/data=!3m1!4b1!4m5!3m4!1s0x2a329cad5320c3e7:0x7cff021b1282d359!8m2!3d-32.276666!4d115.7462357">4 Ambrose Street, Rockingham WA 6168</a>
                    </p>
                </div>
                <div class="contact-right">
                    <ContactForm />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue"
export default {
    name: 'Contact',
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
    a {
        color: #e04126;
    }

    .contact-wrapper {
        margin: 0 auto;        
        margin-top: 120px;
        max-width: 960px;
    }

    .contact-flex {
        display: flex;
        gap: 20px;
        margin: 0 auto;
    }

    .contact-left {
        min-width: 60%;
    }

    .contact-right {
        min-width: 300px;
    }

    #tel-title {
        text-align: left;
    }

    @media screen and (max-width: 960px) {
        .contact-flex {
            flex-direction: column;
        }
    }
</style>