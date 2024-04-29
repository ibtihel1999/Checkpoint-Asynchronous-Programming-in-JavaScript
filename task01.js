// Task 01:

async function iterateWithAsyncAwait (array){
for (items in array) {

    console.log(array[items]);  
    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
}

};
const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);

