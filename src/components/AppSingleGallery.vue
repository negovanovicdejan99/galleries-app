<template>
  <div>
    <h1>{{singleGallery.title}}</h1>
    <button class="btn btn-primary" v-if="authUser.id == singleGallery.user.id" @click="handleEditGallery">Edit</button>
    <button class="btn btn-danger" v-if="authUser.id == singleGallery.user.id" @click="handleDeleteGallery">Delete</button>
    
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
    <h3>Comments:</h3>
    <hr>
    <div class="comment-wrapper d-flex justify-content-center">
      <div class="comment" style="width:80%">
        <div class="bg-info d-flex" v-for="(comment, index) in singleGallery.comments" :key="index" style="marginBottom: 15px">
          <div class="p-2 flex-grow-1">
            <p>Author: {{comment.user.first_name}} {{comment.user.last_name}}</p>
            <p>Created at: {{comment.created_at}}</p>
            <p>{{comment.body}}</p>
          </div>
          <div class="p-2">
            <button class="btn btn-danger" v-if="authUser.id == comment.user_id" @click="handleDeleteComment(comment.id)">Delete</button>
          </div>
        </div>
        <div>
          <form @submit.prevent="handleAddComment" v-if="canComment">
            <div class="form-group">
              <label for="addComment">Add comment:</label>
              <textarea class="form-control" id="addComment" rows="2" v-model="comment.body" placeholder="Enter comment..."></textarea>
              <p class="text-danger" v-if="error">{{error.body[0]}}</p>
            </div>
            <button class="btn btn-primary">Add comment</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  data() {
    return {
      comment:{
        body: '',
        post_id: this.$route.params.id
      },
      error: '',
      canComment: true
    }
  },
  methods: {
    ...mapActions([
      'getSingleGallery',
      'getCreateComment',
      'getAuthUser',
      'getDeleteComment',
      'getDeleteGallery'
    ]),
     async handleAddComment() {
      this.error = await this.getCreateComment(this.comment).then(
          this.getSingleGallery(this.$route.params.id)
      )
        if(!this.error) {
          this.canComment = false;
        }
        this.comment.body = "";
    },
    async handleDeleteComment(id) {
      await this.getDeleteComment(id).then(
          this.getSingleGallery(this.$route.params.id)
      )
    },
    handleDeleteGallery() {
      if(confirm('Do you really want to delete?')){
        this.getDeleteGallery(this.$route.params.id)
        this.$router.push('/my-galleries')
      }
    },
    handleEditGallery() {
      this.$router.push(`/edit-gallery/${this.$route.params.id}`)
    }
  },
  computed: {
    ...mapGetters([
      'singleGallery',
      'authUser'
    ]),
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getSingleGallery(vm.$route.params.id)
      vm.getAuthUser()
    })
  }
}
</script>