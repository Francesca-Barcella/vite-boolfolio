<script>
import AppNav from './components/AppNav.vue'
import AppBanner from './components/AppBanner.vue'
import AppMain from './components/AppMain.vue'

export default {
    components: {
        AppNav,
        AppBanner,
        AppMain
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
