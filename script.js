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
            const icon = document.createElement('img');
            const category = document.createElement("div");
            const categoryName = document.createElement("h5");

            categoryName.innerText = app.category;

            category.id = "category"
            icon.src = `images/icons/${app.category}.svg`;
            icon.alt = "category Icon";
            

            
            img.src = `images/${app.name.toLowerCase()}.png`;
            img.alt = `${app.name} Logo`;

            // Add app name
            const name = document.createElement('h3');
            name.textContent = app.name;
            
            const downloadIcon = document.createElement("img")
            
            downloadIcon.src = "images/icons/download.svg"
            
            downloadIcon.style = "width: 15px;     width: 48px; height: 48px;";

            // Add download link
            const downloadLink = document.createElement('a');
            downloadLink.href = `downloadmanager.html?app=${encodeURIComponent(app.name)}`;
            downloadLink.append(downloadIcon);
            downloadLink.className = 'download-button';

            // Append elements to card
            card.appendChild(img);
            card.append(document.createElement("br"));
            category.appendChild(icon);
            category.appendChild(categoryName);
            card.appendChild(category);
            card.appendChild(name);
            card.appendChild(downloadLink);

            // Append card to the app list
            appListDiv.appendChild(card);
        });
    })
    .catch(error => console.error('Error loading apps:', error));
