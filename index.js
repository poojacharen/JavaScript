// Exercise

// String Properties
// Create a function called showProperties. We pass an object and we should diplay all the properties of this object that are
// of type string


const movie = {
    title: "Bahubali",
    releaseYear: 2018,
    rating: 5.0,
    director: "S.S.Rajamouli"
};

showProperties(movie);

function showProperties(object) {
    for (let key in object) {
        if (typeof object[key] === 'string')
            console.log(key, object[key]);
    }
}