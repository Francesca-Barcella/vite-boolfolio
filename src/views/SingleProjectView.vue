<script>
import axios from 'axios'
import AppBanner from '../components/AppBanner.vue'

export default {
    name: 'SingleProjectView',
    components: { AppBanner },

    data() {
        return {
            project: null,
            loading: true,
            base_api_url: 'http://localhost:8000',
        }
    },
    mounted() {
        /******************************************** 
         PROBLEMA!!!
         non funzionano i console log e la chiamata
         SOLUZIONE!!!
         impara a fare i console.log a ritroso per capire in che punto si rompe il codice
         dato che il console.log(response) funzionava perchè in console si vedevano i results del singolo project abbiamo fatto console.log('ERROR') console.log('SUCCESS') per beccare che avevo sscritto succes con un s!!!
         ********************************************/
        //console.log(this.$route.params.slug);
        const url = this.base_api_url + '/api/projects/' + this.$route.params.slug
        console.log(url);
        axios
            .get(url)
            .then(response => {
                if (response.data.success) {
                    // console.log('SUCCESS')
                    this.project = response.data.results
                    this.loading = false
                } else {
                    /* 404 */
                    // console.log('ERROR')
                }
                console.log(response);
            }).catch(error => {
                console.log(error)
            })
    },
}
</script>

<template>
    <AppBanner :title="$route.params.slug"></AppBanner>
    <div class="container" v-if="!loading">

        <h2>{{ project.title }}</h2>
        <div class="description">{{ project.description }}</div>
        <img :src="base_api_url + '/storage/' + project.cover_image" alt="project.title">

        <!-- <h2>nome progetto</h2>
        <div class="description">descrizione progetto</div> -->
    </div>
    <div v-else>Sorry, no project here</div>

</template>

<style lang="scss" scoped>

</style>