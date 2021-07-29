import { getImagen } from "../../base/11-async-await"


describe('11-async-await', () => {
    test('getImagen', async () => {
        const url = await getImagen();

        expect( typeof url ).toBe('string');
        expect(url.includes('https://')).toBe(true);
    })
})