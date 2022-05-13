const playGame = document.getElementById("play");
// funzione che da inizio al gioco
playGame.addEventListener("click", inizioGame);


//gestore che inizializza il gioco
function inizioGame() {
    //Variabili griglia e difficolta selettore
    const grid = document.getElementById("grid");
    const difficultyOption = document.getElementById("sezione_difficolta");  
    const difficulty = difficultyOption.value;

    // funzione difficolta
    userDifficuly(grid, difficulty);


}




//Gestore delle difficoltà
function userDifficuly(grid, difficulty) {
    if (difficulty == 1) {
        gridGenerator(grid, 100, "facile"); //facile
    } else if (difficulty == 2) {
        gridGenerator(grid, 81, "medio"); //Medio
    } else {
        gridGenerator(grid, 49, "difficile"); //difficile
    }
}


function gridGenerator(grid, gridTot, className) {

    //Svuota la griglia
    grid.innerHTML = "";

    for (let i = 1; i <= gridTot; i++) {
        //Genera Square
        let gridSquare = gridSquareGen(className, i);

        //Aggiunge eventListener al click
        gridSquare.addEventListener("click", activeSquare);

        //Aggiunge gridSquare alla griglia
        grid.append(gridSquare);
    }
}

//Generatore di square e numeri
function gridSquareGen(className, i) {
    //Crea square
    let gridSquare = document.createElement("div");
    gridSquare.classList.add("grid_square");
    gridSquare.classList.add(className);

    //Inserisce numero 
    let gridSquareNum = document.createElement("div");
    gridSquareNum.classList.add("grid_number");
    gridSquareNum.innerHTML = i;
    gridSquare.append(gridSquareNum);

    return gridSquare;
}

//Aggiunge la classe "active" ad un elemento
    function activeSquare() {
     this.classList.add("active");
 } 