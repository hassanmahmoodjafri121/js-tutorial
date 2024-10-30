const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "ruby", "cpp", "java", "py"]

for (const key of programming) {
   // console.log(key);
    
}

const map = new Map()
map.set('IN', "india")
map.set('USA', "united state of america")
map.set('GER', "germany")
 
for (const key in map) {
   //console.log(key);
    
    }

    
    const coding = ["js", "ruby", "cpp", "java", "py"]

    //coding.forEach( function (item) {
      //   console.log(item);
         
   // })

  // coding.forEach( (item) => {
     //   console.log(item);
        
   //} ) 
(
   coding.forEach( (item, index, arr)=> {
   console.log(item, index, arr);
   } )