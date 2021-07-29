import { shallow } from "enzyme";
import CounterApp from "../CounterApp";
import React from "react"
import '@testing-library/jest-dom';

describe('Counter app', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CounterApp />); 
    })

    test('1-valores por defecto', () => {
        const h2 = wrapper.find('h2').text().trim();
        expect(wrapper).toMatchSnapshot();
        expect(h2).toEqual("10");
    })

    test('2-valores custom', () => {
        const contador = 100;
        wrapper = shallow(<CounterApp value={contador} />);
        const h2 = wrapper.find('h2').text().trim();
        expect(h2).toEqual(contador.toString());
    })
    
    test('3- boton +1', () => {
        const btn = wrapper.find('button').at(2);
        btn.simulate('click');
        const h2 = wrapper.find('h2').text().trim();
        expect(h2).toEqual('11');
    })

    test('4- boton -1', () => {
        const btn = wrapper.find('button').at(0);
        btn.simulate('click');
        const h2 = wrapper.find('h2').text().trim();
        expect(h2).toEqual('9');
    })

    test('4- boton -1', () => {
        const defaultValue = wrapper.find('h2').text().trim();
        let btn = wrapper.find('button').at(0);
        btn.simulate('click');
        btn.simulate('click');
        btn.simulate('click');
        btn.simulate('click');
        btn.simulate('click');
        btn = wrapper.find('button').at(1);
        btn.simulate('click');
        const h2 = wrapper.find('h2').text().trim();
        expect(h2).toEqual(defaultValue);
    })

})