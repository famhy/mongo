 =>Create a database called "contact"
 use contact

 =>Create a collection called "contactlist"
  db.createCollection('contactlist')

  =>Insert 3 persons in "contactlist" :
  db.constactlist.insert({lastName:"Ben Lahmer",firstName:"Fares",email:"fares@gmail.com",age:26},
{lastName: "Kefi", firstName: "Seif",email: "kefi@gmail.com", age:15},
{lastName: "Fatnassi",firstName: "Sarra", email: "sarra.f@gmail.com", age:40},
{lastName: "Ben Yahia",firstName: "Rym", age:4},
{lastName: "Cherif", firstName: "Sami", age:3})

=>Display all the contact list
 db.constactlist.find()

 =>Display all the information about only one person using his id
 db.constactlist.find({_id: {$eq:ObjectId("5d62cc90e5d881e626545597")}})

=>Display all the contact list having age>18
 db.constactlist.find({age:{$gt:18}})

 =>Display all the contact list having age>18 and name containing "ah"
 db.constactlist.find({$and:[{age:{$gt:18}},{firstName:{$regex:".*ah*."}}]})

 =>Change the contact first name of "kefi Seif" by "Kefi Anis"
 db.constactlist.update({$and:[{lastName:{$eq:"Kefi"}},{firstName:{$eq:"Seif"}}]},{$set:{firstName:"Anis"}})

=>Delete the the contact list having age < 5
 db.constactlist.remove({age:{$lt:5}},0)