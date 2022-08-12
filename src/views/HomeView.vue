<template> 
    <div class=" mt-10 px-20 ">
        <div v-if="error">{{error}}</div>
        <div v-if="posts.length" class="flex justify-between">
            <div class="mx-auto w-11/12 space-y-6 ">
                <PostList :posts="posts" />  
            </div> 
        </div>
        <div v-else>
            <spinner />
        </div> 
    </div> 
</template>

<script>    
import getPosts from '../Composables/getPosts'
import PostList from '../components/postList.vue'
import spinner from '../components/spinner.vue' 
 
export default {
    components:{ PostList ,spinner}, 
    setup(){ 
        const {posts, error, load} = getPosts()

        load()
 
        return { posts , error  }
    }
}
</script>
