const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('Hello!');
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