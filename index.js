// Exercise - 4 : Blog Post Object

// Create a blog post object with these properties -
// Title, body, author, views : which represents the number of times this post has been viewed, 
// comments : each comment should have a couple of properties (author, body)
// isLive that can be either true or false
// We should use the object literal syntax to create and initialize a blog post. 
// GIve each property some value, the actual value doesn't really matter


// Object Literal Syntax

const blog = {
    title: 'Pooja',
    body: 'Hello this is my blog post',
    author: 'Pooja Raju',
    views: 5,
    comments: [
        { author: 'a', body: 'b'},
        { author: 'c', body: 'd'},
    ],
    isLive: true
};

console.log(blog);

