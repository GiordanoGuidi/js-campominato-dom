
//# FUNZIONI ESTERNE AL GIOCO ---------------------------------------------
//FUNZIONE PER GENERARE LA CELLA
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
// #-----------------------------------------------------
//# FUNZIONE INTERNE AL GIOCO
        // FUNZIONE PER GENERARE 16 NUMERI RANDOM DIVERSI
        const randomNumberGenerator = (maxBombNumber, totalBombs)=>{
            const bombs =[];
            console.log('massima bomba',totalCell,'numero massimo bombe',totalBombs)
            while(bombs.length < totalBombs){
                let randomNumber = Math.floor(Math.random() * maxBombNumber)+1;
                if(!bombs.includes(randomNumber)){
                    bombs.push(randomNumber)
                }
            }
            return bombs;
        }
//#------------------------------------------------------------     

//# RECUPERO GLI ELEMENTI--------------------------------

const formElement = document.querySelector('form')
const selectElement = document.querySelector('select')
const button = document.querySelector('button');
const gridElement = document.querySelector('.grid');
let rows = 3;
let cols = 3;
let totalCell = rows * cols;
let hasCells = false;
let scoreElement = document.getElementById('score')
let score = 0;
//#--------------------------------------


//! LOGICA DEL GIOCO------------------------------------------
//CREO EVENT LISTNER SUL BOTTONE
formElement.addEventListener('submit', function(event){
    event.preventDefault();
    
    let mode = selectElement.value;
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

                }else return;
                // COLORO LA CELLA DI BLU AL CLICK
                cellElement.classList.add('clicked');

                // DICHIARO CELLA CONTENENTE BOMBA
                const hasHitBomb = bombs.includes(i);
                
                if(hasHitBomb){
                    //COLORO LA CELLA DI ROSSO
                    cellElement.classList.add('bomb');
                    //COMUNICO LA SCONFITTA
                    console.log('Game Over hai preso una bomba');
                }else{
                    //AUMENTO IL PUNTEGGIO AL CLICK
                    scoreElement.innerText = ++score
                }

                //Punteggio PER LA VITTORIA
                const winner = totalCell - totalBombs;
                if(score === winner){
                    console.log('HAI VINTO')
                }





                
             

                
            })

        }

        const totalBombs = 1;
        const bombs =randomNumberGenerator(totalCell,totalBombs);
        console.log('bombe', bombs)


        

        
    }
})


