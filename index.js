function selectCrop(cropName) {
    var quantity = document.getElementById('quantity').value;
    var cartItems = document.getElementById('cartItems');
    
    var listItem = document.createElement('li');
    listItem.innerText = cropName + ' x ' + quantity;
    
    cartItems.appendChild(listItem);

    // Add additional actions or updates as needed
}
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var searchTerm = document.getElementById('search').value;
    var sortBy = document.getElementById('sort-by').value;

    // Simulate fetching data (replace with actual data fetching logic)
    var data = fetchData(searchTerm, sortBy);

    // Render the results
    renderResults(data);
});

function fetchData(searchTerm, sortBy) {
    // Implement your data fetching logic here
    // For demonstration purposes, returning dummy data
    return [
        { name: 'corn', price:  4000},
        { name: 'millet', price: 3000 },
        { name: 'wheat', price: 5000 }
    ];
}

function renderResults(data) {
    var outputContainer = document.getElementById('output');
    outputContainer.innerHTML = ''; // Clear previous results

    if (data.length === 0) {
        outputContainer.innerHTML = '<p>No results found.</p>';
        return;
    }

    var ul = document.createElement('ul');
    data.forEach(function(item) {
        var li = document.createElement('li');
        li.textContent = item.name + ' - $' + item.price;
        ul.appendChild(li);
    });

    outputContainer.appendChild(ul);
}
const apiKey = 'YOUR_RAPIDAPI_KEY';

        async function fetchData() {
            const options = {
                method: 'GET',
                url: 'https://bloomberg-api.p.rapidapi.com/bloomberg/agriculture',
                headers: {
                    'X-RapidAPI-Key': apiKey,
                    'X-RapidAPI-Host': 'bloomberg-api.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                displayData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        }

        function displayData(data) {
            const apiDataContainer = document.getElementById('apiData');
            apiDataContainer.innerHTML = `<p>${JSON.stringify(data)}</p>`;
        }

        fetchData();