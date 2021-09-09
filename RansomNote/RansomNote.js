const testCase = [[give, me, one, grand, today, night], [give, one, grand, today]];
/*
"ive got a lovely bunch of coconuts",
"ive got some coconuts",

"give me one grand today night",
"give one grand today"

"two times three is not four",
"two times two is four"

"ive got a lovely bunch of coconuts",
"ive got some coconuts"
*/

const createMapFromArray = (array) =>{
    let map = {};
    array.map(palavra =>{
      if (map[palavra] === undefined) {
          map[palavra] = 1;
        } else {
          map[palavra]++;
        }
    })
    return map;
}

function checkMagazine(magazine, note) {
    let flag = 'Yes'    
    let mapMagazine = createMapFromArray(magazine);

    for (let i = 0; i < note.length; i++) {
      if (mapMagazine[note[i]] === undefined){
          flag = 'No';
          break;
      }else {
          mapMagazine[note[i]]--;
          if (mapMagazine[note[i]] === 0){
              mapMagazine[note[i]] = undefined;
          }
      } 
  
    }
    console.log(flag);
  }

checkMagazine(testCase[0], testCase[1]);
