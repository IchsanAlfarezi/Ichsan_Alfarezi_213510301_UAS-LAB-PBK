const App = Vue.createApp({
    data() {
        return {
            nama : "Ichsan Alfarezi",
            umur : 19,
            tampilan : true
        }
    },
    methods : {
        ubah() {
            this.nama = 'Rezi'
        },
        rubah(nama) {
            this.nama = nama
        },
        tampilkan() {
            this.tampilan = false
        }, 
        munculkan() {
            this.tampilan = !this.tampilan
        }
    }
})

App.mount('#App')