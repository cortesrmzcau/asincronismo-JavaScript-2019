const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Do SomeThing Async'), 3000)
        : reject(new Error('Test Error'))
    });
}

const doSomethig = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before');
doSomethig();
console.log('After');

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch (error) {
        console.log(error);
    }
}

console.log('Before');
anotherFunction();
console.log('After');