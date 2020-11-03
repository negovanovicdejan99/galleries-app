<template>
    <div>
        <div class="card">
            <h3 class="card-title"><router-link class="text-dark" :to="{ path: `/galleries/${gallery.id}`}">{{gallery.title}}</router-link></h3>
             <img class="card-img" :src="gallery.gallery_images[0].imageUrl" alt="Card image cap">
              <p class="card-text">Author: {{gallery.user.name}}</p>
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
.card {
    height: auto;
    margin-bottom: 25px;
    border-color: black;
    display: flex;
    align-items: center;
}
.card-img {
    height: 500px;
    width: 90%;
}

</style>