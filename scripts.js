async function getHealthRules() {
    const appId = document.getElementById('appId').value;
    const url = `https://your-appdynamics-api-url/v1/application/${appId}/healthrules`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Add any necessary headers here, such as authentication headers
            }q
        });

        const data = await response.json();
        displayHealthRules(data);
    } catch (error) {
        console.error('Error fetching health rules:', error);
        document.getElementById('output').innerText = 'Error fetching health rules. Please check the console for details.';
    }
}

function displayHealthRules(rules) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    if (rules.length === 0) {
        outputDiv.innerText = 'No health rules found for this application.';
        return;
    }

    const ul = document.createElement('ul');
    rules.forEach(rule => {
        const li = document.createElement('li');
        li.textContent = rule.name;
        ul.appendChild(li);
    });
    outputDiv.appendChild(ul);
}
