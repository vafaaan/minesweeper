width = 16;
height = 16;
mines = 40;


createField = function () {

    xLimit = width + 2;
    yLimit = height + 2;

    newField = document.createElement("table");

    for (y = 0; y < yLimit; y++) {

        row = document.createElement("tr");

        for (x = 0; x < xLimit; x++) {

            data = document.createElement("td");
            newDiv = document.createElement("div");
            dataImg = document.createElement("img");

            imgSrc = document.createAttribute("src");

            if (x == 0 || x == xLimit) {

                
            }
            else {

            }

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

