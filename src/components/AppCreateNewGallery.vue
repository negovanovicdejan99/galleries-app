<template>
    <div>
        <h1>Create new gallery:</h1>
        <hr>
        <div>
            <form @submit.prevent="handleCreateNewGallerySubmit">
                <div class="form-group">
                    <label for="title">Title:</label>
                    <input type="text" class="form-control" id="title" placeholder="Enter title..." required>
                </div>
                <div class="form-group">
                    <label for="description">Description:</label>
                    <input type="text" class="form-control" id="description" placeholder="Enter description...">
                </div>
                <div class="form-group">
                    <p>Image Url:</p>
                <div clas="url-input-wrapper" id="url-input-wrapper">
                        <div>
                            <input type="text" class="form-control" style="marginBottom: 10px" id="imageUrl" placeholder="Enter imageUrl...">
                        </div>
                    </div>
                    <button class="btn btn-secondary" type="button" @click="addAnotherUrlInput">Add another URL</button>
                </div>
                
                <button class="btn btn-primary">Create</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
