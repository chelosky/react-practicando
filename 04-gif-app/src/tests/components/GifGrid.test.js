import React from "react";
import "@testing-library/jest-dom";

import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe('GifGrid', () => {

    const category = 'Dragon Ball Z';

    test('Snapshot', () => {

        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={ category } /> );
        expect(wrapper).toMatchSnapshot();
    });

    test('should  show images when load item in useFetchGifs', () => {
   
        const gifs = [{
            id: 'AAA',
            url: 'https://localhost.com/cosa.jpg',
            title: 'titulo AAA'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow( <GifGrid category={ category } /> );
        
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.find('p').exists()).toBe(false);

        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
    
});

