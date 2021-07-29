

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async() => {

    try {

        const apiKey ='dbz/data';
        const resp   = await fetch(`https://cheloskyapi.xyz/${apiKey}`);
        const {movies} = await resp.json(); 
        const { thumbnail } = movies[0];
        // const img = document.createElement('img');
        // img.src = thumbnail;
        // document.body.append( img );

        return thumbnail;
    } catch (error) {
        // manejo del error
        console.error(error)
    }
    
    
    
}




