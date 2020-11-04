<template>
    <div>
        <h1>Login</h1>
        <hr>
        <div class="d-flex justify-content-center">
            <form @submit.prevent="handleLoginSubmit" style="width: 80%">
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email..." v-model="user.email" required>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter password..." v-model="user.password" required>
                    <p class="text-danger" v-if="error">{{error}}</p>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data() {
        return {
            user: {
                email: '',
                password: ''
            },
            error: ''
        }
    },
    methods: {
        ...mapActions([
            'loginUser'
        ]),
        async handleLoginSubmit() {
            this.error = await this.loginUser(this.user);
            if(!this.error){
                this.$router.push('/');
            }
        }
    }
}
</script>