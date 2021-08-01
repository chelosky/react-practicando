import React from "react"

import '@testing-library/jest-dom';

import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={ setCategories } />);
    
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories } />);
    } )

    test('should created component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should input changed', () => {
        const input = wrapper.find('input');
        const value = 'ejemplo';
        input.simulate('change', { target: { value } });
        expect( wrapper.find('input').prop('value')).toBe(value);
    })
    
    test('should form submit when value void', () => {
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });
        
        expect(setCategories).not.toHaveBeenCalled();
    })
    
    test('should form submit when valud input is not void', () => {
        const input = wrapper.find('input');
        const value = 'ejemplo';
        input.simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect( wrapper.find('input').prop('value')).toBe('');
    })
    
})