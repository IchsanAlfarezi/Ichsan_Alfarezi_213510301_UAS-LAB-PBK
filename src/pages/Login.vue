<template>
    <form action="">
        <h3>Login</h3>
        <label>Email : </label>
        <input type="email"  v-model="email" required>
        <label>Password : </label>
        <input type="password"  v-model="password" required>
        <label> Role : </label>
        <select v-model="role">
        <option value="Pembunuh">Sebagai Pembunuh</option>
        <option value="Pencuri">Sebagai Pencuri</option>
        <option value="NPC">Sebagai NPC</option>
        </select>
        <button class="tombol"> Login </button>

    <p>Email {{ email }}</p>
    <p>Password {{ password }}</p>
    <p>role {{ role }}</p>


    </form>

</template>

<script>
export default {
data () {
    return {
        nama : '',
        email : '',
        password : '',
        role : ''
    }
}

}
</script>