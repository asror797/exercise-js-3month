var musicType = ["Jazz", "Blues"];
alert(musicType);

// add Rock-n-roll to array
newArray.push("Rock-n-roll");
alert(musicType);

// add Classic to array
musicType.splice(1, 1, "Classic");
alert(musicType);
//remove Jazz to array
musicType.shift("Jazz");
alert(musicType);
//add Rap and Reggae to array

musicType.unshift("Rap", "Reggae");
alert(musicType);