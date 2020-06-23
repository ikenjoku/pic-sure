import React, {useContext} from "react"
import AppContext from '../context/app-context'
import Image from '../components/Image'
import { getClass } from '../utils'


function Photos() {
    const context = useContext(AppContext)
    const Images = context.images.map((image, index) => (
        <Image key={image.id} img={image} src={image.url} className={getClass(index)} />
    ))
    return (
        <main className="photos">
            {Images}
        </main>
    )
}

export default Photos