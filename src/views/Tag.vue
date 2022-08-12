<template>
    <div>
        <div v-if="error">{{error}}</div>
        <div v-if="posts.length">
            <PostList :posts="showTagPost" />
        </div>
        <div v-else>
            <Spinner />
        </div>
    </div>
</template>

<script>
import {computed} from 'vue'
import {useRoute} from 'vue-router'
import getPosts from '../Composables/getPosts'
import PostList from '../components/postList.vue'
import Spinner from '../components/spinner.vue'
export default {
    components:{
        Spinner,PostList
    },
    setup() {
        const route = useRoute()
        const {posts , error , load } = getPosts()
        
        load()


        const showTagPost = computed(()=>{
            return posts.value.filter((p)=> p.tags.includes(route.params.tag))
        })
        

        return { posts , error ,showTagPost}
    }
}
</script>

<style>

</style>


