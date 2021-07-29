import { getHeroeByIdAsync } from "../../base/09-promesas"
import heroes from "../../data/heroes";

describe('09-promesas', () => {
    test('#getHeroeByIdAsync', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toEqual(heroes[0]);
                done();
            })
    });

    test('#getHeroeByIdAsync error', (done) => {
        const id = -1;
        getHeroeByIdAsync(id)
            .catch(err => {
                expect(err).toEqual('No se pudo encontrar el héroe');
                done();
            })
    })
})