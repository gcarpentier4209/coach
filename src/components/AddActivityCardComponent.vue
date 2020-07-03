<template>
    <v-card class="pa-2">
        <v-card-title>
            Ajouter une activité
        </v-card-title>
        <v-card-text>

            <v-select v-model="activity" :items="activitiesList" label="Type d'activité">
            </v-select>

            <v-text-field v-model="time" type="number" label="Durée (min)">

            </v-text-field>

            <v-select v-model="intensity" :items="intensities" label="Intensité">

            </v-select>

            <v-card-actions>
                <v-btn @click="addActivityInDB">
                    Ajouter
                </v-btn>
            </v-card-actions>


        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: 'HelloWorld',

        data: () => ({
            activitiesList: ["Pompes", "Squat"],
            activity: "",
            intensities: ["Faible", "Moyenne", "Forte"],
            intensity: "",
            time: 0,
        }),
        computed: {},
        methods: {
            async addActivityInDB() {
                const url = "http://localhost:3000/activities"
                const newActivity = {
                    user_id: null,
                    type: this.activity,
                    intensity: this.intensity,
                    time: this.time,
                    date: new Date
                };
                try {
                    await this.axios.post(url, newActivity);
                } catch {
                    alert("Il y a eu une erreur lors de l'ajout de votre activité. Veuillez nous contacter.")
                }



            }
        },
    }
</script>
