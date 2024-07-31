// Replace with the URL of the API you want to use
const apiUrl = 'https://api.example.com/data'; 

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const tableBody = document.getElementById('data-table-body');
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.value}</td>
            `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error('There was a problem with the fetch operation:', error));
