<script>
//import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

export default {
    components: {

    },
    data() {
        return {
            projects: null,
            base_api_url: 'http://localhost:8000',
            loading: true,
            error: null,
            max: 100
        }
    },
    methods: {
        getProjects(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response.data.results);
                    this.projects = response.data.results;
                    this.loading = false
                })
                .catch(error => {
                    console.error(error.message);
                    this.error = error.message;
                    this.loading = false
                })
        },

        getImagePath(path) {
            console.log(path);
            if (path) {
                return this.base_api_url + '/storage/' + path
            }
            return '/img/placeholder.jpg'
        },

        /**
         * 
         * @param {string} text 
         */
        trimDescription(text) {
            // se il testo c'è, entra nel secondo if (riga 50) altrimenti se il testo non c'è va al return finale (riga 55)
            if (text) {
                // se è maggiore di max (100) rimane in questo if 
                if (text.length > this.max) {
                    //e fa il return del testo trimmato
                    return text.slice(0, this.max)
                }
            }
            //se il testo non c'è al primo if viene qui e stampa il return del testo vuoto
            //se il testo è più corto di max (100) fa il return di tutto il testo
            return text
        }

    },
    mounted() {
        this.getProjects(this.base_api_url + '/api/projects');
    }
}
</script>




<template>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="{{url('/')}}">Navbar</a>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"
                aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mainNav">
                <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" href="{{ url('/') }}" aria-current="page">Home
                            <span class="visually-hidden">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contacts</a>
                    </li>
                </ul>

            </div>
        </div>
    </nav>


    <section class="vue-home">
        <div class="container">
            <h1>Projects</h1>
            <div v-if="!loading" class="row row-cols-1 row-cols-sm-3 g-4">
                <div class="col" v-for="project in projects.data">
                    <div class="card">
                        <img class="card-image" :src="getImagePath(project.cover_image)" alt="">
                        <div class="card-body">
                            <h4>{{ project.title }}</h4>
                            <p>{{ trimDescription(project.description) }}</p>
                            <a href="">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>LOADING...</div>
        </div>
    </section>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
