function firstNonRepeatingCharacter(string) {
    // Write your code here.
      let chars = {};
      for(let i=0;i<string.length;++i) {
          if(!chars[string[i]]) {
              chars[string[i]] = i;
          } else {
              delete chars[string[i]];
          }
      }
      console.log(chars);
      if(Object.keys(chars).length) {
          for(const prop in chars) {
              return chars[prop];
          }
      } else {
          return -1;
      }
  }

  console.log(firstNonRepeatingCharacter('abcdcaf'));