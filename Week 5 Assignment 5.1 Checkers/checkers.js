// main JavaScript for the checkerBoard
let checkerBoard = document.getElementById("checkerBoard");
// setting up the array for placement of checker pieces
let arrPieces = [
    // gold checker piece rows
    [null, "g", null, "g", null, "g", null, "g", null, "g"],
    ["g", null, "g", null, "g", null, "g", null, "g", null],
    [null, "g", null, "g", null, "g", null, "g", null, "g"],
    // empty rows
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    // orange checker piece rows
    ["o", null, "o", null, "o", null, "o", null, "o", null],
    [null, "o", null, "o", null, "o", null, "o", null, "o"],
    ["o", null, "o", null, "o", null, "o", null, "o", null]
];
// setting up loop for rows of 10 squares
for (let i = 0; i < 10; i++){
    // loop for columns of 10 squares
    for (let j = 0; j < 10; j++){
        // create divs to represent checker spaces
        let checkerSqr = document.createElement("div");
        // set var to classname that equals individual squares
        checkerSqr.classList.add("checkerSqr");
        // individual square attributes for rows and columns
        checkerSqr.setAttribute("id", "div" + i + j);
        // set so the checker squares alternate different CSS coloring
        if ((i + j) % 2 == 0){
            checkerSqr.classList.add("checkerSqrAlt");
        } else {
            // setting the event in order to move individual pieces
            checkerSqr.addEventListener("click", movePiece);
        }
        // add the individual squares to the whole checkerboard
        checkerBoard.appendChild(checkerSqr);
        // setting the actual checker pieces in place
        if (arrPieces[i][j]){
            createPiece("piece" + i + j, "checkerPiece-" + arrPieces[i][j], checkerSqr);
        }
    }
}
// function to create the checker pieces themselves 
function createPiece(pieceId, pieceClass, targetSquare){
    // creating seperate divs for the checker pieces
    let divPiece = document.createElement("div");
    // defining the pieces and classes
    divPiece.setAttribute("id", pieceId);
    divPiece.classList.add("checkerPiece");
    divPiece.classList.add(pieceClass);
    // event to store the checker pieces in
    divPiece.addEventListener("click", storePieceId);
    // setting the location for the pieces
    targetSquare.appendChild(divPiece);
}
// the function to be able to move the pieces around the board
function movePiece(event){
    let newSquareId = event.target.id;
    // instead of actually moving pieces this is where new divs are created and replaced by the piece
    newSquareId = newSquareId.replace("div", "").replace("piece", "");
    // temporary holding spot 
    let spnSecret = document.getElementById("spnSecret");
    // creating variable for new pieces to go
    let selPieceId = spnSecret.dataset.value;
    // making sure pieces are not equal to new position
    if (selPieceId != newSquareId){
        let sourceDiv = document.getElementById("div" + selPieceId);
        // creating new space for selected pieces
        let selPieceDiv = document.getElementById("piece" + selPieceId);
        let selPieceCSS = selPieceDiv.classList[1];
        // takes the piece from the source div
        sourceDiv.removeChild(selPieceDiv);
        // creating the new location for where the piece can go
        let targetDiv = document.getElementById("div" + newSquareId);
        createPiece("piece" + newSquareId, selPieceCSS, targetDiv);
        // setting the temp storage spot to empty
        spnSecret.dataset.value = "";
    }
}
// event to store the pieces in the span
function storePieceId(event){
    // creating variable from span id
    let spnSecret = document.getElementById("spnSecret");
    let newSquareId = event.target.id;
    // setting square to replace with piece then replace the div as well
    newSquareId = newSquareId.replace("piece", "").replace("div", "");
    // setting the new value
    spnSecret.dataset.value = newSquareId;
}
