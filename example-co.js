// Example to show how to use 'co' library to handle recursive generator control.
var fetch = require('node-fetch'),
    co = require('co');

function* createQuoteFetcher() {
    const response = yield fetch('http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json')
    const quote = yield response.json()
    return `${quote.quoteText} —${quote.quoteAuthor}`
}

const quoteFetcher = co(createQuoteFetcher)
quoteFetcher.then(quote => console.log(quote))


