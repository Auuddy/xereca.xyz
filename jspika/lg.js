
document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === "I") {
        var crh = "";
        for (var i = 0; i < 9000000; i++) {
            crh = crh + i.toString();
            console.log(crh);
        }
    }
});
