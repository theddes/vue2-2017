<template>
    <div class="counter-wrapper">
        <div class="counter">
            {{ count }}
        </div>
        <button class="test" @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
        <button @click="incrementAsync">Increment Async</button>
        <p v-if="much_count">
            much count wow
        </p>
        <p v-else-if="little_count">
            so little count
        </p>
        <p v-else>
            try to count! Maybe more than 10, or less than -10?
        </p>
    </div>
</template>

<script>
    import { mapActions, mapMutations, mapGetters } from 'vuex'

    export default {
        computed: {
            count () {
                return this.$store.state.count
            },
            ...mapGetters([
                'much_count', 'little_count'
            ])
        },
        methods: {
            ...mapActions([
                'incrementAsync'
            ]),
            ...mapMutations([
                'increment',
                'decrement'
            ])
        }
    }
</script>
