<template>
    <div>
        <h1>All Galleries:</h1>
        <hr>
        <div class="main-wrapper">
            <GalleryCard v-for="gallery in galleries" :key="gallery.id" :gallery="gallery" />
        </div>
        <button class="btn btn-primary" style="marginBottom: 15px" @click="loadMoreGalleries">Load More</button>
    </div>
</template>

<script>
import GalleryCard from './GalleryCard'
import {mapActions, mapGetters} from 'vuex'

export default {
    components: {
        GalleryCard
    },
    data() {
        return {
            pagination : 10,
            currentSize: 10
        }
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
        loadMoreGalleries() {
            this.currentSize += this.pagination
            this.getGalleries(this.currentSize)
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.getGalleries(10);
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
  width: 90%;    
  display: flex;    
  flex-wrap: wrap;    
  margin-left: auto;    
  margin-right: auto;
}

</style>