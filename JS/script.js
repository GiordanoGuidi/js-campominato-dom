
//# FUNZIONI
const cellGenerator = (mode) =>{
    //CREO ELEMENTO CELLA
    const cellElement =document.createElement('div');
    // GLI DO LA CLASSE
    cellElement.classList.add('cell');
    if(mode ==='2'){
        cellElement.classList.add('cell','medium')
    }else if(mode === '3'){
        cellElement.classList.add('cell','hard')
    }
    return cellElement
}

//# RECUPERO GLI ELEMENTI
const formElement = document.querySelector('form')
const selectElement = document.querySelector('select')
const button = document.querySelector('button');
const gridElement = document.querySelector('.grid');
let rows = 10;
let cols = 10;
let totalCell = rows * cols;
let hasCells = false;
console.log('celle totali',totalCell)

//CREO EVENT LISTNER SUL BOTTONE
formElement.addEventListener('submit', function(event){
    event.preventDefault();
    
    let mode = selectElement.value;
    console.log(mode);
    // CAMBIO GRANDEZZA GRIGLIA IN BASE ALLA MODALITA' SCELTA
    if(mode === '2'){
        rows = 9;
        cols = 9;
        totalCell = rows * cols;
        console.log('righe',rows,'colonne',cols,'celle totali',totalCell)
    }else if(mode === '3'){
        rows = 7;
        cols = 7;
        totalCell = rows * cols;
    }

    if(hasCells){
        // RIMUOVIAMO LE CELLE SE GIA CI SONO
        gridElement.innerHTML = '';
        hasCells = false
    }else{
        for(let i = 1; i <= totalCell; i++){
            //CREO LA CELLA
            let cellElement = cellGenerator(mode);
    
            // AGGANGIO LA CELLA ALLA GRIGLIA
            gridElement.appendChild(cellElement);
    
            // AGGIUNGO IL NUMERO ALLA CELLA
            cellElement.innerText = i;
            
            hasCells = true

            // CREO EVENT LISTNER SULLA CELLA
            cellElement.addEventListener('click', function(){
                //EVITO CHE LO STAMPI SE GIA E' STATA CLICCATA
                if(!cellElement.classList.contains('clicked')){
                    //STAMPO IN CONSOLE IL NUMERO DELLA CELLA
                    console.log('sono la cella', i)
                }else return;
    
                // COLORO LA CELLA DI BLU AL CLICK
                cellElement.classList.add('clicked');
            })
        }
    }
})


