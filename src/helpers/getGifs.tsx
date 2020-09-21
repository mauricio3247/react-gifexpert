export const getGifs = async (category:string) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=PYxNlECfPLLzQBrWBozSV33nvEBZi3gm`
    const resp = await fetch(url)
    const {data} = await resp.json()

    const gifs:Array<any> = data.map((img:any)=> {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs
}