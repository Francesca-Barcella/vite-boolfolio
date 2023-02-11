<script>
import AppBanner from '../components/AppBanner.vue';
import axios from 'axios';
import { state } from '../state';

export default {
    name: 'ContactsView',
    components: { AppBanner },
    data() {
        return {
            state,
            name: '',
            email: '',
            message: '',
            success: false,
            loading: false
        }
    },
    methods: {
        sendForm() {
            //console.log('name', this.name);
            //console.log('email', this.email);
            //console.log('message', this.message);

            this.loading = true;

            const data = {
                name: this.name,
                email: this.email,
                message: this.message,
            }

            axios
                .post(`${this.state.api_base_url}/api/contacts`, data)
                .then((response) => {
                    this.success = response.data.success;

                    console.log(response);

                    //se messaggio inviato correttamente => svuota i campi
                    if (this.success) {
                        this.name = '';
                        this.email = '';
                        this.message = '';
                    }
                    this.loading = false;
                });
        }
    }
}
</script>

<template>
    <AppBanner title="Contacts Page" />
    <div class="container">
        <p class="lead">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam repellendus, recusandae quam ea nihil
            quisquam dolor suscipit explicabo error exercitationem consequatur nulla porro voluptas cumque. Eligendi,
            voluptas! Facere, dolorum modi!
        </p>

        <div v-if="success" class="alert alert-success text-start" role="alert"> Messaggio inviato con successo</div>

        <form @submit.prevent="sendForm()">
            <!-- NOME -->
            <div class="mb-3">
                <label for="name" class="form-label">Nome Cognome</label>
                <input type="text" name="name" id="name" v-model="name" class="form-control" placeholder="Mario Rossi"
                    aria-describedby="fullNameHelperId">
                <small id="fullNameHelperId" class="text-muted">Add your full name</small>
            </div>
            <!-- MAIL -->
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" name="email" id="email" v-model="email" class="form-control"
                    placeholder="mario.rossi@example.com" aria-describedby="emailHelperId">
                <small id="emailHelperId" class="text-muted">Add your email address</small>
            </div>
            <!-- TEXT AREA -->
            <div class="mb-3">
                <label for="message" class="form-label">Add your Message</label>
                <textarea class="form-control" name="message" id="message" v-model="message" rows="5"></textarea>
            </div>
            <!-- SUBMIT -->
            <button type="submit" class="btn btn-primary" :disabled="loading">{{ loading ? 'Sending...' : 'Contact Me'}}</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>

</style>
