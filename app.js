fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(response) {
        return response.json();
    })
    .then(function(cards) {
        var cardsWrapper = document.getElementById("cards");
        
        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            
            const titleElement = `<h1>${card.title}</h1>`;
            const bodyElement = `<p>${card.body}</p>`; 
            const postElement = `<div class="product-wrapper">${titleElement + bodyElement}</div>`;
            cardsWrapper.innerHTML += postElement;
        }
    })
    .catch(function(error) {
        console.error('Error fetching the posts:', error);
    });
