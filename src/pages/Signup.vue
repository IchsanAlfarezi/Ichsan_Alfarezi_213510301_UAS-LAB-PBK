<template>
  <form @submit.prevent="Kelogin">
    <h3>SignUp</h3>
    <label> Nama : </label>
    <input type="nama" v-model="nama" required>
    <label> Email : </label>
    <input type="email" v-model="email" required>
    <label> Password : </label>
    <input type="password" v-model="password" required>
    <label> Role :</label>
    <select v-model="role">
        <option value="mahasiswa">Sebagai Mahasiswa</option>
        <option value="dosen"> Sebagai Dosen</option>
    </select>
    <button class="tombol"> Daftar </button>
  </form>

    <p> nama : {{ nama }}</p>
    <p> email : {{ email }}</p>
    <p> password : {{ password }}</p>
    <p> role : {{ role }}</p>
</template>


<script>
export default {
    data() {
        return{
            nama : '',
            email : '',
            password : '',
        }
    },
    methods: {
        Kelogin(){
            this.$router.push(login)
        }
    }

}
</script>

<style>
form {
        max-width: 420px;
        margin: 30px auto;
        background: orange;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }
    h3 {
        text-align: center;
    }
    label {
        color: black;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.6em ;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }

    input, select {
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555
    }
    .tombol {
        display: block;
        padding: 10px 6px;
        width: 50%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        border-radius: 20px;
        color: rgb(206, 119, 119);
        font-weight: bold;
        margin: 0 auto;
        margin-top: 20px;
        background: white;
    }

</style>


