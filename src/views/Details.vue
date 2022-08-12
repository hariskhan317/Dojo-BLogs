<template> 
    <div class="mx-10 mt-20">
        <div v-if="error">{{error}}</div>
        <div v-if="post">
            <p class="font-semibold text-4xl">{{post.title}}</p>
            <p class="mt-6 font-normal text-base ">{{post.body}}</p>
            <div class="flex justify-start gap-3 mt-6 ">
                <div class="" v-for="tag in post.tags" key.id="tag">
                    <div class="bg-gray-100 text-base text-gray-600 rounded-lg px-3 py-1">
                         <p class="cursor-pointer">{{tag}}</p>
                    </div>
                </div>
            </div> 
            <div class="flex gap-6 mt-6">
                <button @click="handleDelete" class="h-14 w-44 rounded-lg bg-[#ff8b00] text-white font-semibold text-xl">Delete Post</button>  
            </div>
        </div>
        <div v-else>
            <spinner />
        </div>
    </div>
</template>
<script> 
import getPost from '../Composables/getPost'
import spinner from '../components/spinner.vue'
import {useRoute} from 'vue-router'
import {useRouter} from 'vue-router'
import { projectFirestore } from '../firebase/config'
export default {
    components:{
        spinner
    },
    props:['id'],
    setup(props) {
        const route = useRoute()
        const {post, error, load} = getPost(route.params.id)
        const router = useRouter()
        load()

        const handleDelete = async () => {
            try{
                let res = await projectFirestore.collection('posts').doc(props.id).delete()
                router.push({name:'home'})
            }
            catch(err){
                error.value = err.message
            }
        }


        return {post, error, handleDelete}
    }
}
</script>

<style>

</style>