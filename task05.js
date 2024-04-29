// Task 05:

const urlsToFetch = [
	'https://jsonplaceholder.typicode.com/users/1',
	'https://jsonplaceholder.typicode.com/users/2',
];

const fetchPromises = urlsToFetch.map(url => 
	fetch(url)
		.then(response => response.json())
);

Promise.all(fetchPromises)
	.then(responses => {
		const responseData = responses.map(response => response);
		console.log('Fetched data:', responseData);
	})
	.catch(error => console.error('Error fetching data:', error));
