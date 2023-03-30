// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.
let dimg = document.querySelector (".display-image");
let dsong = document.querySelector (".display-song");
let dartist = document.querySelector (".display-artist");
let dlink = document.querySelector (".display-link");

// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

// let images = [
//   "https://i1.sndcdn.com/artworks-000014695585-xnr0y2-t500x500.jpg",
//   "https://i.scdn.co/image/ab67616d0000b2736e5059fe574dfa0fdb975f47",
//   "https://i.scdn.co/image/ab67616d0000b273bde344cc54eedc35050f4c61",
//   "https://i.scdn.co/image/ab67616d0000b273442b53773d50e1b5369bb16c",
//   "https://i1.sndcdn.com/artworks-000204727045-gfri3e-t500x500.jpg",
// ];

// let songNames = [
//   "Lighters",
//   "Riptide",
//   "Drive By",
//   "Maps",
//   "Airplanes",
// ];

// let artists = [
//   "Bruno Mars, Bad Meets Evil",
//   "Vance Joy",
//   "Train",
//   "Maroon 5",
//   "B.o.B, Hayley Williams",
// ];

// let songLinks = [
//   "https://www.youtube.com/watch?v=YWt4wmZ_EMI",
//   "https://www.youtube.com/watch?v=uJ_1HMAGb4k&ab_channel=mushroomvideos",
//   "https://www.youtube.com/watch?v=oxqnFJ3lp5k",
//   "https://www.youtube.com/watch?v=NmugSMBh_iI",
//   "https://www.youtube.com/watch?v=kn6-c223DUU&ab_channel=AtlanticRecords",
// ];



//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data. 
// task 12: create an object for each of your songs.
let lighters = {
  image: "https://i1.sndcdn.com/artworks-000014695585-xnr0y2-t500x500.jpg",
  songName: "Lighters",
  artist: "Bruno Mars, Bad Meets Evil",
  songLink: "https://www.youtube.com/watch?v=YWt4wmZ_EMI"
}

let riptide = {
  image: "https://i.scdn.co/image/ab67616d0000b2736e5059fe574dfa0fdb975f47",
  songName: "Riptide",
  artist: "Vance Joy",
  songLink:  "https://www.youtube.com/watch?v=uJ_1HMAGb4k&ab_channel=mushroomvideos",
}

let driveby = {
  image: "https://i.scdn.co/image/ab67616d0000b273bde344cc54eedc35050f4c61",
  songName:"Drive By",
  artist: "Train",
  songLink:  "https://www.youtube.com/watch?v=oxqnFJ3lp5k",
}

let maps = {
  image: "https://i.scdn.co/image/ab67616d0000b273442b53773d50e1b5369bb16c",
  songName: "Maps",
  artist: "Maroon 5",
  songLink: "https://www.youtube.com/watch?v=NmugSMBh_iI",
}

let airplanes = {
  image: "https://i1.sndcdn.com/artworks-000204727045-gfri3e-t500x500.jpg",
  songName: "Airplanes",
  artist: "B.o.B, Hayley Williams",
  songLink: "https://www.youtube.com/watch?v=kn6-c223DUU&ab_channel=AtlanticRecords",
}


// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.
let display = [lighters, riptide, driveby, maps, airplanes]


//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.

// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
let uimg = image.value
let usong = songName.value
let uartist = artist.value
let ulink = songLink.value

let addedsong = {
  image: image.value,
  songName: songName.value,
  artist: artist.value,
  songLink: songLink.value,
}
  
// task 10: use `.push()` to add each input value to the correct array.
display.push(addedsong)

  
}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  dimg.innerHTML = "";
  dsong.innerHTML = "";
  dartist.innerHTML = "";
  dlink.innerHTML = "";
}




function displaySongInfo() {
  
for(let i=0; i<display.length; i++){
dimg.insertAdjacentHTML("beforeend", `<img src= ${display[i].image} >`);
dsong.insertAdjacentHTML("beforeend", `<p> ${display[i].songName} </p>`)
dartist.insertAdjacentHTML("beforeend", `<p> ${display[i].artist} </p>`)
dlink.insertAdjacentHTML("beforeend", `<a href="${display[i].songLink}" target= "blank">Listen to ${display[i].songName} here! :D</a>`)
}

  
// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
//   
// for (let i=0; i<images.length ;i++){
// dimg.insertAdjacentHTML("beforeend", `<img src= ${images[i]} >`)
// }

//   for (let i=0; i<songNames.length ;i++){
// dsong.insertAdjacentHTML("beforeend", `<p>${songNames[i]} </p>`)
// }
  
//   for (let i=0; i<artists.length ;i++){
// dartist.insertAdjacentHTML("beforeend", `<p>${artists[i]} </p>`)
// }
  
//   for (let i=0; i<songLinks.length ;i++){
// dlink.insertAdjacentHTML("beforeend", `<a href="${songLinks[i]}" target= "blank">Listen to ${songNames[i]} here! :D</a>`) 
// }

    }





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  emptyDisplay();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
