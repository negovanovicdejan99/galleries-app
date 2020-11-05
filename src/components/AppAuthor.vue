<template>
  <div>
        <h1>{{authUserGallery.first_name}} {{authUserGallery.last_name}}</h1>
        <p>{{authUserGallery.email}}</p>
        <hr>
        <div>
        <div class="card-main-wrapper">
            <div class="card-wrapper">
                <div class="card" v-for="(gallery, index) in authUserGallery.galleries" :key="index">
                    <h3 class="card-title"><router-link class="text-dark" :to="{ path: `/galleries/${gallery.id}`}">{{gallery.title}}</router-link></h3>
                    <p class="card-text">Created at: {{gallery.created_at}}</p>
                    <img class="card-img" v-if="gallery.gallery_images[0]" :src="gallery.gallery_images[0].url" alt="Card image cap">
                </div>
            </div>
        </div>
        </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    methods: {
        ...mapActions([
            'getAuthUserGallery'
        ]),
    },
    computed: {
        ...mapGetters([
            'authUserGallery'
        ])
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.getAuthUserGallery(vm.$route.params.id)
        })
    }
}
</script>

<style scoped>
.card-wrapper {   
  width: 90%;    
  display: flex;    
  flex-wrap: wrap;
  margin-left: auto;    
  margin-right: auto;
}
 .card {
    width: 32.5%;
    height: 750px; 
    display: flex;
    align-items: center;
    margin-right: 15px;    
    margin-bottom: 15px;
}
.card-title {
    height: 90px;
}
.card-img {
    height: 500px;
    width: 95%;
    margin-bottom: 15px;
}
.card-text {
    height: 30px;
} 
</style>