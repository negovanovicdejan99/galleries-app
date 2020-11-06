<template>
    <div>
        <div class="d-flex justify-content-center">
            <GallerySearch @handleSearchText="setSearchText"/>
        </div>
        <h1>All Galleries:</h1>
        <hr>
        <div v-if="!galleries.length">
            <h3>There is no galleries!</h3>
        </div>
        <div v-else>
            <div class="main-wrapper">
                <GalleryCard v-for="gallery in galleries" :key="gallery.id" :gallery="gallery" />
            </div>
            <button class="btn btn-primary" style="marginBottom: 15px" v-if="currentSize <= numberOfGalleries" @click="loadMoreGalleries">Load More</button>
        </div>
    </div>
</template>

<script>
import GallerySearch from './GallerySearch'
import GalleryCard from './GalleryCard'
import {mapActions, mapGetters} from 'vuex'

export default {
    components: {
        GalleryCard,
        GallerySearch
    },
    data() {
        return {
            currentSize: 10,
            searchText: ''
        }
    },
    computed: {
        ...mapGetters([
            'galleries',
            'numberOfGalleries'
        ]),
    },
    methods: {
        ...mapActions([
            'getGalleries'
        ]),
        loadMoreGalleries() {
            this.currentSize += 10
            this.getGalleries({'pagination': this.currentSize, 'searchText': this.searchText})
        },
        setSearchText(search) {
            this.searchText = search
            this.getGalleries({'pagination': this.currentSize, 'searchText': this.searchText})
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.getGalleries({'pagination':10, 'searchText': ''});
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