function rgb(r,g,b){
    let res ="#";

    res+=Hexa(r);
    res+=Hexa(g);
    res+=Hexa(b);

    return res;
}

function Hexa(x){
    let H= ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let res ="";

    res+=H[Math.floor(x/16)];
    res+=H[x%16]
    return res;
}

console.log(rgb(255,255,255));
console.log(rgb(9,108,184));
console.log(rgb(0,219,147));