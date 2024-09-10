const trends_elems = document.querySelectorAll(".trends-item:not(.trends-item-large)");

class GalleryElement{
    title;
    image;
    tags;
    user;
    constructor(title,image,tags,user) {
        this.title = title;
        this.image = image;
        this.tags = tags;
        this.user = user;
    }
}
class User{
    name;
    image;
    constructor(name,image) {
        this.name = name;
        this.image = image;
    }
}

//region fake Bd
let user1 = new User("user 1", "https://loremflickr.com/50/50/cat?random=1");
let user2 = new User("user 2", "https://loremflickr.com/50/50/cat?random=2");
let user3 = new User("user 3", "https://loremflickr.com/50/50/cat?random=3");
let user4 = new User("user 4", "https://loremflickr.com/50/50/cat?random=4");

let item1 = new GalleryElement("Project 1", "https://loremflickr.com/450/270?random=1", ["tag1", "tag2", "tag3"], user1);
let item2 = new GalleryElement("Project 2", "https://loremflickr.com/450/270?random=2", ["tag1", "tag2", "tag3"], user2);
let item3 = new GalleryElement("Project 3", "https://loremflickr.com/450/270?random=3", ["tag1", "tag2", "tag3"], user3);
let item4 = new GalleryElement("Project 4", "https://loremflickr.com/450/270?random=4", ["tag1", "tag2", "tag3"], user4);
//endregion

let spotlightItems = [item1,item2,item3,item4];

for (let i = 0; i < trends_elems.length; i++) {
    addSpotlightElement(spotlightItems[i], i);
}

function addSpotlightElement(element, i){
    let avatar = trends_elems[i].querySelector(".avatar");
    let title = trends_elems[i].querySelector("h2");
    let userName = trends_elems[i].querySelector("h3");
    let tags = trends_elems[i].querySelector(".tag-list");
    let image = trends_elems[i].querySelector(".trends-item-thumb")

    title.textContent = element.title;
    userName.textContent = element.user.name;
    avatar.src = element.user.image;
    image.src = element.image;

    for (let j = 0; j < element.tags.length; j++) {
        let t = document.createElement("a");
        t.textContent = element.tags[j];
        t.classList.add("tag");
        t.href = "?tag=" + element.tags[j];
        tags.append(t);
    }
}

const gallery = document.querySelector(".mini-grid");
let galleryElems = [item1,item2,item3,item4];

function addGalleryElement(elem) {
    let div = document.createElement("div");
    div.classList.add('grid-elem');
    gallery.prepend(div);

    let image = document.createElement("img");
    image.src = elem.image;
    image.classList.add('thumb');
    div.append(image);
    
    let title = document.createElement("h2");
    title.textContent = elem.title;
    div.append(title);

    let userName = document.createElement("h3");
    userName.textContent = elem.user.name;
    div.append(userName);

    let avatar = document.createElement("img");
    avatar.src = elem.user.image;
    avatar.classList.add("avatar");
    div.append(avatar);

    let tags = document.createElement("div");
    tags.classList.add("tags");
    for (let j = 0; j < elem.tags.length; j++) {
        let t = document.createElement("a");
        t.textContent = elem.tags[j];
        t.classList.add("tag");
        t.href = "?tag=" + elem.tags[j];
        tags.append(t);
    }
    div.append(tags);
}

for (let i = 0; i < galleryElems.length; i++) {
    addGalleryElement(galleryElems[i]);
}
