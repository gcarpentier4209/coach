<template>
    <v-container>

        <div>
            <h1>Aujourd'hui {{today}}</h1>
        </div>

        <v-row>
            <v-col cols="12" md="8">
                <AddActivityCardComponent/>
            </v-col>
            <v-col cols="6" md="4">
                <v-card class="pa-2">
                    <v-card-title>
                        Message de votre Coach
                    </v-card-title>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" md="8">
                <ListActivitiesCardComponent/>
            </v-col>
            <v-col cols="6" md="4">
                <v-card class="pa-2">
                    <v-card-title>
                        Quel est votre humeur ?
                    </v-card-title>
                </v-card>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
    import AddActivityCardComponent from "../components/AddActivityCardComponent";
    import ListActivitiesCardComponent from "../components/ListActivitiesCardComponent";

    export default {
        components: {AddActivityCardComponent, ListActivitiesCardComponent},
        data() {
            return {
                current_date: new Date()
            }
        },
        computed: {
            today() {
                const date = this.current_date.getDate().toString();
                const month = this.current_date.getMonth().toString();
                const year = this.current_date.getFullYear().toString();
                return date + ' / ' + month + ' / ' + year;
            }
        },

    }
</script>

<style scoped>

</style>
