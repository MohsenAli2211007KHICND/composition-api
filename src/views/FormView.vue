<template>
    <h1>Form page</h1>
  <form @submit.prevent="handleSubmit"> 
    <label >Name</label>
    <input type="text" v-model="name"><br>
    <label> Email</label>
    <input type="email" v-model="email"><br>
    <label>Password</label>
    <input type="password" v-model="password"><br>
    <button>Submit</button>
  </form>
  <p>my name is {{ name }} and my email address is {{ email }} and i also share my password {{ password }}.</p>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'FormView',
    setup(){
        let name = ref("Mohsen")
        let email = ref("mohsenali@gmail.com")
        let password = ref("Mohsen123")
        const handleSubmit =() =>{
            name.value = "Faiz"
            email.value = "gul"
            password.value = "buleda"
        }
 
        return {name, email, password, handleSubmit}
    }
}
</script>

<style>

</style>