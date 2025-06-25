// Exercise - 5 : Constructor Function

// Use a constructor function to create a post object. 


// const blog = {
//     title: 'Pooja',
//     body: 'Hello this is my blog post',
//     author: 'Pooja Raju',
//     views: 5,
//     comments: [
//         { author: 'a', body: 'b'},
//         { author: 'c', body: 'd'},
//     ],
//     isLive: true
// };

let blog = new Post('Pooja', 'Hi this my blog page', 'Pooja Raju');
console.log(blog);


function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}