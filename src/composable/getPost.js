import { ref } from '@vue/reactivity'

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        try{
            let data = await fetch("http://localhost:3000/posts/" + id)

            // Jika ok
            if(!data.ok)
            {
                throw Error('Tidak ada data')
            }

            post.value  = await data.json()
        }catch(err){
            error.value = err.message
            console.log(error.value)
        }

    }

    return {
        post, 
        error,
        load
    }
}

export default getPost