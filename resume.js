class School{
  constructor(age,name,recieved,from){
    this.age=age
    this.name=name
    this.recieved=recieved
    this.from=from
  }
   student1(){
    console.log(` ${this.age}years old ${this.name}
    confirm that you have received  KES ${this.recieved} from ${this.from}
    for the group project where we found out that you are an active member `)
   }
}

class Organisation extends School{
  constructor(age,name,recieved,from,country){
    super(age,name,recieved,from)
    this.country
  }

  fresher(){
  console.log(` ${this.student1} $from ${this.country}`)
}
}
let hold=new School(19,"Constance Kavaya",100000,"Sharon Juliet")
// console.log(hold)
hold.student1()











    












