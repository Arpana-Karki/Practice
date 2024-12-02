/* Promise = An object that manages asynchronoud operatios.
             Wrap a Promise obbject around {assynchronous code}
             "I promise to return a value"
             PENDING -> RESOLVED OR REJECTED
             new Promise ((resolve, reject)=> {asynchronous code})

    - Do the tasks in order :

        1) complete writing your lab report
        2) do your assignments
        3) submit assignments
        4) clean room
        5) read a novel

*/

 function labReport(){
    return new Promise ((resolve,reject)=>{

        setTimeout(()=>{

            const labReport = true;
    
            if(labReport){
                resolve("You have completed writing your lab report.📕");
            }
            else{
                reject("You haven't  completed writing your lab report.📕");
            }
        
        },1500);   
     });
}

function writeAssignment(){

    
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{

            const writeAssignment = true;

            if(writeAssignment){   
                resolve("You have completed writing your assignments.📚");
            }

             else{
                 reject("You haven't completed your assignments.📚");
                }
            });
             
        },2000);
    }


    function submitAssignment(){

        return new Promise((resolve,reject)=>{
            setTimeout(()=>{

                const AssignmentSubmitted = false;
                 if(AssignmentSubmitted){
                    resolve("You have submitted your assignments.📚");

                 }

                 else{
                    reject("You haven't submitted your assignments.📚");
                 }
            },500);
        });
    }

    function cleanRoom(){

        return new Promise((resolve,reject)=>{

            setTimeout(()=>{

                const roomCleaned = true;

                if(roomCleaned){
                    resolve("You have finished cleaning your room.🧹");
                }

                else{
                    reject("You haven't finished cleaning your room.🧹");
                }
            },1000);
        });
    }

    function readNovel(){
        
        return new Promise((resolve,reject)=>{

            setTimeout(()=>{

                const readNovel = true;

                /* for e.g:
                     If readNovel is true then resolve prints the message that is to be printed if the condition is true. Similarly, if readNovel is false then reject prints the message that is to be printed if the condition is false. If a function has the condition false then other functions after that function arenot executed.
                */ 
                if(readNovel){
                    resolve("You have read a novel.📖");
                }

                else{
                    reject("You haven't read a novel.📖");
                }
            },800);
        });
    }
    
//Promise Chaining
labReport().then(value=>{
    console.log(value);
    return writeAssignment()
    }).then(value=>{
        console.log(value);
        return submitAssignment()
    }).then(value=>{
        console.log(value);
        return cleanRoom()
    }).then(value=>{
        console.log(value);
        return readNovel()
    }).then(value=>{
        console.log(value);
        console.log("You have completed all the taks.✔️🎉🎉");
    }).catch(error=>
        console.log(error));

    