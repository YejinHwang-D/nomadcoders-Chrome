const quotes = [
    {
        quote: "Love all, trust a few. Do wrong to none.",
        author: "William Shakespeare",
    },
    {
        quote: "Noting is more despicable than respect based on fear.",
        author: "Albert Camus",
    },
    {
        quote: "Love does not consist in gazing at each other, but in looking together in the same direction",
        author: "Saint-Exupery",
    },
    {
        quote: "To know is nothing at all. To imagine is everything.",
        author: "Anatole France",
    },
    {
        quote: "One man with courage makes a majority.",
        author: "Andrew Jackson",
    },
    {
        quote: "Anything you’re good at contributes to happiness.",
        author: "Bertrand Russell",
    },
    {
        quote: "Accurst be he that first invented war.",
        author: "Christopher Marlowe",
    },
    {
        quote: "You can learn a little from victory, you can learn everything from defeat.",
        author: "Christy Mathewson",
    },
    {
        quote: "The winds and waves are always on the side of the ablest navigators.",
        author: "Edward Gibbon",
    },
    {
        quote: "Only the person who has faith in himself is able to be faithful to others.",
        author: "Erich Fromm",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;