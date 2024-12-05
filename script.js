document.getElementById("toggleBtn").addEventListener("click", function () {
    const rightSidebar = document.getElementById("rightSidebar");
    if (rightSidebar.style.display === "block") {
        rightSidebar.style.display = "none";
    } else {
        rightSidebar.style.display = "block";
    }
});
