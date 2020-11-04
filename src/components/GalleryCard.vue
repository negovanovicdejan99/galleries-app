<template>
    <div class="card-wrapper" v-if="gallery.gallery_images[0]">
        <div class="card">
            <h3 class="card-title"><router-link class="text-dark" :to="{ path: `/galleries/${gallery.id}`}">{{gallery.title}}</router-link></h3>
             <img class="card-img" :src="gallery.gallery_images[0].url" alt="Card image cap">
              <p class="card-text">Author: <router-link class="text-dark" :to="{ path: `/author/${gallery.user.id}`}">{{gallery.user.name}}</router-link></p>
              <p class="card-text">Created at: {{gallery.created_at}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'gallery'
    ],
}
</script>

<style scoped>
.card-wrapper {
    width: 33.333%;
}
.card {   
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