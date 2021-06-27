<template>
    <div id="app">
        <component :is="layout" />
    </div>
</template>

<script>
    import DefaultLayout from "./layouts/DefaultLayout";

    export default {
        name: "App",

        computed: {
            layout() {
                return DefaultLayout;
            }
        }
    };
</script>
