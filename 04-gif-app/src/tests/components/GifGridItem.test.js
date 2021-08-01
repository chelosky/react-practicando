import React from "react"
import { shallow } from "enzyme";
import {GifGridItem} from '../../components/GifGridItem';

describe('GIFGRIDITEM', () => {

    const title = 'Titulo xd';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title={title} url={url} /> );

    test('should be created', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should have a p tag with the title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })
    
    test('should img have url in src and the title like alt title', () => {
        const img = wrapper.find('img');
        // console.log(img.props().src);
        // console.log(img.prop('src'));
        // console.log(img.props().alt);
        expect(img.prop('src').trim()).toBe(url);
        expect(img.prop('alt').trim()).toBe(title);
    })
    
    test('should div have a animate__fadeIn class', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
    })
    

})