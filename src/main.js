import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {useRouter} from "vue-router";
import router from "@/router.js";
import firebase from "@/firebase.js";

// Import the functions you need from the SDKs you need

createApp(App).use(router).mount('#app')