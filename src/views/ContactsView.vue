<script>
import AppBanner from '../components/AppBanner.vue';

export default {
    name: 'ContactsView',
    components: { AppBanner }
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

        <form action="">
            <!-- NOME -->
            <div class="mb-3">
                <label for="" class="form-label">Nome Cognome</label>
                <input type="text" name="" id="" class="form-control" placeholder="Mario Rossi"
                    aria-describedby="fullNameHelperId">
                <small id="fullNameHelperId" class="text-muted">Add your full name</small>
            </div>
            <!-- MAIL -->
            <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input type="email" name="" id="" class="form-control" placeholder="mario.rossi@example.com"
                    aria-describedby="emailHelperId">
                <small id="emailHelperId" class="text-muted">Add your email address</small>
            </div>
            <!-- TEXT AREA -->
            <div class="mb-3">
                <label for="" class="form-label">Add your Message</label>
                <textarea class="form-control" name="" id="" rows="5"></textarea>
            </div>
            <!-- SUBMIT -->
            <button type="submit" class="btn btn-primary">Contact me</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>

</style>
