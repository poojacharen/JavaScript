// Functions :

// The "this" Keyword

// method -> ob
// function -> global (window, global)

// Eg : 1

const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video('b'); 


// Eg : 2

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this);
    }
};

VideoPlaybackQuality.showTags();