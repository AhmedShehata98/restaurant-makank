export default function imagePath(id: string): string  {
    // const nuxtApp = useNuxtApp();
    
    const runtinmeConfig = useRuntimeConfig();
    const baseUrl = runtinmeConfig.public.baseUrl;

    if(!baseUrl) {
        console.error("base url is not defined in the runtime config");
        createError('🛑 Base URL is not defined in the runtime config .');
    }
    if(!id) {
        console.error("image ID is not defined");
        createError('🛑 image ID is not defined .');
    }

    const path = `${baseUrl}/assets/${id}`;
    return path;
}