<template>
    <div class="">
        <router-link :to="{name:'Details',params:{id:post.id}}">
            <p class="font-semibold text-2xl hover:text-red-500 transition-all delay-100 ease-in-out">{{post.title}}</p>
        </router-link>
        <p class="mt-3 font-normal text-sm ">{{snipets}}</p>
        <div class="flex justify-start gap-3 mt-6 ">
            <div class="" v-for="tag in post.tags" key.id="tag">
                <div class="bg-gray-100 text-base text-gray-600 rounded-lg px-3 py-1">
                    <router-link :to="{name:'Tag',params:{tag:tag}}">
                        <p class="cursor-pointer">{{tag}}</p>
                    </router-link>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script> 
import {computed} from 'vue'

export default {
    props:['post'], 
    setup(props) {
        const snipets = computed(()=>{
            return props.post.body.substring(0,100) + '...'
        })
        return  {snipets}
    }
}
</script>

<style>

</style>