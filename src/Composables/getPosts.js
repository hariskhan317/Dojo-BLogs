import {ref} from 'vue' 
import { projectFirestore } from '../firebase/config.js'

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
        try{
            await new Promise(resolve =>{
                setTimeout(resolve,500)
            })
             
            const res = await projectFirestore.collection('posts').orderBy('createdAt','desc')
            .onSnapshot((snap)=>{
                let docs = snap.docs.map((doc)=>{
                    return{ ...doc.data(),id:doc.id}
                })
                posts.value = docs
            })
        }
        catch(err){
            error.value = err.message
        }
    }
    return { posts , error , load }
}
 
export default  getPosts