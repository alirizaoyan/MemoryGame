document.addEventListener("DOMContentLoaded", () => {
    const cardArray = [
        {
            name: "fries",
            img: "images/fries.png"
        },
        {
            name: "fries",
            img: "images/fries.png"
        },
        {
            name: "cheeseburger",
            img: "images/cheeseburger.png"
        },
        {
            name: "cheeseburger",
            img: "images/cheeseburger.png"
        },
        {
            name: "hotdog",
            img: "images/hotdog.png"
        },
        {
            name: "hotdog",
            img: "images/hotdog.png"
        },
        {
            name: "ice-cream",
            img: "images/ice-cream.png"
        },
        {
            name: "ice-cream",
            img: "images/ice-cream.png"
        },
        {
            name: "milkshake",
            img: "images/milkshake.png"
        },
        {
            name: "milkshake",
            img: "images/milkshake.png"
        },
        {
            name: "pizza",
            img: "images/pizza.png"
        },
        {
            name: "pizza",
            img: "images/pizza.png"
        }
    ]

    const shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
    }

    shuffleArray(cardArray)

    const grid = document.querySelector(".grid")
    const resultDisplay = document.querySelector("#result")
    let cardsChosen = []
    let cardsChosenID = []
    let cardsWon = []

    let createBoard = () => {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement("img")

            card.setAttribute("src", "images/blank.png")
            card.setAttribute("data-id", i)
            card.addEventListener("click", flipCard)

            grid.appendChild(card)
        }
    }

    let flipCard = (event) => {
        const cardID = event.target.getAttribute("data-id")

        cardsChosen.push(cardArray[cardID].name)
        cardsChosenID.push(cardID)

        event.target.setAttribute("src", cardArray[cardID].img)

        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    let checkForMatch = () => {
        let cards = document.querySelectorAll("img")
        const optionOneID = cardsChosenID[0]
        const optionTwoID = cardsChosenID[1]

        if (cardsChosen[0] === cardsChosen[1]) {
            alert("You found a match!")
            cards[optionOneID].setAttribute("style", "visibility: hidden;")
            cards[optionTwoID].setAttribute("style", "visibility: hidden;")
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneID].setAttribute("src", "images/blank.png")
            cards[optionTwoID].setAttribute("src", "images/blank.png")
            alert("Sorry try again!")
        }

        cardsChosen = []
        cardsChosenID = []
        resultDisplay.textContent = cardsWon.length

        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = "Congratulations! You found them all!"
        }
    }

    createBoard()
})