function openFullView(element) {
    var modal = document.getElementById("fullViewModal");
    var fullViewImage = document.getElementById("fullViewImage");
    var captionText = document.getElementById("caption");
    
    modal.style.display = "block";
    fullViewImage.src = element.src;
    captionText.innerHTML = element.alt;
}

function closeFullView() {
    var modal = document.getElementById("fullViewModal");
    modal.style.display = "README";
}