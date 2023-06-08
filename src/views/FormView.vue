<template>
    <h1>Form page</h1>
  <!-- <form @submit.prevent="handleSubmit"> 
    <label >Name</label>
    <input type="text" v-model="name"><br>
    <label >Age</label>
    <input type="number" v-model="age"><br>
    <label> Email</label>
    <input type="email" v-model="email"><br>
    <label>Password</label>
    <input type="password" v-model="password"><br>
    <button>Submit</button>
  </form>
  <p>my name is {{ name }} my age is {{ age }} and my email address is {{ email }} and i also share my password {{ password }}.</p> -->


    <input type="text" v-model="search">
    <p>Search term-- {{ search }}</p>
    <div v-for="name in filterNames" :key="name">
        <p>{{ name }}</p>
    </div>
</template>

<script>
import { computed, onMounted, onUnmounted, onUpdated, reactive, ref } from 'vue'
export default {
    name: 'FormView',
    setup(){
        // let name = ref("Mohsen")
        // let email = ref("mohsenali@gmail.com")
        // let password = ref("Mohsen123")
        // let age = reactive(22)
        // const handleSubmit =() =>{
        //     name.value = "Faiz"
        //     email.value = "gul"
        //     password.value = "buleda"
        //     age = 34 // can't be update due to using reactive hook
        // }
 
        // return {name, email, password,age, handleSubmit}

        const search = ref('')
        const names = ref(['mohsen', 'faiz', 'usmam', 'meeran', 'sultan', 'waqar', 'shoaib', 'idrees'])
        const filterNames = computed(() => {
            return names.value.filter((name) => name.includes(search.value))
        })
        onMounted(() => console.log('component mounted'))
        onUnmounted(() => console.log('Component unmounted'))
        onUpdated(() => console.log('Component Updated'))
            return {search, names, filterNames}
    }
}
</script>

<style>

</style>