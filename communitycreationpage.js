document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('communityForm');
    const communitiesList = document.getElementById('communitiesList');
    let communities = JSON.parse(localStorage.getItem('communities')) || [];

    function renderCommunities() {
        communitiesList.innerHTML = '';
        communities.forEach((community, index) => {
            const communityElement = document.createElement('div');
            communityElement.className = 'col-md-4 mb-3';
            communityElement.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${community.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${community.topic}</h6>
                        <p class="card-text">${community.description}</p>
                    </div>
                </div>
            `;
            communitiesList.appendChild(communityElement);
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newCommunity = {
            name: document.getElementById('communityName').value,
            topic: document.getElementById('communityTopic').value,
            description: document.getElementById('communityDescription').value
        };
        communities.push(newCommunity);
        localStorage.setItem('communities', JSON.stringify(communities));
        renderCommunities();
        form.reset();
    });

    renderCommunities();
});