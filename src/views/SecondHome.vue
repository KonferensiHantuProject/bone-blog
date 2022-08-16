<template>
    <div class="home">
        <h1>Home</h1>
        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length">
            <PostList :posts="posts" />
        </div>
        <div v-else>Loading...</div>
    </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import getPosts from'../composable/getPosts'

export default {
    name: 'Home Second',
    components: {
        PostList
    },
    setup() {
        const {post, error, load} = getPosts()

        load() 

        return {
            post,
            error
        }
    }
}
</script>

<style>

</style>