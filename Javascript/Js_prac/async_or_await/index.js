/* Async/Await :

    Async = makes a functionreturn a promise
    Await = makes an aync function wait for a promise

            Allows you write asynchronous code in asynchronous manner. Async doesn't have resolve or reject parameters.Everything after Await is placed  in anevent queue
            
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

                
                if(readNovel){
                    resolve("You have read a novel.📖");
                }

                else{
                    reject("You haven't read a novel.📖");
                }
            },800);
        });
    }
    

    async function doTasks(){

        try{
            const isLabReportDone = await labReport();
            console.log(isLabReportDone);
    
            const isAssignmentWritten = await writeAssignment();
            console.log(isAssignmentWritten);
    
            const isAssignmentSubmitted = await submitAssignment();
            console.log(isAssignmentSubmitted);
            
            const isRooomCleaned = await cleanRoom();
            console.log(isRooomCleaned);
    
            const isNovelRead = await readNovel();
            console.log(isNovelRead);
    
        }
        catch(error){
            console.error(error);
        }
    }

    doTasks();