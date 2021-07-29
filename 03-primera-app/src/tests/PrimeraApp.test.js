import React from "react"
import { render } from "@testing-library/react"
import PrimeraApp from "../PrimeraApp"
import { shallow } from "enzyme"
import '@testing-library/jest-dom';


describe('Primera App', () => {
    // test('test', () => {
    //     const saludo = 'KALADIN';

    //     // const wrapper = render( <PrimeraApp saludo={saludo} />);
    //     // wrapper.getByText(saludo);
        
    //     const {getByText} = render( <PrimeraApp saludo={saludo} />);
    //     expect(getByText(saludo)).toBeInTheDocument();
    // })

    test('test', () => {
        const saludo = 'KALADIN';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('test 2', () => {
        const saludo = 'KALADIN';
        const subtitulo = 'Syl';
        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subtitulo} 
            />
        );
        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);
    })
})