export default function useImageSrc(imageId?: string) {
    const { public:{apiBaseUrl} } = useRuntimeConfig()
    
    const withImageSrc = (imageId?: string) => {
        if (!imageId) return null;
        return `${apiBaseUrl}/assets/${imageId}`;
    }
    const imageSrc = computed(()=> withImageSrc(imageId));
    
    return {
        imageSrc,withImageSrc
    }
}