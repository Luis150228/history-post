export const callPost = async ()=>{
    try{
        const callerPost = await fetch('./postsData.json')
        if (!callerPost.ok) {
            throw new Error('No se posible cargar los posts')
        }
        const resCallerPost = await callerPost.json()
        console.log(resCallerPost)
        return resCallerPost
    } catch (error){
        console.log(`Hay un error en la llamada ${error}`)
    }
}