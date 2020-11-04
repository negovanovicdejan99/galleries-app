<template>
    <div>
        <h1>Create new gallery:</h1>
        <hr>
        <div class="d-flex justify-content-center">
            <form @submit.prevent="handleCreateNewGallerySubmit" style="width: 80%">
                <div class="form-group">
                    <label for="title">Title:</label>
                    <input type="text" class="form-control" id="title" placeholder="Enter title..." v-model="galleryForm.title" required>
                </div>
                <div class="form-group">
                    <label for="description">Description:</label>
                    <input type="text" class="form-control" id="description" placeholder="Enter description..." v-model="galleryForm.decription">
                </div>
                <div v-for="(image, index) in galleryForm.images" :key="index" class="form-group">
                    <p>Image Url:</p>
                    <div clas="d-flex bd-highlight">
                        <div>
                            <input type="url" class="form-control" style="marginBottom: 10px" id="imageUrl" placeholder="Enter imageUrl..." v-model="galleryForm.images[index].url">
                            
                            <button type="button" class="btn btn-secondary" @click="handleMoveInput(index, -1)">Move up</button>
                            <button type="button" class="btn btn-secondary" @click="handleMoveInput(index, 1)">Move down</button>
                            
                            <button type="button" class="btn btn-danger" @click="deleteInput(index)">Delete</button>
                        </div>
                    </div>
                </div>
                <div class="input-button">
                <button class="btn btn-secondary" type="button" @click="addAnotherUrlInput">Add another URL</button>
                </div>
                <button class="btn btn-primary">Create</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
     data() {
        return {
            galleryForm: {
                title: '',
                description: '',
                images: [ { url: ''} ]
            }
        }
    },
    methods: {
       
        handleCreateNewGallerySubmit() {
            console.log('create')
        },
        addAnotherUrlInput() {
            this.galleryForm.images.push({url: ''})
        },
        handleMoveInput(index, direction) {
            if(index + direction > -1 && index + direction < this.galleryForm.images.length){
                const newInput = this.galleryForm.images[index]
                this.galleryForm.images.splice(index, 1)
                this.galleryForm.images.splice(index + direction, 0, newInput)
            }
        },
        deleteInput(index) {
            this.galleryForm.images.splice(index, 1)
        }
    }
}
</script>

<style scoped>
.url-input-wrapper {

}
.input-button{
    margin-bottom: 15px;
}
</style>
