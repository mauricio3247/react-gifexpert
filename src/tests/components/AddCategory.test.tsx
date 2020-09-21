import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'

describe ('Pruebas en componente AddCategory', ()=> {

    const setCategories = jest.fn(); //permite crear un mock
    let wrapper: ShallowWrapper

    beforeEach(()=> {
        jest.clearAllMocks()
        wrapper = shallow(<AddCategory setCategories={setCategories} />)
    })


    test ('debe mostrarse el componente', ()=> {
        expect(wrapper).toMatchSnapshot()
    })

    test ('Debe de cambiar la caja de texto', ()=> {
        const value = 'Hola mundo'
        wrapper.find('input').simulate('change', {target: { value }});

        expect(wrapper.find('input').prop('value')).toBe(value)
    })

    test ('no debe postear la informacion en onSubmit', ()=> {
        wrapper.find('form').simulate('submit', {
            preventDefault: ()=> {}
        })
        expect(setCategories).not.toHaveBeenCalled()
    })

    test ('Debe llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola mundo'
        wrapper.find('input').simulate('change', {target: { value }});

        wrapper.find('form').simulate('submit', {
            preventDefault: ()=> {}
        })

        expect(setCategories).toHaveBeenCalled()
        /**
         * Espera que cuando la funcion sea llamada el parametro enviado sea un funcion como 
         * lo describe el componente
         */
        expect(setCategories).toBeCalledWith(expect.any(Function))
        expect(wrapper.find('input').prop('value')).toBe('')
    })
})