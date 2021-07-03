<template>
    <hello-world/>
</template>

<script lang="ts">
    const HelloWorld = () => import('../components/HelloWorld');
    import Vue from "vue";

    export default Vue.extend({
        name: 'Home',

        components: {
            HelloWorld,
        },
    });
</script>
