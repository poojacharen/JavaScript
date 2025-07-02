// Functions :

// Changing "this"

// 1st approach : By using self

const video = {
    title: 'a',
    tage: ['a', 'b', 'c'],
    showTags() {
        const self = this;
        this.showTags.forEach(function(tag) {
            console.log(self.title, tag);
        });
    }
};

video.showTags();

// 2nd approach

function playVideo(a, b) {
    console.log(this);
}

playVideo.call({ name: 'Pooja' }, 1, 2);
playVideo.apply({ name: 'Pooja' }, [1, 2]);
playVideo.bind({ name: 'Pooja' })();

playVideo();

// 3rd approach : By using =>


const video = {
    title: 'a',
    tage: ['a', 'b', 'c'],
    showTags() {
        this.showTags.forEach(tag => {
            console.log(this.title, tag);
        });
    
    }
};

video.showTags();
