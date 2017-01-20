<template>
    <div id="app">
        <transition name="transition-router" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    // main, global, css
    import 'style/main.css'

    export default {
        name: 'Centuria'
    }
</script>
