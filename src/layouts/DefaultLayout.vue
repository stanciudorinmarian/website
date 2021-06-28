<template>
    <v-app>
        <app-navigation-bar />

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
    import AppNavigationBar from "../components/AppNavigationBar/AppNavigationBar";
    export default {
        name: "DefaultLayout",
        components: {AppNavigationBar}
    };
</script>