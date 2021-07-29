describe('Pruebas en el archivo demo.test.js', () => {
    
    test('should be the first test', () => {
        const mens1 = 'goku';
        const mens2 = "goku";
        expect(mens1).toBe(mens2);
    });

})