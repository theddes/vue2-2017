<template>
    <section id="home" class="page">
        <counter></counter>
    </section>
</template>

<script>
    import Counter from 'components/Counter'

    export default {
        name: 'Home',
        components: {
            Counter
        }
    }
</script>
