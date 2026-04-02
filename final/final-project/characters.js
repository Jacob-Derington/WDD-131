window.onload = loadCharacters;

function displayCharacters(characters) {
    const list = document.getElementById("characterList");
    list.innerHTML = "";

    if (characters.length === 0){
        list.innerHTML = "<P>No characters saved yet.</p>";
        return;
    }

    const charactersWithIndex = characters.map((c, i) => ({ char: c, index: i }));
    const shuffled = shuffleArray([...charactersWithIndex]);
    const toDisplay = shuffled.slice(0, 5);

    toDisplay.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
            <h3>${item.char.name}</h3>
            <p><strong>Role:</strong> ${item.char.role}</p>
        `;
        div.onclick = () => showDetails(item.char, item.index);
        list.appendChild(div);
    });
}

function showDetails(char, index, editMode = false) {
    const details = document.getElementById("details");

    if (editMode) {
        details.innerHTML = `
            <h2>Edit ${char.name}</h2>
            <label>Name:</label>
            <input type="text" id="editName" value="${char.name}">
            <label>Role:</label>
            <input type="text" id="editRole" value="${char.role}">
            <label>Trait:</label>
            <input type="text" id="editTrait" value="${char.trait}">
            <label>Weakness:</label>
            <input type="text" id="editWeakness" value="${char.weakness}">
            <label>About:</label>
            <textarea id="editAbout">${char.about}</textarea>
            <button id="saveBtn">Save</button>
            <button id="cancelBtn">Cancel</button>
        `;

        document.getElementById("saveBtn").onclick = () => saveEdit(index);
        document.getElementById("cancelBtn").onclick = () => showDetails(char, index);
        return;
    }

    details.innerHTML = `
        <h2>${char.name}</h2>
        <p><strong>Role:</strong> ${char.role}</p>
        <p><strong>Trait:</strong> ${char.trait}</p>
        <p><strong>Weakness:</strong> ${char.weakness}</p>
        <p><strong>About:</strong> ${char.about}</p>
        <button id="editBtn">Edit Character</button>
        <button id="deleteBtn">Delete Character</button>
    `;

    document.getElementById("editBtn").onclick = () => showDetails(char, index, true);

    document.getElementById("deleteBtn").onclick = () => {
        const Confirmation = prompt(`Type "1234" to reove ${char.name}:`);
        if (Confirmation && Confirmation.trim() === "1234") {
            deleteCharacter(index);
        } else {
            alert("Deletion canceled");
        }
    };
}

function deleteCharacter(index) {
    let characters = JSON.parse(localStorage.getItem("characters")) || [];
    characters.splice(index, 1); // remove the character
    localStorage.setItem("characters", JSON.stringify(characters));
    loadCharacters(); // refresh list
    document.getElementById("details").innerHTML = "<p>Select a character to view details</p>";
    alert("Character deleted!");
}

function editCharacter(index) {
    let characters = JSON.parse(localStorage.getItem("characters")) || [];
    const char = characters[index];

    // Prompt for each field
    const name = prompt("Name:", char.name) || char.name;
    const role = prompt("Role:", char.role) || char.role;
    const trait = prompt("Trait:", char.trait) || char.trait;
    const weakness = prompt("Weakness:", char.weakness) || char.weakness;
    const about = prompt("About:", char.about) || char.about;

    characters[index] = { name, role, trait, weakness, about };
    localStorage.setItem("characters", JSON.stringify(characters));
    loadCharacters();
    showDetails(characters[index], index);
    alert("Character updated!");
}

document.getElementById("searchInput").addEventListener("input", function() {
    const query = this.value.toLowerCase();
    const characters = JSON.parse(localStorage.getItem("characters")) || [];
    const filtered = characters.filter(c => c.name.toLowerCase().includes(query));
    displayCharacters(filtered);
});

function loadCharacters() {
    const characters = JSON.parse(localStorage.getItem("characters")) || [];
    displayCharacters(characters);
}

const searchInput = document.getElementById("searchInput");
if (searchInput) {
    searchInput.addEventListener("input", function() {
        const query = this.value.toLowerCase();
        const characters = JSON.parse(localStorage.getItem("characters")) || [];
        const filtered = characters.filter(c => c.name.toLowerCase().includes(query));
        displayCharacters(filtered);
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function saveEdit(index) {
    let characters = JSON.parse(localStorage.getItem("characters")) || [];

    const name = document.getElementById("editName").value.trim();
    const role = document.getElementById("editRole").value.trim();
    const trait = document.getElementById("editTrait").value.trim();
    const weakness = document.getElementById("editWeakness").value.trim();
    const about = document.getElementById("editAbout").value.trim();

    if (!name) {
        alert("Name is required!");
        return;
    }

    characters[index] = { name, role, trait, weakness, about };
    localStorage.setItem("characters", JSON.stringify(characters));

    // Reload the list and details
    loadCharacters();
    showDetails(characters[index], index);
}