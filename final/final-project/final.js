function saveCharacter() {
    // Get values
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const trait = document.getElementById("trait").value;
    const weakness = document.getElementById("weakness").value;
    const about = document.getElementById("about").value;

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

    // Clear inputs
    document.getElementById("name").value = "";
    document.getElementById("role").value = "";
    document.getElementById("trait").value = "";
    document.getElementById("weakness").value = "";
    document.getElementById("about").value = "";
}