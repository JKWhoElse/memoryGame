document.addEventListener('DOMContentLoaded',() => {
    // Card options
    const cardArray = [
        {
            name: 'blueberries',
            Image: 'Images/Blueberries.png'
        },
        {
            name: 'blueberries',
            Image: 'Images/Blueberries.png'
        },
        {
            name: 'cherries',
            Image: 'Images/Cherries.png'
        },
        {
            name: 'cherries',
            Image: 'Images/Cherries.png'
        },
        {
            name: 'grapes',
            Image: 'Images/Grapes.png'
        },
        {
            name: 'grapes',
            Image: 'Images/Grapes.png'
        },
        {
            name: 'lemons',
            Image: 'Images/Lemons.png'
        },
        {
            name: 'lemons',
            Image: 'Images/Lemons.png'
        },
        {
            name: 'peaches',
            Image: 'Images/Peaches.png'
        },
        {
            name: 'peaches',
            Image: 'Images/Peaches.png'
        },
        {
            name: 'strawberries',
            Image: 'Images/Strawberries.png'
        },
        {
            name: 'strawberries',
            Image: 'Images/Strawberries.png'
        }
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsMatched = [];

    // Creating the board
    function createBoard(){
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'Images/CardBack.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipcard);
            grid.appendChild(card);
        }
    }

    // Check for Match
    function checkForMatch(){
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(cardsChosen[0] === cardsChosen[1]){
            alert('Found a match!');
            cards[optionOneId].setAttribute('src','Images/White Background.png');
            cards[optionTwoId].setAttribute('src','Images/White Background.png');
            cardsMatched.push(cardsChosen);
        }
        else{
            cards[optionOneId].setAttribute('src','Images/CardBack.png');
            cards[optionTwoId].setAttribute('src','Images/CardBack.png');
            alert('Sorry, try again!');
        }
        cardsChosen = [];
        cardsChosenId = [];
        if(cardsMatched.length === 1){
            resultDisplay.textContent = cardsMatched.length + ' match found';
        }

        if(cardsMatched.length > 1){
            resultDisplay.textContent = cardsMatched.length + ' matches found';
        }

        if(cardsMatched.length === cardArray.length/2){
            resultDisplay.textContent = 'Congratulations! All matches found!'
        }
    }

    // Flip the card
    function flipcard(){
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src',cardArray[cardId].Image);
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard();
    
})