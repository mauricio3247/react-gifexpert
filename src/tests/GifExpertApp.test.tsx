import React from 'react'
import { shallow } from 'enzyme'
import { GifExperApp } from '../GifExpertApp'

describe('test componente GifExpertApp', () => {

    test('Debe crearse el componente', ()=> {

        const wrapper = shallow (<GifExperApp />)
        expect (wrapper).toMatchSnapshot()
    })

    test('Debe crearse el componente', ()=> {
        const categories = ['One Punch', 'Dragon Ball']
        const wrapper = shallow (<GifExperApp defaultCategories={categories} />)
        expect (wrapper).toMatchSnapshot() 
        expect (wrapper.find('GifGridComponent').length).toBe(categories.length)
    })



})