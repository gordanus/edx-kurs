function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var span = document.getElementsByTagName('span');
var randomArr = [];
for (i = 0; i < span.length; i++) {
    var random = getRandomInt(500, 1500);
    randomArr.push(random);
}

for (i = 0; i < randomArr.length; i++) {
    span[i].innerHTML = randomArr[i];
}
