//sintaxis 1
// console.log('Iniciando proceso de subida');

// const photoUpload = () => {
//     return new Promise((resolve, reject) => {
//         if (true) {
//             setTimeout(() => {
//                 const serverResponse = {
//                     status: 200,
//                     message: 'Todo guay'
//                 };
//                 resolve(serverResponse);
//             }, 3000);
//             // resolve('Hello!');
//         } else {
//             const serverResponse = {
//                 status: 404,
//                 message: 'URL not found'
//             };
//             reject(serverResponse);
//         }
//     });
// };

// // const result = helloPromise();
// // console.log('result', result);

// photoUpload()
//     .then(response => {
//         console.log(response);
//         return response.message.toUpperCase();
//     })
//     .then(res => {
//         console.log('Este es mi segundo .then', res);
//     })
//     .catch(error => {
//         console.log('Se ha producido un error', error);
//     });

// console.log('Fin del proceso');

//sintaxis 2
// console.log('Iniciando proceso de subida');

// const photoUpload = new Promise((resolve, reject) => {
//     if (true) {
//         setTimeout(() => {
//             const serverResponse = {
//                 status: 200,
//                 message: 'Todo guay'
//             };
//             resolve(serverResponse);
//         }, 3000);
//         // resolve('Hello!');
//     } else {
//         const serverResponse = {
//             status: 404,
//             message: 'URL not found'
//         };
//         reject(serverResponse);
//     }
// });

// photoUpload.then(response => {
//         console.log(response);
//         return response.message.toUpperCase();
//     })
//     .then(res => {
//         console.log('Este es mi segundo .then', res);
//     })
//     .catch(error => {
//         console.log('Se ha producido un error', error);
//     });

// console.log('Fin del proceso');

//sintaxis 3
console.log('Iniciando proceso de subida');

function photoUpload() {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                const serverResponse = {
                    status: 200,
                    message: 'Todo guay'
                };
                resolve(serverResponse);
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
}


photoUpload().then(response => {
        console.log(response);
        return response.message.toUpperCase();
    })
    .then(res => {
        console.log('Este es mi segundo .then', res);
    })
    .catch(error => {
        console.log('Se ha producido un error', error);
    })
    .finally(()=>{
        console.log('Se ha ejecutado el FINALLY');
    });

console.log('Fin del proceso');