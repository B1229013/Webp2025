// Helper function to add random characters.
// It takes two parameters: min (minimum number of letters) and max (maximum number).
function add_new_chars(min, max) {
    let container = document.getElementById("container");
    let newChars = "abcdefghijklmnopqrstuvwxyz";
    let length = Math.floor(Math.random() * (max - min + 1)) + min;
    let result = "";
    for (let i = 0; i < length; i++){
        result += newChars.charAt(Math.floor(Math.random() * newChars.length));
    }
    container.textContent += result;
}

// On window load, focus the container and add 0 to 2 random letters.
window.onload = function() {
    let container = document.getElementById("container");
    container.focus();  // Ensure the container is focused to receive key events.
    add_new_chars(0, 2);
};

// Event listener for keyup event.
window.addEventListener("keyup", function(e) {
    let container = document.getElementById("container");
    // Use trim() to avoid any unexpected whitespace issues.
    let text = container.textContent.trim(); 
    let pressedKey = e.key.toLowerCase();

    console.log("Pressed key:", pressedKey, "Container text:", text);

    // Check if the first letter matches the pressed key.
    if (text.length > 0 && pressedKey === text.charAt(0)) {
        // Remove the first character.
        container.textContent = text.substring(1);
        console.log("First letter removed. New container text:", container.textContent);
    }
    
    // Append 1 to 3 random letters after each keyup event.
    add_new_chars(1, 3);
});