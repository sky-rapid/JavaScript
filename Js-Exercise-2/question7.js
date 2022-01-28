function getMon(n){
    let date = new Date(n);
    console.log(date.toLocaleString('en-us',{month: 'long'}));
}

getMon('05-10-2020');