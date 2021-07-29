import { getSaludo } from "../../base/02-template-string"

describe('02-T-S', () => {
    test('#getSaludo should return the hola name', () => {
        const name = 'chelo';

        expect(getSaludo(name)).toEqual('Hola chelo');
    })
})