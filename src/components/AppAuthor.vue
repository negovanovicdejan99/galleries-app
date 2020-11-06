<template>
  <div>
        <h1>{{author.first_name}} {{author.last_name}}</h1>
        <p>{{author.email}}</p>
        <div class="d-flex justify-content-center">
            <GallerySearch @handleSearchText="setSearchText"/>
        </div>
        <hr>
        <div v-if="!authorGalleries.length">
            <h3>There is no galleries!</h3>
        </div>
        <div v-else>
            <div class="main-wrapper">
                <GalleryCard v-for="(gallery, index) in authorGalleries" :key="index" :gallery="gallery" />
            </div>
            <button class="btn btn-primary" style="marginBottom: 15px" v-if="currentSize <= numberOfGalleries" @click="loadMoreGalleries">Load More</button>
        </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import GalleryCard from './GalleryCard'
import GallerySearch from './GallerySearch'
export default {
    components: {
        GalleryCard,
        GallerySearch
    },
    data() {
        return {
            currentSize: 10,
            searchText: '', 
        }
    },
    methods: {
        ...mapActions([
            'getAuthorGalleries'
        ]),
        loadMoreGalleries() {
            this.currentSize += 10
            this.getAuthorGalleries({'id': this.$route.params.id,'pagination': this.currentSize, 'searchText': this.searchText})
        },
        setSearchText(search) {
                this.searchText = search
                this.getAuthorGalleries({'id': this.$route.params.id,'pagination': this.currentSize, 'searchText': this.searchText})
        }
        
    },
    computed: {
        ...mapGetters([
            'author',
            'authorGalleries',
            'numberOfGalleries'
        ])
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.getAuthorGalleries({'id': vm.$route.params.id, 'pagination':10, 'searchText': ''})
        })
    }
}
</script>

<style scoped>
.main-wrapper {   
  width: 90%;    
  display: flex;    
  flex-wrap: wrap;    
  margin-left: auto;    
  margin-right: auto;
}
</style>