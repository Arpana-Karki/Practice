// constructor = special method for defifning properties and functions of object

// e.g. 
function Study(collegeName,location,university){
    this.collegeName = collegeName,
    this.location =location,
    this.university = university,
    this.education = function(){
        console.log(`I study at ${this.collegeName},${this.location} affiliated with ${this.university}`)
    }
}

const study1 = new Study("G.C.E.S","Lamachour","pokhara university");
console.log(study1.education);