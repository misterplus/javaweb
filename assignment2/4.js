function processStr() {
    var str = "I am a girl, I like dancing!";
    var newStr = "";
    for (i = 0; i < str.length; i++) {
        newStr += str[i] + "#";
    }
    newStr = newStr.substr(0, newStr.length - 1);
    return newStr;
}
function count(str) {
    var c = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] == '#')
            c++;
    }
    return c;
}
var s = processStr();
console.log(s);
console.log(count(s));