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
         ********************************************/
        //console.log(this.$route.params.slug);
        const url = this.base_api_url + '/api/projects/' + this.$route.params.slug
        console.log(url);
        axios
            .get(url)
            .then(response => {
                if (response.data.succes) {
                    this.project = response.data.results
                    this.loading = false
                } else {
                    /* 404 */
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
    <div class="container" v-if="project">
        <!-- 
        <h2>{{project.title}}</h2>
        <div class="description">{{project.description}}</div>
        <img :src="base_api_url + '/storage/' + project.cover_image" alt="project.title">
        -->
        <h2>nome progetto</h2>
        <div class="description">descrizione progetto</div>
    </div>
    <div v-else>Sorry, no project here</div>

</template>

<style lang="scss" scoped>

</style>