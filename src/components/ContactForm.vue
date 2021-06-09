<template>
    <div class="form-container">
        <span class="contact-title">Send us a message...</span>
        <form class="contact-form" @submit.prevent="sendEmail">
            <label>Name</label>
            <input type="text" name="user_name" v-model="custName" autocomplete="off" placeholder="Your full name">
            <label>Email</label>
            <input type="email" name="user_email" v-model="custEmail" autocomplete="off" placeholder="Your email address">
            <label>Message</label>
            <textarea name="message" v-model="custMessage" autocomplete="off" placeholder="Write us a message and someone will get back to you as soon as possible..."></textarea>
            <button class="cta-button" id="btn-fin">
                <span id="sendText">Send</span>
                <span id="thanksText">Thankyou!</span>
                <span class="spin"><Spinner /></span>
            </button>
        </form>       
    </div>
</template>

<script>
import emailjs from 'emailjs-com';
import Spinner from 'vue-simple-spinner';
export default {
    name: 'Contact',
    data() {
        return {
            custName: '',
            custEmail: '',
            custMessage: '',
        }
    },
    components: {
        Spinner,
    },
    methods: {
        sendEmail: (e) => {
            if (this.$data.custName == '' || this.$data.custEmail == '' || this.custMessage == '') {
                console.log('Nope Nope Nope');
                return alert('Please Enter Valid Details and Try Again');
            } else {
                document.querySelector('#sendText').style.display="none";
                document.querySelector('.spin').style.display="flex";
                emailjs.sendForm('oa_form_mail', 'OA_Template', e.target, 'user_FspPAaPOMGXLWrCTunqwL')
                .then((result) => {
                    console.log('SUCCESS!', result.status, result.text);
                    document.querySelector('#thanksText').style.display="flex";
                    document.querySelector('.spin').style.display="none";

                }, (error) => {
                    console.log('FAILED...', error);
                });
            }
        }    
    }
}
</script>

<style scoped lang="scss">
    $primary: rgb(224, 65, 38);
    $secondary: rgb(49, 49, 49);
    $light: rgb(190, 190, 190);
    $highlight: rgb(255, 255, 255);

    h1 {
        font-size: large;
    }

    h3 {
        font-size: smaller;
    }

    .spin {
        display: none;
        justify-content: center;
        align-items: center;
    }

    #thanksText {
        display: none;
        justify-content: center;
        align-items: center;
    }

    .contact-title {
        font-size: x-large;
        font-weight: 600;
        color: $light;
    }

    .form-container {
        margin: 0 auto;
        max-width: 400px;
        color: $light;
        background: rgba($color: #000000, $alpha: .7);
        border-radius: 8px;
        box-shadow: 2px 2px 2px grey;
        border: 2px solid $primary;
        padding: 10px 10px;
    }

    .contact-form {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    input, textarea {
        font-size: 16px;
        padding: 10px 10px;
        border-radius: 4px;
        color: $light;
        background: rgba($color: #000000, $alpha: .5);
        border: 1px solid $light;
    }

    input:focus, input:focus-within, textarea:focus, textarea:focus-within {
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

    textarea {
        height: 100px;
        resize: none;
    }

    #btn-fin {
        margin-top: 20px;
    }

    #btn-fin:focus, #btn-fin:focus-within {
        outline: none;
    }
</style>