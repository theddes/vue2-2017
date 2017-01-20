<template>
    <section id="about" class="page">
        <p>About page</p>
        <p>
            <router-link to="/" tag="button">Go back home</router-link>
        </p>
    </section>
</template>

<script>
    import TimelineMax from 'gsap'

    export default {
        name: 'About',
        mounted () {
            const timeline = new TimelineMax({ paused: true })
        }
    }
</script>
