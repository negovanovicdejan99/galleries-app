<template>
    <div>
        <h1>Register</h1>
        <hr>
        <div class="d-flex justify-content-center">
            <form @submit.prevent="handleRegisterSubmit" style="width: 90%">
                <div class="form-group">
                    <label for="first_name">First name:</label>
                    <input type="text" class="form-control" id="first_name" placeholder="Enter first name..." v-model="user.first_name">
                    <p v-if="errors.first_name" class="text-danger">{{errors.first_name[0]}}</p>
                </div>
                 <div class="form-group">
                    <label for="last_name">Last name:</label>
                    <input type="text" class="form-control" id="last_name" placeholder="Enter last name..." v-model="user.last_name">
                    <p v-if="errors.last_name" class="text-danger">{{errors.last_name[0]}}</p>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email..." v-model="user.email">
                    <p v-if="errors.email" class="text-danger">{{errors.email[0]}}</p>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter password..." v-model="user.password">
                    <p v-if="errors.password" class="text-danger">{{errors.password[0]}}</p>
                </div>
                <div class="form-group">
                    <label for="confirmPassword">Confirm password:</label>
                    <input type="password" class="form-control" id="confirmPassword" placeholder="Enter confirmPassword..." v-model="user.password_confirmation">
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="termsAndConditionsCheck" v-model="user.checkbox">
                    <label class="form-check-label" for="termsAndConditionsCheck">I accept terms and conditions</label>
                    <p v-if="errors.checkbox" class="text-danger">{{errors.checkbox[0]}}</p>
                </div>
                <button class="btn btn-primary">Register</button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            user: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                password_confirmation: '',
                checkbox: false
            },
            errors: []
        }
    },
    methods: {
        ...mapActions([
            'registerUser'
        ]),
        async handleRegisterSubmit() {
            this.errors = await this.registerUser(this.user);
            if(!this.errors) {
                this.$router.push('/')
            }
        }
    }
}
</script>