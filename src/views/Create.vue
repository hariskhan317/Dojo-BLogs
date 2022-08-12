<template>
    <div class="py-16 px-40">
        <h1 class="font-sans text-5xl font-bold ">Write Blog</h1>
        <form @submit.prevent="addPost" action="" class="py-10 px-12 space-y-8">
            <div class="relative">
                <div class="absolute w-32 h-9 bg-[#ff8b00] -rotate-6"></div>
                <label class="ml-7 mt-2 text-2xl font-normal text-white relative z-50" for="">Title</label>
                <input v-model="title" class="mt-6 w-full text-base p-1 rounded-lg border-2 border-gray-300 focus:outline-none" type="text" name="" id="">
            </div>
            <div class="relative">
                <div class="absolute w-32 h-9 bg-[#ff8b00] -rotate-6"></div>
                <label class="ml-7 mt-2 text-2xl font-normal text-white relative z-50" for="">Content</label> 
                <textarea v-model="body" rows="6" class="mt-6 w-full text-base p-1 rounded-lg border-2 border-gray-300 focus:outline-none" type="text" name="" id=""></textarea>
            </div>
            <div class="relative">
                <div class="absolute w-32 h-9 bg-[#ff8b00] -rotate-6"></div>
                <label class="ml-7 mt-2 text-2xl font-normal text-white relative z-50" for="">Tags</label> 
                <input v-model="tag" @keydown.enter.prevent="addTags" class="mt-6 w-full text-base p-1 rounded-lg border-2 border-gray-300 focus:outline-none" type="text" name="" id="">
            </div>
            <div class="w-full text-center">
                <button  class="bg-gray-200 font-medium text-gray-600 text-xl rounded border-2 w-1/3 py-4">Add Post</button>
            </div> 
 
        </form>
    </div>
</template>

<script>
import { ref  } from 'vue'
import { useRouter } from 'vue-router' 
import { projectFirestore } from '../firebase/config'
import { timestamp } from '../firebase/config'
export default {
    setup(){
        const title = ref('')
        const body = ref('')
        const tag = ref('')
        const tags = ref([])
        const router = useRouter()
        
        const addTags = () =>{
            if(!tags.value.includes(tag.value)){
                tag.value = tag.value.replace(/\s/, '') // to remove white space
                tags.value.push(tag.value)
            }
            tag.value=''
        }

        const addPost = async() =>{ 
            const post = {
                    title : title.value,
                    body : body.value,
                    tags : tags.value,
                    createdAt:timestamp()
            } 
            let res = await projectFirestore.collection('posts').add(post)

            router.push({name:'home'})
        }

        return {title, body, tag, tags, addTags, addPost}
    }
}
</script>

<style>

</style>