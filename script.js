async function fetchLocation() {
    const response = await fetch("https://api.github.com/repos/YOUR_GITHUB_USER/YOUR_REPO/contents/location.json");
    const data = await response.json();
    const location = JSON.parse(atob(data.content));

    return { lat: parseFloat(location.lat), lng: parseFloat(location.lng) };
}

async function checkModuleStatus() {
    const response = await fetch("https://api.github.com/repos/YOUR_GITHUB_USER/YOUR_REPO/contents/status.json");
    const data = await response.json();
    const status = JSON.parse(atob(data.content));

    document.getElementById("moduleStatus").innerText = status.online ? "ماژول آنلاین است" : "ماژول آفلاین است";
}

async function initMap() {
    checkModuleStatus();
    const location = await fetchLocation();

    const map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 12
    });

    new google.maps.Marker({ position: location, map: map });
}

initMap();