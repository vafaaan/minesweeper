width = 16;
height = 16;
mines = 40;


createField = function () {

    document.getElementById("fieldHolder").removeChild(document.getElementById("field"));

    xLimit = width + 1;
    yLimit = height + 1;

    newField = document.createElement("table");

    fieldSpacing = document.createAttribute("cellspacing");
    fieldSpacing.value = "0";
    newField.setAttributeNode(fieldSpacing);

    for (y = 0; y <= yLimit; y++) {

        row = document.createElement("tr");

        for (x = 0; x <= xLimit; x++) {

            data = document.createElement("td");

            dataClass = document.createAttribute("class");
            dataClass.value = "playField";
            data.setAttributeNode(dataClass);

            newDiv = document.createElement("div");
            dataImg = document.createElement("img");

            ImgWidth = document.createAttribute("width");
            ImgWidth.value = "50";
            dataImg.setAttributeNode(ImgWidth);

            ImgHeight = document.createAttribute("height");
            ImgHeight.value = "50";
            dataImg.setAttributeNode(ImgHeight);

            imgSrc = document.createAttribute("src");

            if (y == 0) {

                if (x == 0) {
                    console.log("left")
                    imgSrc.value = "sprites/frame/corner-es.png";
                }
                else if (x == xLimit) {
                    console.log("right")
                    imgSrc.value = "sprites/frame/corner-sw.png";
                }
                else {
                    console.log("middle")
                    imgSrc.value = "sprites/frame/line-h.png";
                }
            }
            else if (y == yLimit) {

                if (x == 0) {
                    console.log("left")
                    imgSrc.value = "sprites/frame/corner-ne.png";
                }
                else if (x == xLimit) {
                    console.log("right")
                    imgSrc.value = "sprites/frame/corner-nw.png";
                }
                else {
                    console.log("middle")
                    imgSrc.value = "sprites/frame/line-h.png";
                }
            }
            else if (x == 0 || x == xLimit) {

                imgSrc.value = "sprites/frame/line-v.png";
            }
            else {

                imgSrc.value = "sprites/tile.png";
            }
            dataImg.setAttributeNode(imgSrc);

            newDiv.appendChild(dataImg);
            data.appendChild(newDiv);
            row.appendChild(data);
        }

        newField.appendChild(row);
    }

    document.getElementById("fieldHolder").appendChild(newField);
}

newPicTest = function (x,y) {


    document.getElementById("tile_"+x+"_"+y).src = "sprites/open-tile.png";
}

newPicTest2 = function (x,y) {


    document.getElementById("tile_"+x+"_"+y).src = "sprites/flag.png";
}

createField();