// Task 02:

async function awaitCall() {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    console.log(data);
    }

awaitCall();
