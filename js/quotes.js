const arrayOfQuotes = [
    {'author': ' Maya Angelou', 
        'quote': '“I.ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.“'
    },
    {'author': 'Elbert Hubbard', 
        'quote': '“A friend is someone who knows all about you and still loves you“'
    },
    {'author': 'Oscar Wilde', 
        'quote': '“To live is the rarest thing in the world. Most people exist, that is all.“'
    },
    {'author': 'Mahatma Gandhi', 
        'quote': '“Live as if you were to die tomorrow. Learn as if you were to live forever.“'
    },
    {'author': ' Andre Gide, Autumn Leaves', 
        'quote': '“It is better to be hated for what you are than to be loved for what you are not.”'
    },
    {'author': 'Albert Einstein', 
        'quote': '“Life is like riding a bicycle. To keep your balance, you must keep moving.”'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
}

var randomNumber;
for (var i = 0; i < quotes.length; i++) {
    randomNumber = Math.floor(Math.random() * quotes.length);
    if (!displayedQuotes.includes(randomNumber)) {
        displayedQuotes.push(randomNumber);
        break;
    }
}
