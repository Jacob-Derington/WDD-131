function loadCharacters() {
    const characters = JSON.parse(localStorage.getItem("characters")) || [];
    const list = document.getElementById("characterList");

    list.innerHTML = "";

    characters.forEach((char, index) => {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <h3>${char.name}</h3>
            <p><strong>Role:</strong> ${char.role}</p>
        `;

        div.onclick = () => showDetails(char);

        list.appendChild(div);
    });
}

function showDetails(char) {
    const details = document.getElementById("details");

    details.innerHTML = `
        <h2>${char.name}</h2>
        <p><strong>Role:</strong> ${char.role}</p>
        <p><strong>Trait:</strong> ${char.trait}</p>
        <p><strong>Weakness:</strong> ${char.weakness}</p>
        <p><strong>About:</strong> ${char.about}</p>
    `;
}