class Formatter {
  //add static methods here

  static capitalize (string){
    return string.charAt(0).toUpperCase()+ string.slice(1);
  }

static sanitize(string) {
  return string.replace(/[^A-Za-z0-9-' ]+/g, '');
}



  static titleize(string){
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const words =  string.toLowerCase().split(" ");

    for (let i = 0; i < words.length; i++){
      const word = words[i];
      


      if (i === 0 || !exceptions.includes(word)) {
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
      }
    }
    return words.join(' ');

  }

    

}


