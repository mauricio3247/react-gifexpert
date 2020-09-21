import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

type stateFetchGift = {
    data: Array<any>,
    loading: boolean
}

export const useFetchGifs = (category:string) => {
    const [state, setstate] = useState<stateFetchGift>({
        data: [],
        loading: true
    })

    useEffect(()=> {
        getGifs(category)
        .then(images => setstate ({
            data: images,
            loading: false
        }))
    }, [category])


    return state;
}