// Exercise 7 : Movies


const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.4 },
    { title: 'c', year: 2018, rating: 4.2 },
    { title: 'd', year: 2021, rating: 4.0 },
];

// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending Order
// Pick their title

const titles = movies
    .filter(m => m.year === 2018 && m.rating >=4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)

console.log(titles);