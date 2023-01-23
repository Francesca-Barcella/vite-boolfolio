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
            error: null
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
                        <img class="card-image" src="" alt="">
                        <div class="card-body">
                            <h4>{{ project.title }}</h4>
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
