console.log('Iniciando proceso de subida');

const photoUpload = () => {
    return new Promise((resolve, reject) => {
        if (!true) {
            setTimeout(() => {
                resolve('Foto subida!');
            }, 3000);
            // resolve('Hello!');
        } else {
            const serverResponse = {
                status: 404,
                message: 'URL not found'
            };
            reject(serverResponse);
        }
    });
};

// const result = helloPromise();
// console.log('result', result);

photoUpload()
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log('Se ha producido un error', error);
    });

console.log('Fin del proceso');