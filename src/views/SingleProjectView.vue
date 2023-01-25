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
                    this.loading = false
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

    <div class="container" v-if="!loading && project">
        <h2>{{ project.title }}</h2>
        <div class="description">{{ project.description }}</div>
        <img :src="base_api_url + '/storage/' + project.cover_image" alt="project.title">
    </div>

    <div class="container" v-else-if="loading">
        <div class="loading">
            Loading
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-hourglass-bottom" viewBox="0 0 16 16">
                <path
                    d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702s.18.149.5.149.5-.15.5-.15v-.7c0-.701.478-1.236 1.011-1.492A3.5 3.5 0 0 0 11.5 3V2h-7z" />
            </svg>
        </div>
    </div>

    <div v-else>No Projects here</div>

</template>

<style lang="scss" scoped>

</style>