// Example to show how to build your own helper function in recursive generator control.

var fetch = require('node-fetch');

function* createQuoteFetcher() {
  const response = yield fetch('http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json')
  const quote = yield response.json()
  return `${quote.quoteText} —${quote.quoteAuthor}`
}

const coroutine = (gen) => {
  const generator = gen()

  const handle = (result) => {
    if (result.done) return Promise.resolve(result.value)
    return Promise.resolve(result.value)
      .then(res => handle(generator.next(res)))
  }

  return handle(generator.next())
}

const quoteFetcher = coroutine(createQuoteFetcher)
quoteFetcher.then(quote => console.log(quote))


