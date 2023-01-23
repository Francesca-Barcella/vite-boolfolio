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
    <!-- BANNER -->
    <AppBanner></AppBanner>
    <!-- MAIN -->
    <AppMain></AppMain>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
