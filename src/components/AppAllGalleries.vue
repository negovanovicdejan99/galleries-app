<template>
    <div>
        <h1>All Galleries:</h1>
        <hr>
        <div class="main-wrapper">
            <SingleGalleryCard v-for="gallery in galleries" :key="gallery.id" :gallery="gallery" />
        </div>
    </div>
</template>

<script>
import SingleGalleryCard from './SingleGalleryCard'
import {mapActions, mapGetters} from 'vuex'
export default {
    components: {
        SingleGalleryCard
    },
    computed: {
        ...mapGetters([
            'galleries'
        ]),
    },
    methods: {
        ...mapActions([
            'getGalleries'
        ]),
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.getGalleries();
        })
    }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.main-wrapper {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
}

</style>