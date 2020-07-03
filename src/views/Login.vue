<template>
    <v-container>
        <div>
            <h1>Connexion</h1>
            <v-form>
                <v-text-field type="text" label="login" v-model="login" @click="error=''"></v-text-field>
                <v-text-field type="password" label="Mot de passe" v-model="password" @click="error=''"></v-text-field>
                <v-btn @click="connexionAction" color="primary">Connexion</v-btn>
                <v-alert v-if="error" type="error">{{ error }}</v-alert>
            </v-form>
        </div>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                login: "",
                password: "",
                error: ""
            };
        },
        methods: {
            async connexionAction() {
                const url = "http://localhost:3000/activities"

                const testConnexion = await this.axios.get(
                    url,
                    {
                        params: {
                            login: this.login,
                            password: this.password
                        }
                    }
                );

                if (testConnexion.data.length) {
                    this.$store.dispatch("updateUser", {name: this.login, is_admin: testConnexion.data.is_admin});
                    if (testConnexion.data.is_admin) {
                        this.$router.push({name: "Admin"});
                    } else {
                        this.$router.push({name: "Today"});

                    }
                } else {
                    this.error = "Mauvais login ou mot de passe";
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
</style>