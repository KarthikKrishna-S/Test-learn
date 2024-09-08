/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const promise3 = new Promise((resole) =>{
        let a, b
        promise1.then((value) => {
            promise2.then((val) => {
                resole(value+val)
            })
        })
    })
    return promise3
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */