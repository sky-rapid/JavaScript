
const diff = () => {
    
        var i1 = "01 / 07 / 2018";
        var i2 = "03 / 05 / 2020";
    
        var a = new Date(i1);
        var b = new Date(i2);
        var m = (a.getMonth() + 1) - (b.getMonth() + 1)
        var y = a.getFullYear() - b.getFullYear()
        var d = a.getDay() - b.getDay()
        var timedi = b.getTime() - a.getTime();
        var weekd = timedi / (1000 * 3600 * 24 * 7);
        var days = timedi / (1000 * 3600 * 24 );
        var hourss = timedi / (1000 * 3600 );
        var minits = timedi / (1000 * 60);
        console.log(Math.abs(y) + ' year ' + Math.abs(m) + ' Months ' + Math.abs(d) + " Days ");
        console.log('or ' + Math.abs(((y * 12) + m)) + ' Months ' + Math.abs(d) + " Days ");
        console.log('or ' +Math.floor(weekd) + " Weeks ");
        console.log('or ' +Math.floor(days) + " Days ");
        console.log('or ' +Math.floor(hourss) + " Hours");
        console.log('or ' +Math.floor(minits) + " minits");
}
diff();