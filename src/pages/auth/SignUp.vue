<template lang="">
    <div class="fill-height fluid d-flex flex-column align-center justify-center">
        <v-sheet width="400" class="mx-auto">
            <v-card 
                subtitle="Fill your details"
            >
                <template v-slot:title>
                    <h3>Sign Up</h3>
                </template>
                <v-container class="pa-4">
                    <v-form fast-fail @submit.prevent>
                        <v-text-field
                            v-model="firstName"
                            label="Email"
                            :rules="firstNameRules"
                        ></v-text-field>

                        <v-text-field
                            v-model="lastName"
                            label="Password"
                            :rules="lastNameRules"
                        ></v-text-field>

                        <v-btn color="primary" type="submit" block class="mt-2">Submit</v-btn>
                    </v-form>
                    <p class="mt-2">Already have an account? <router-link :to="{name: 'signin'}">Sign In</router-link></p>
                </v-container>
            </v-card>
        </v-sheet>
    </div>
</template>