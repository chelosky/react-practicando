import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks'
import "@testing-library/jest-dom";

describe('useFetchGifs', ()=> {

    test('should return initial state', async () => {
        
        const { result, waitForNextUpdate} = renderHook( () => useFetchGifs( 'kaladin' ) );

        const { data, loading } = result.current;
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toEqual(true);

    });

    test('should return imgs and loading false', async () => {
        
        const { result, waitForNextUpdate} = renderHook( () => useFetchGifs( 'goku' ) );

        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toBeLessThanOrEqual(10);
        expect(loading).toEqual(false);


    })
    
    

})