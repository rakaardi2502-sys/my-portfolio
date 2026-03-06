function popUpMessage() {
    alert("Thank you for leaving a recommendation!");
}

function addRecomendation() {
    const nameInput = document.getElementById("name");
    const nameText = nameInput.value.trim();
    const recommendationInput = document.getElementById("recommendation");
    const recommendationText = recommendationInput.value.trim(); 

    if (nameText !== "" && recommendationText !== "") {
        const recBox = document.getElementById("recBox");
        
        // Create container untuk setiap rekomendasi
        const recommendationItem = document.createElement("div");
        recommendationItem.className = "recommendation-item";

        // Create header dengan nama
        const recHeader = document.createElement("h3");
        recHeader.textContent = nameText;
        recHeader.className = "rec-name";

        // Create content rekomendasi
        const recContent = document.createElement("p");
        recContent.textContent = recommendationText;
        recContent.className = "rec-text"

        // Create content untuk tombol 
        const ButtonItem = document.createElement("div");
        ButtonItem.className = "rec-buttons";

        // create edit button 
        const editButton = document.createElement("button");
        editButton.className = "edit-button";
        editButton.textContent = "Edit";
        editButton.onclick = () => editRecommendation(recContent);

        // create remove button 
        const removeButton = document.createElement("button");
        removeButton.className = "remove-button";
        removeButton.textContent = "Remove";
        removeButton.onclick = () => removeRecommendation(recommendationItem);

        // Append buttons ke button container
        ButtonItem.appendChild(editButton);
        ButtonItem.appendChild(removeButton);

        // Append semua elemen ke recommendationItem
        recommendationItem.appendChild(recHeader);
        recommendationItem.appendChild(recContent);
        recommendationItem.appendChild(ButtonItem);

        recBox.appendChild(recommendationItem);

        nameInput.value = "";
        recommendationInput.value = "";
        popUpMessage();
    }
    else {
        alert("Please enter both name and recommendation")
        recommendationInput.focus();
    }
}

function editRecommendation(recContent) {
    const newRecommendation = prompt("Edit your recomendation: ", recContent.textContent);

    if (newRecommendation && newRecommendation.trim() !== "") {
        recContent.textContent = newRecommendation.trim();
    }
    else if (newRecommendation !== null) {
        alert("Please enter a valid recommendation")
    }
}

function removeRecommendation (recommendationItem) {
    if (confirm("re you sure want to remove this recommendation?")) {
        const recBox = document.getElementById("recBox");
        recBox.removeChild(recommendationItem);
    }
}