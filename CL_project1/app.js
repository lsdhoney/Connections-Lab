window.addEventListener('load', function () {
    console.log('page is loaded');
    fetch("https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // handle ten random cards

            let button1 = document.querySelector("#cardButton1");
            button1.addEventListener('click', function () {
                let nameInfo = document.querySelector("#cardName");
                nameInfo.innerHTML = data.cards[0].name;

                let meaningInfo = document.querySelector("#cardMeaning");
                meaningInfo.innerHTML = "Meaning:" + data.cards[0].meaning_up;
            })

            let button2 = document.querySelector("#cardButton2");
            button2.addEventListener('click', function () {
                let nameInfo = document.querySelector("#cardName");
                nameInfo.innerHTML = data.cards[0].name;

                let meaningInfo = document.querySelector("#cardMeaning");
                meaningInfo.innerHTML = "Meaning:" + data.cards[0].meaning_up;
            })

            let button3 = document.querySelector("#cardButton3");
            button3.addEventListener('click', function () {
                let nameInfo = document.querySelector("#cardName");
                nameInfo.innerHTML = data.cards[0].name;

                let meaningInfo = document.querySelector("#cardMeaning");
                meaningInfo.innerHTML = "Meaning:"+ data.cards[0].meaning_up;
            })


        })
        .catch(error => {
            // handle what went wrong
        });






})