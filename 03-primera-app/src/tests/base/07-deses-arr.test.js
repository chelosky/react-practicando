import { retornaArreglo } from "../../base/07-deses-arr"

describe('07-arr-dese', ( ) => {

    test('#retornararreglo', () => {
        const arr = retornaArreglo();

        expect(arr).toEqual(['ABC', 123]);
    })

})