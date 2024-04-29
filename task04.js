// Task 04:


async function concurrentRequests() {
    
    const prom1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const prom2 = await fetch('https://jsonplaceholder.typicode.com/todos/2');
    const prom3 = await fetch('https://jsonplaceholder.typicode.com/todos/3');

Promise.all([prom1,prom2,prom3])
.then (data =>data =  response.json() )   
    
}


concurrentRequests();