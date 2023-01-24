<script>
import axios from 'axios';

export default {
    name: 'SingleProjectView',
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
                if(response.data.succes){
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
    <div class="container">
        <h1>{{ $route.params.slug }}</h1>
    </div>
</template>

<style lang="scss" scoped>

</style>