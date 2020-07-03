<template>
    <v-app>
        <v-app-bar app color="primary darken-1" dark>
            <v-toolbar-title>
                <v-btn to="/" text>
                    <v-icon large>mdi-weight-lifter</v-icon>
                    <h1>Coach</h1>
                </v-btn>
            </v-toolbar-title>

            <v-btn v-if="!this.$store.state.user" to="/today" text>Aujoud'hui</v-btn>

            <v-spacer></v-spacer>

            <v-btn to="/about" text class="mx-2">A propos</v-btn>

            <v-btn to="/login" class="secondary"><span class="mr-2">Connexion</span></v-btn>
        </v-app-bar>

        <v-main class="grey lighten-5">
                <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>

    export default {
        name: 'App',

        components: {},

        data: () => ({
            //
        }),
        created(){
            const activitiesInStore = this.$store.state.activities.activities;
            this.getMyActivitiesFromDB().then((value)=> activitiesInStore.push(value));
            this.$store.dispatch("updateActivities", activitiesInStore);

        },
        methods: {
            async getMyActivitiesFromDB() {
                const url = "http://localhost:3000/activities";
                const activitiesInDB= await this.axios.get(url);
                return activitiesInDB.data;

            }
        },
    };
</script>
<style lang="scss">
    a {
        text-decoration: none;
    }
</style>
