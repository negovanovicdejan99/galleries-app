<template>
  <div>
    <h1>{{singleGallery.title}}</h1>
    <p class="card-text">Author: <router-link class="text-dark" :to="{ path: `/author/${singleGallery.user.id}`}">{{singleGallery.user.first_name}} {{singleGallery.user.last_name}}</router-link></p>
    <p>Created at: {{singleGallery.created_at}}</p>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="960"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide v-for="(galleryImage, index) in singleGallery.gallery_images" :key="index" :img-src="galleryImage.url"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    methods: {
        ...mapActions([
            'getSingleGallery'
        ]),
    },
    computed: {
        ...mapGetters([
            'singleGallery'
        ])
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.getSingleGallery(vm.$route.params.id)
        })
    }
}
</script>