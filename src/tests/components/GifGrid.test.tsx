import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { GifGridComponent } from '../../components/GifGrid'


/**
 * sustituimos la dependencia por una funcion mocked que automaticamente genere los valores esperados
 */
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')
const useFetchGifsMocked = useFetchGifs as jest.MockedFunction<typeof useFetchGifs>;


describe('test componente GifGridComponent', () => {

    const category= 'One Punch'


    test('Debe crearse el componente', ()=> {
        useFetchGifsMocked.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow (<GifGridComponent category={category} />)
        expect (wrapper).toMatchSnapshot()
    })


    test('Debe mostrar items al cargar imagenes', () => {
        const gifs = [
            {
                id: '123',
                title: 'Un titulo',
                url: 'https://localhost/algo.jpg'
            }
        ]

        useFetchGifsMocked.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow (<GifGridComponent category={category} />)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItemComponent').length).toBe(gifs.length)

    })

})
