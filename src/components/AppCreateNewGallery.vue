<template>
    <div>
        <h1>Create new gallery:</h1>
        <hr>
        <div class="d-flex justify-content-center">
            <form @submit.prevent="handleCreateNewGallerySubmit" style="width: 80%">
                <div class="form-group">
                    <label for="title">Title:</label>
                    <input type="text" class="form-control" id="title" placeholder="Enter title..." v-model="gallery.title">
                    <p v-if="errors.title" class="text-danger">{{errors.title[0]}}</p>
                </div>
                <div class="form-group">
                    <label for="description">Description:</label>
                    <input type="text" class="form-control" id="description" placeholder="Enter description..." v-model="gallery.decription">
                    <p v-if="errors.description" class="text-danger">{{errors.description[0]}}</p>
                </div>
                <div v-for="(image, index) in gallery.images" :key="index" class="form-group">
                    <p>Image Url:</p>
                    <div clas="d-flex bd-highlight">
                        <div>
                            <input type="url" class="form-control" style="marginBottom: 10px" id="imageUrl" placeholder="Enter imageUrl..." v-model="gallery.images[index].url">
                            
                            <button type="button" class="btn btn-secondary" @click="handleMoveInput(index, -1)">Move up</button>
                            <button type="button" class="btn btn-secondary" @click="handleMoveInput(index, 1)">Move down</button>
                            
                            <button type="button" class="btn btn-danger" @click="deleteInput(index)">Delete</button>
                        </div>
                    </div>
                </div>
                <div class="input-button">
                <button class="btn btn-secondary" type="button" @click="addAnotherUrlInput">Add another URL</button>
                <p v-if="errors.images" class="text-danger">{{errors.first_name[0]}}</p>
                </div>
                <button class="btn btn-primary">Create</button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
     data() {
        return {
            gallery: {
                title: '',
                description: '',
                images: [ { url: ''} ]
            },
            errors: []
        }
    },
    methods: {
        ...mapActions([
            'getCreateNewGallery'
        ]),
        async handleCreateNewGallerySubmit() {
            this.errors = await this.getCreateNewGallery(this.gallery);
            if(!this.errors) {
                this.$router.push('/')
            }
        },
        addAnotherUrlInput() {
            this.gallery.images.push({url: ''})
        },
        handleMoveInput(index, direction) {
            if(index + direction > -1 && index + direction < this.gallery.images.length){
                const newInput = this.gallery.images[index]
                this.gallery.images.splice(index, 1)
                this.gallery.images.splice(index + direction, 0, newInput)
            }
        },
        deleteInput(index) {
            if(this.gallery.images.length > 1) {
            this.gallery.images.splice(index, 1)
            }
        }
    }
}
</script>

<style scoped>
.input-button{
    margin-bottom: 15px;
}
</style>
