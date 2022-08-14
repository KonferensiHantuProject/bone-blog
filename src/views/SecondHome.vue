<template>
    <div class="home">
        <h1>Home</h1>
        <PostList :posts="posts" />
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import PostList from '../components/PostList.vue'

export default {
    name: 'Home Second',
    components: {
        PostList
    },
    setup() {
        const posts = ref([
            { title: 'Selamat Datang', body: 'lorep ipsum dolor lorep ipsum dolor lorep ipsum dolor lorep ipsum dolor lorep ipsum dolor lorep ipsum dolor lorep ipsum dolor lorep ipsum dolor lorep ipsum dolor lorep ipsum dolor lorep ipsum dolor lorep ipsum dolor lorep ipsum dolor lorep ipsum dolor lorep ipsum dolor lorep ipsum dolor lorep ipsum dolor lorep ipsum dolor lorep ipsum dolor lorep ipsum dolor', id: 1},
            { title: 'Selamat Datang Lagi', body: 'lorep ipsum dolor number two', id: 2},
        ])

        return {
            posts
        }
    }
}
</script>

<style>

</style>