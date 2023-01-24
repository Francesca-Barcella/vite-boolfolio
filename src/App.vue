<script>
import AppNav from './components/AppNav.vue'

export default {
    components: {
        AppNav,
    },
}
</script>


<template>
    <!-- NAVBAR -->
    <AppNav></AppNav>

    <router-view></router-view>
    
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
