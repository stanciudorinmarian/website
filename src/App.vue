<template>
    <component :is="layout"/>
</template>

<script lang="ts">
    import Vue from 'vue';

    const DefaultLayout = () => import('./layouts/DefaultLayout');

    export default Vue.extend({
        name: "App",

        computed: {
            layout() {
                for (const route of this.$route.matched) {
                    if (route.meta.layout) {
                        return route.meta.layout;
                    }
                }

                return DefaultLayout;
            },
        }
    });
</script>
