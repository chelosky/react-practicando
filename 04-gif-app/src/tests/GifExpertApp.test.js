import React from "react";
import "@testing-library/jest-dom";
import GifExpertApp from '../GifExpertApp';
import { shallow } from "enzyme";

describe('GifExpertApp', ()=> {
    test('should be created correctly', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should show list default categories', () => {
        const defaultCategories = ['Dragon Ball Z', 'Kaladin'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ defaultCategories } />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(defaultCategories.length);
        
    })
    
})