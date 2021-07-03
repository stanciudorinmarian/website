<template>
    <v-app>
        <app-navigation-bar/>

        <v-main>
            <router-view/>
        </v-main>
    </v-app>
</template>

<script lang="ts">
    const AppNavigationBar = () => import('../components/AppNavigationBar/AppNavigationBar');
    import Vue from 'vue';

    export default Vue.extend({
        name: "DefaultLayout",
        components: {AppNavigationBar}
    });
</script>