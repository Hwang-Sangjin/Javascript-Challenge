function domainName(url){
  let res = '';

  res = url.split('//');
  if(res.length==1){
    res = res.join('')
  }
  else{
    res = res[1];
  }
  res = res.split('.');
  res = res[res.length-2]
  return res;
}

console.log(domainName('https://google.com'));
console.log(domainName('https://www.instagram.com/p/Cgyx5cFs2ps/'))
console.log(domainName('https://challenges.fabiobergmann.com/home'));

console.log(domainName('instagram.ffln1-1.fna.fbcdn.net/'));