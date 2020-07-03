<template>
    <v-card class="pa-2">
        <v-card-title>
            Historique de mes activités
        </v-card-title>
        <v-card-text>
            <Loading v-if="loading" />

            <v-data-table
                    :headers="headers"
                    :items="activities"
                    item-key="id"
                    sort-by="date"

                    class="elevation-1"
            ></v-data-table>



        </v-card-text>
    </v-card>
</template>

<script>
    import Loading from "./Loading";

    export default {
        components: {Loading},

        data: () => ({
            loading:false,
            headers: [
                { text: 'Date', align: 'start', value: 'date',},
                { text: 'Activité', align: 'start', value: 'type',},
                { text: 'Durée', value: 'time', align: 'center' },
                { text: 'Intensité', value: 'intensity', align: 'center' },
                { text: 'Action', value: 'action', align: 'center' },
            ],
        }),
        computed: {
            activities() {
                return this.$store.state.activities.activities[0]
            },
        },

        methods: {},
    }
</script>
