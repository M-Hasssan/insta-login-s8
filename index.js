var iphoneimage = document.getElementById("ss")

setInterval(() => {
    if (iphoneimage.src.includes("./screenshot4-2x.png")) {
        iphoneimage.src = "./screenshot3-2x.png";
    }

    else (iphoneimage.src.includes("./screenshot3-2x.png")) {
        iphoneimage.src = "./screenshot4-2x.png";
    }
}, 2000);