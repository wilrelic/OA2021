<template>
    <div class="container">
        <h1>CONTACT US</h1>
        <h3>Have any questions? Feel free to get in touch and someone will get back to you as soon as possible.</h3>
        <form class="contact-form" @submit.prevent="sendEmail">
            <label>Name</label>
            <input type="text" name="user_name" v-model="custName" autocomplete="off">
            <label>Email</label>
            <input type="email" name="user_email" v-model="custEmail" autocomplete="off">
            <label>Message</label>
            <textarea name="message" v-model="custMessage" autocomplete="off"></textarea>
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
</script>

<style scoped lang="scss">
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

    .container {
        color: $light;
        width: 100%;
        margin: 0 auto;
        max-width: 500px;
        background: rgba($color: #000000, $alpha: .5);
        height: auto;
        margin-top: 20px;
        border-radius: 4px;
        box-shadow: 2px 2px 2px grey;
        border: 1px solid $primary;
        padding: 0px 10px;
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