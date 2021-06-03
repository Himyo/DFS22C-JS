
export function testPromise() {
    console.log('1');

    const mypromise = new Promise((resolve,reject) => {
        console.log('2');
        setTimeout(() => {
            if(Math.floor(Math.random() * 2) === 1) {
                resolve('3')
            }
            reject('autre 3')
        },Math.random()*3000);
    })

    mypromise.then((value)=>{
        console.log(value)
    }).catch(err => console.log(err));

    console.log(mypromise);
    console.log('4');
}

// resolve(console.log('3'));
//ces maudites fenetres ! Exactement !!
// Comment oses t-elles