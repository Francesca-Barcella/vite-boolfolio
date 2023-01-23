
<script>
import axios from 'axios'

export default {
    name: 'AppMain',
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
        },
        prevPage(url) {
            console.log(url);
            this.getProjects(url)
        },
        nextPage(url) {
            console.log(url);
            this.getProjects(url)
        }

    },
    mounted() {
        this.getProjects(this.base_api_url + '/api/projects');
    }
}
</script>

<template>
    <section class="vue-home py-4">
        <div class="container">
            <template v-if="!loading">
                <!-- PROJECT -->
                <div class="row row-cols-1 row-cols-sm-3 g-4">
                    <div class="col" v-for="project in projects.data">
                        <div class="card">
                            <img class="card-image" :src="getImagePath(project.cover_image)" alt="">
                            <div class="card-body">
                                <h4>{{ project.title }}</h4>
                                <p>{{ trimDescription(project.description) }}</p>
                                <a href="">Read more</a>
                            </div>
                            <div class="card-footer text-muted">
                                <div class="type">
                                    <strong>Type: </strong>
                                    <span v-if="project.type"> {{ project.type.name }}</span>
                                    <span v-else> No type selected</span>
                                </div>
                                <div class="technology">
                                    <strong>Technology: </strong>
                                    <!-- le technologies sono un array vuoto quindi per far stampare in caso di no technologies devo verificare la lunghezza della technology > 0-->
                                    <template v-if="project.technologies.length > 0">
                                        <span v-for="technology in project.technologies">
                                            #{{ technology.name }}
                                        </span>
                                    </template>
                                    <template v-else>
                                        <span> No technologies selected</span>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- NAVBAR PREV & NEXT -->
                <nav aria-label="Page navigation" class="mt-3 d-flex justify-content-center">
                    <ul class="pagination">
                        <!-- pagina precedente -->
                        <li class="page-item" v-if="projects.prev_page_url" @click="prevPage(projects.prev_page_url)">
                            <a class="page-link" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <!-- pagina corrente -->
                        <li class="page-item active" aria-current="page">
                            <a class="page-link">{{ projects.current_page }}</a>
                        </li>
                        <!-- pagina successiva -->
                        <li class="page-item" v-if="projects.next_page_url" @click="nextPage(projects.next_page_url)">
                            <a class="page-link" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </template>
            <div v-else>LOADING...</div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>

