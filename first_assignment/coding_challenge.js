function findAnagram(arr) {
  let groupAnagram = {};
  let result = [];
  arr.forEach(a=>{
    const str = a.split('').sort().join('').trim();
    if(groupAnagram[str]) {
      groupAnagram[str].push(a);
    } else {
    groupAnagram[str] = [a];
    }
  });
  Object.keys(groupAnagram).forEach(anagramValue => result.push(groupAnagram[anagramValue]));
  return result;
}

const arr = ['rope', 'pore', 'repo', 'red rum', 'murder'];
console.log(findAnagram(arr));