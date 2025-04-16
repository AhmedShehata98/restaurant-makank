export default defineNuxtPlugin(nuxtApp=> {
    const runtimeConf = useRuntimeConfig()
    const token = useCookie(runtimeConf.public?.graphql?.clients?.default?.tokenKey); 
    const api = $fetch.create({
        baseURL: runtimeConf.public?.graphql?.clients?.default?.httpEndpoint,
        onRequest: ({ _request, options, _error})=>{
            if(token.value){
                options.headers.set('Authorization',`Bearer ${token.value}`)
                options.headers.set('content-type','application/json')
            }else{
                options.headers.set('content-type','application/json')
            }
        }
    })

    nuxtApp.provide('gqlFetch',api)
})