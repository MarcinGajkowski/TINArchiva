function censorIt(badwords, phrase){
    var wordlist = new RegExp(badwords.join(''), "gi"); // ???
    return phrase.replace(wordlist, '*');
}

console.log(censorIt(['Ala', 'kot'], 'Ala ma kota i psa'));