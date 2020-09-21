import React from 'react'
import { shallow } from 'enzyme'
import { GifGridItemComponent } from '../../components/GifGridItem'

describe (' Pruebas en <GifGridItem />', ()=> {
    const title = 'Un titulo'
    const url = 'https://localhost/algo.jpg'
    const id = '123'
    const wrapper = shallow (<GifGridItemComponent title={title} url={url} id={id}  />)
    test ('debe mostrar el componente correctamente', ()=> {
        expect(wrapper).toMatchSnapshot()
    })

    test ('debe tener un parrafo con el title', ()=> {
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(title)
    })

    test ('debe tener la imagen igual al url y alt de los props', ()=> {
        const img = wrapper.find('img')
        expect(img.prop('alt')).toBe(title)
        expect(img.prop('src')).toBe(url)
    })

    test('Debe tener un animate__fadeIn', () =>{
        const div = wrapper.find('div');
        const classNames = div.prop('className')
        expect(classNames?.includes('animate__zoomIn')).toBe (true)
    })
})