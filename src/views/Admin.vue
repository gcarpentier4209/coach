<template>
    <div>
        <h1>Tableau de bord</h1>

        <v-divider></v-divider>
    </div>
</template>

<script>
    export default {
        name: 'Admin',
        data() {
            return {
                users: []
            }
        },
        async created() {
            // this.loading=true
            const users = await this.axios.get(`${process.env.VUE_APP_API_SERVER}/users`)
            this.orders = users.data
            // this.loading=false
        },
    }
</script>

<style lang="scss" scoped>

</style>
