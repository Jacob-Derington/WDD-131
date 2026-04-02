document.getElementById("character-form").addEventListener("submit", function(event) {
    event.preventDefault(); // STOP page refresh
    saveCharacter();
});

function saveCharacter() {
    // Get values
    const name = document.getElementById("name").value.trim();
    const role = document.getElementById("role").value.trim();
    const trait = document.getElementById("trait").value.trim();
    const weakness = document.getElementById("weakness").value.trim();
    const about = document.getElementById("aboutChar").value.trim();

    if (!name){
        document.getElementById("message").textContent = "Name is required!";
        return;
    }
    // Create object
    const character = {
        name,
        role,
        trait,
        weakness,
        about
    };

    // Get existing characters
    let characters = JSON.parse(localStorage.getItem("characters")) || [];

    // Add new one
    characters.push(character);

    // Save back to localStorage
    localStorage.setItem("characters", JSON.stringify(characters));

    // Confirmation message
    document.getElementById("message").textContent = "Character saved!";

    // document.getElementById("character-form").reset();
    // Clear inputs
    document.getElementById("name").value = "";
    document.getElementById("role").value = "";
    document.getElementById("trait").value = "";
    document.getElementById("weakness").value = "";
    document.getElementById("aboutChar").value = "";
}