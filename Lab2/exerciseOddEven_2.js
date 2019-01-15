
Array.prototype.even = function(){
    setImmediate(() => {
        let result = [];
        this.forEach(element => {
            if(element %2 == 0)
                result.push(element);
        });
        console.log(result);
    })
}

Array.prototype.odd = function(){
    setImmediate(() => {
        //result = [];
        const result = this.filter(x => x%2 == 0);
        // this.filter(()=> x%2 == 0)
        // this.forEach(element => {
        //     if(element %2 != 0)
        //         result.push(element);
        // });
        console.log(result);
    })
}


console.log('start');
[1, 2, 3, 4, 5, 6 ,7, 8].even();
[1, 2, 3, 4, 5, 6, 7, 8].odd();
console.log('end');