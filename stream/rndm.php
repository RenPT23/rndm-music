<?php
// List of available M3U8 streams
$videos = [
    "letmein" => "https://renpt23.github.io/rndm-music/stream/songs/letmein/letmein_cg5.m3u",
    "iseeadreamer" => "https://renpt23.github.io/rndm-music/stream/songs/iseeadreamer/iseeadreamerfull.m3u",
];

// Select a random song
$randomKey = array_rand($videos);

// If "I See A Dreamer" is selected, redirect to the intro first
if ($randomKey === "iseeadreamer") {
    header("Location: " . $videos["iseeadreamer"]["intro"]);
    exit;
}

// Otherwise, play the selected song directly
header("Location: " . $videos[$randomKey]);
exit;
?>
