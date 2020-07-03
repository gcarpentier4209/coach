<template>
    <div>


        <v-container fill-height fluid class="bg-image">
            <v-row align="center" justify="center" class="px-6">
                <h1 class="white--text">Coach sportif en ligne</h1>
            </v-row>
            <v-row justify="center">
                <h2 class="white--text">Sous-titre</h2>
            </v-row>
            <v-row justify="center">
                <v-spacer></v-spacer>
                <v-col align="center" >
                <p class="white--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius mollis
                    lacus ut varius. In
                    dignissim venenatis libero sed sollicitudin. Nam dignissim dictum quam ac porta. Phasellus lacus
                    lacus, pulvinar vitae aliquet vel, dignissim quis leo. Pellentesque sapien sapien, interdum ac ipsum
                    ac, sollicitudin placerat turpis.
                </p>
                </v-col>
                <v-spacer></v-spacer>

            </v-row>
            <v-row justify="center">
                <v-btn to="/subscribe" class="secondary">S'inscrire</v-btn>
            </v-row>

            <v-row align="end" justify="center" class="pa-0 ma-0 black">
                <v-btn text dark>
                    <span>Recent</span>
                    <v-icon>mdi-history</v-icon>
                </v-btn>

                <v-btn text dark>
                    <span>Favorites</span>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn text dark>
                    <span>Nearby</span>
                    <v-icon>mdi-map-marker</v-icon>
                </v-btn>
            </v-row>

        </v-container>
    </div>

</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'Home',
        components: {}
    }
</script>
<style>
    .bg-image {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80') no-repeat center center;
        background-size: cover;
        transform: scale(1);
    }
</style>
