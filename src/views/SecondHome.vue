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
import { ref } from '@vue/reactivity'
import PostList from '../components/PostList.vue'

export default {
    name: 'Home Second',
    components: {
        PostList
    },
    setup() {
        const posts = ref([])
        const error = ref(null)

        const load = async () => {
            try{
                let data = await fetch("http://localhost:3000/posts")

                // Jika ok
                if(!data.ok)
                {
                    throw Error('Tidak ada data')
                }

                posts.value  = await data.json()
            }catch(err){
                error.value = err.message
                console.log(error.value)
            }

        }

        load()
        return {
            posts,
            error
        }
    }
}
</script>

<style>

</style>