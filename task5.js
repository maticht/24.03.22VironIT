function Count(str){
    str = str.toLowerCase()
    let vowels = 'aeiouаеёиоуыэюя';
    let amount = 0;
    for(let i = 0; i < str.length ; i++){
        if (vowels.indexOf(str[i]) !== -1) amount++
    }
    return amount;
}
console.log(Count("HEEEELOOOOOМИИИИР"));
