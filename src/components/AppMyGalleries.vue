<template>
  <div>
        <h1>{{authUser.first_name}} {{authUser.last_name}}</h1>
        <p>{{authUser.email}}</p>
        <div class="d-flex justify-content-center">
            <GallerySearch @handleSearchText="setSearchText"/>
        </div>
        <hr>
        <div v-if="!authUserGalleries.length">
            <h3>There is no galleries!</h3>
        </div>
        <div v-else>
            <div class="main-wrapper">
                <GalleryCard v-for="(gallery, index) in authUserGalleries" :key="index" :gallery="gallery" />
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
            'getAuthUserGalleries'
        ]),
        loadMoreGalleries() {
            this.currentSize += 10
            this.getAuthUserGalleries({'pagination': this.currentSize, 'searchText': this.searchText})
        },
        setSearchText(search) {
                this.searchText = search
                this.getAuthUserGalleries({'pagination': this.currentSize, 'searchText': this.searchText})
        }
    },
    computed: {
        ...mapGetters([
            'authUserGalleries',
            'authUser',
            'numberOfGalleries',
        ])
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.getAuthUserGalleries({'pagination':10, 'searchText': ''})
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