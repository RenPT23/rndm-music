// List of available M3U8 streams
const videos = {
    "letmein": "https://renpt23.github.io/rndm-music/stream/songs/letmein/letmein_cg5.m3u",
    "iseeadreamer": {
        "intro": "https://renpt23.github.io/rndm-music/stream/songs/iseeadreamer/iseeadreamer_intro.m3u",
        "full": "https://renpt23.github.io/rndm-music/stream/songs/iseeadreamer/iseeadreamerfull.m3u"
    }
};

// Convert object keys into an array and pick a random one
const keys = Object.keys(videos);
const randomKey = keys[Math.floor(Math.random() * keys.length)];

// Redirect logic
if (randomKey === "iseeadreamer") {
    window.location.href = videos["iseeadreamer"]["intro"]; // Redirect to intro first
} else {
    window.location.href = videos[randomKey]; // Redirect to the selected song
}
