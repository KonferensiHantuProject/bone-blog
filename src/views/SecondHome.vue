<template>
    <div class="home">
        <h1>Home</h1>
        <PostList :posts="posts" v-if="showPosts" />
        <button @click="showPosts = !showPosts">Toggle Postingan</button>
        <button @click="posts.pop()">Hapus Postingan</button>
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

        // Reactive Toggle
        const showPosts = ref(true)

        return {
            posts,
            showPosts
        }
    }
}
</script>

<style>

</style>