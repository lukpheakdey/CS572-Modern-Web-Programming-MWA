
const os = require('os');
const { Observable } = require('rxjs');


/*
async function checkSystem(){
    return 'Checking your system';
}

checkSystem()
    .then((data) => {
        console.log(data);
    })
    .then(() => {
        let memory = parseInt((os.totalmem()*0.000001)/1024);
        if(memory < 4) {
            console.log('This app need at least 4 GB of RAM');
            return false;
        }
        return true;
    })
    .then((check) => {
        if(check){
            let coreCPU = os.cpus().length;
            if(coreCPU < 2){
                console.log('Processor is not supported');
                return false;
            }
            return true;
        }
        return true;
    })
    .then((check) => {
        if(check){
            console.log('System is checked successfully ');
        }
    })
    .catch((error) => {
        console.log("Error" + error);
    });
*/
   
// Using Obserable rxjs
const observable = Observable.create((observer) => {
    observer.next('Checking your system...');
    const coreCPU = os.cpus().length;
    const memory = parseInt((os.totalmem()*0.000001)/1024);
    if(memory < 4 ){
        observer.next('This app need at least 4GB of RAM');
    } else if(coreCPU < 2){
        observer.next('Processor is not supported');
    } else {
        observer.complete();
    }
});

function checkSystem() {
    observable.subscribe(
        (data) => {
            console.log(data);
        },
        (error) => {
            console.log(error);
        },
        () => {
            console.log("System is checked successfully.");
        }
    )
}

checkSystem();


