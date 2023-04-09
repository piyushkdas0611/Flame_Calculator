function flameCal() {
    let your = document.getElementById('yname').value.toLowerCase();
    let crush = document.getElementById('cname').value.toLowerCase();
    let total = your + crush;
    let len = total.length;
    let f = total.match(/f/g);
    let l = total.match(/l/g);
    let a = total.match(/a/g);
    let m = total.match(/m/g);
    let e = total.match(/e/g);
    let f1 = 0, l1 = 0, a1 = 0, m1 = 0, e1 = 0;
    if(f == null)
        f1 = 0;
    else
        f1 = f.length;    
    if(l == null)
        l1 = 0;
    else
        l1 = l.length;
    if(a == null)
        a1 = 0;
    else
        a1 = a.length;
    if(m == null)
        m1 = 0;
    else
        m1 = m.length;
    if(e == null)
        e1 = 0;
    else
        e1 = e.length;
    let flame = f1 + l1 + a1 + m1 + e1;
    console.log(flame);
    let score = len - flame;
    console.log(score);
    result(score);
    function result(score) {
        if(score == 1 || score == 6) {
            document.getElementById('result').innerHTML = 'Friends';
            console.log('Friends');
        }
        else if(score == 2 || score == 7) {
            document.getElementById('result').innerHTML = 'Lover';
            console.log('Lover');
        }
        else if(score == 3 || score == 8) {
            document.getElementById('result').innerHTML = 'Affectionate';
            console.log('Affectionate');
        }
        else if(score == 4 || score == 9) {
            document.getElementById('result').innerHTML = 'Marriage';
            console.log('Marriage');
        }
        else if(score == 5 || score == 10) {
            document.getElementById('result').innerHTML = 'Enemy';
            console.log('Enemey')
        }
        else {
            score %= 10;
            result(score);
        }
    }
}