console.log('Iniciando proceso de subida');

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('Foto subida!');
            }, 3000);
            // resolve('Hello!');
        } else {
            reject('Ouch!!!');
        }
    });
};

// const result = helloPromise();
// console.log('result', result);

helloPromise()
    .then(response=>{
        console.log(response);
    });