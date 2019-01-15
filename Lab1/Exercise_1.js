
//Use ES6 features, not allowed to use for-loop
String.prototype.filterWords = function(args) {
    let temp = this;
    if(args.length) {
        args.map((s) => temp = temp.replace(s, '***'));
    }
    return temp;
}
console.log("This house is nice!".filterWords(['house', 'nice']));


// Using Promise
String.prototype.filterWords2 = function(args){
    var temp = this;
    var fetchData = function () {
        return new Promise(function (resolve, reject) {
        resolve();
        });
    };

    for (let i = 0; i < args.length; i++) {
        fetchData(args[i]).then(function () {
        temp = temp.replace(args[i],'***');
        console.log(temp);
        });
    }
    return temp;
}
console.log("This house is nice!".filterWords2(['house', 'nice']));


// Async/Wait
String.prototype.filterWords3 = function(args){
    var temp = this;
    var banWord = async function (s) {
        let promise = new Promise(function (resolve, reject) {
        resolve();
        });
        try {
        let result = await Promise.resolve(1).then(s => temp = temp.toString().replace(s,'***'));
        //console.log(result);
        return result;
        } catch (error) {
            console.log(error);
        }
        
    };
    return temp;
}
console.log("This house is nice!".filterWords3(['house', 'nice']));


// Observables
const rx = require("rxjs");
const rxjsOperator = require("rxjs/operators");

String.prototype.filterWords = function(bannedWords) {
  rx.from(this.split(" "))
  .pipe(
    rxjsOperator.map(word => {
      if (bannedWords.indexOf(word) > -1) {
        return "***";
      } else {
        return word;
      }
    }),
    rxjsOperator.reduce((w1, w2) => w1 + " " + w2)
  )
  .subscribe(
    filteredSentence => {
      console.log(filteredSentence);
    },
    err => console.log(err),
    null
  );
};

"This house is nice!".filterWords(['house', 'nice']);

