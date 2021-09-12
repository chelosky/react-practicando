export const procesoPesado = (iteraciones) => {
    for (let index = 0; index < iteraciones; index++) {
        console.log(index);
    }
    return `${ iteraciones } iteraciones ejecutadas...`;
}