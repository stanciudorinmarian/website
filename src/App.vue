<template>
    <div id="app">
        <component :is="layout" />
    </div>
</template>

<script>
    const DefaultLayout = () => import('./layouts/DefaultLayout');

    export default {
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
    };
</script>
