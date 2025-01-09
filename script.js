// Fetch app data from appmanager.json and display it
fetch('apps/appmanager.json')
    .then(response => response.json())
    .then(data => {
        const appListDiv = document.getElementById('app-list');

        data.apps.forEach(app => {
            // Create app card
            const card = document.createElement('div');
            card.className = 'app-card';

            // Add app icon
            const img = document.createElement('img');
            img.src = `images/${app.name.toLowerCase()}.png`;
            img.alt = `${app.name} Icon`;

            // Add app name
            const name = document.createElement('h3');
            name.textContent = app.name;

            // Add download link
            const downloadLink = document.createElement('a');
            downloadLink.href = `downloadpage.html?app=${encodeURIComponent(app.name)}`;
            downloadLink.textContent = 'Download';
            downloadLink.className = 'download-button';

            // Append elements to card
            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(downloadLink);

            // Append card to the app list
            appListDiv.appendChild(card);
        });
    })
    .catch(error => console.error('Error loading apps:', error));
