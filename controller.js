var users = require('./users.json')
module.exports = {
  allUsers: function (req, res){
    group = []
    if(req.query.age){
      for(var i=0; i < users.length; i++){
        if(users[i].age == req.query.age){
          group.push(users[i])
        }
      }
      res.status(200).send(group)
    }
    if(req.query.city){
      for(var i=0; i < users.length; i++){
        if(users[i].city == req.query.city){
          group.push(users[i])
        }
      }
      res.status(200).send(group)
    }
    if(req.query.state){
      for(var i=0; i < users.length; i++){
        if(users[i].state == req.query.state){
          group.push(users[i])
        }
      }
      res.status(200).send(group)
    }
    if(req.query.gender){
      for(var i=0; i < users.length; i++){
        if(users[i].gender == req.query.gender){
          group.push(users[i])
        }
      }
      res.status(200).send(group)
    }
    if(req.query.language === "english"){
    for (var i = 0; i < users.length; i++){
      if(users[i].language === "english"){
        group.push(users[i])
      };
    }
    res.status(200).send(group)
    }
    if(req.query.language === "french"){
    for (var i = 0; i < users.length; i++){
      if(users[i].language === "french"){
        group.push(users[i])
      };
    }
    res.status(200).send(group)
    }
    if(req.query.language === "spanish"){
    for (var i = 0; i < users.length; i++){
      if(users[i].language === "spanish"){
        group.push(users[i])
      };
    }
    res.status(200).send(group)
    }
    if(req.query.language === "klingon"){
    for (var i = 0; i < users.length; i++){
      if(users[i].language === "klingon"){
        group.push(users[i])
      };
    }
    res.status(200).send(group)
    }
  else{
    res.status(200).send(users);
  }
  },

  adminUsers: function(req, res){
    group =[]
  for (var i = 0; i < users.length; i++){
    if(users[i].type === "admin"){
      group.push(users[i])
    };
  }
  res.status(200).send(group)
},

  moderatorUsers: function(req, res){
    group =[]
  for (var i = 0; i < users.length; i++){
    if(users[i].type === "moderator"){
      group.push(users[i])
    };
  }
  res.status(200).send(group)
  },

  userUsers: function(req, res){
    group =[]
  for (var i = 0; i < users.length; i++){
    if(users[i].type === "user"){
      group.push(users[i])
    };
  }
  res.status(200).send(group)
  },

  singleUser: function(req, res){
    id = req.params.id
    me = []
    for (var i = 0; i < users.length; i++){
       if(users[i].id == id){
        me.push(users[i])
        res.status(200).send(me)
       }
   }
   res.status(404).send()
 },

  newUser: function(req, res){
    newUser= {
      "id": users.length + 1,
      "first_name": req.body.first_name,
      "last_name" : req.body.last_name,
      "email" : req.body.email,
      "gender" : req.body.gender,
      "language" : req.body.language,
      "age" : req.body.age,
      "city" : req.body.city,
      "state" : req.body.state,
      "type" : req.body.type,
      "favorites" : req.body.favorites,
    }
    users.push(newUser)
    res.status(200).send(users.pop())
  },

  newAdmin: function(req, res){
    newUser= {
      "id": users.length + 1,
      "first_name": req.body.first_name,
      "last_name" : req.body.last_name,
      "email" : req.body.email,
      "gender" : req.body.gender,
      "language" : req.body.language,
      "age" : req.body.age,
      "city" : req.body.city,
      "state" : req.body.state,
      "type" : "admin",
      "favorites" : req.body.favorites,
    }
    users.push(newUser)
    res.status(200).send(users.pop())
  },

  changeLang: function(req, res){
    id = req.params.id
    newlanguage = req.body.language
    for (var i = 0; i < users.length; i++){
       if(users[i].id == id){
        users[i].language = newlanguage
        res.status(200).send(users[i])
       }
   }
 },

 addFavorite: function(req, res){
   id = req.params.id
   newForum = req.body.add
   for (var i = 0; i < users.length; i++){
      if(users[i].id == id){
       users[i].favorites.push(newForum)
       res.status(200).send(users[i])
      }
  }
},

 removeFavorite: function(req, res){
   id = req.params.id
   forum = req.query.favorite;
   for (var i = 0; i < users.length; i++){
      if(users[i].id == id){
       index = users[i].favorites.indexOf(forum)
       console.log(index);
       users[i].favorites.splice(index, 1)
        res.status(200).send(users[i])
      }
  }
},

  banUser: function(req, res){
    id = req.params.id
    for (var i = 0; i < users.length; i++){
       if(users[i].id == id){
        users.splice(i,1)
         res.status(200).send(users)
       }
   }
 },

 updateUser: function(req, res){
   id = req.params.id
   for (var i = 0; i < users.length; i++){
      if(users[i].id == id){
       users[i].first_name = req.body.first_name
       users[i].last_name = req.body.last_name
       users[i].email = req.body.email
       users[i].gender = req.body.gender
       users[i].language = req.body.language
       users[i].age = req.body.age
       users[i].city = req.body.city
       users[i].state = req.body.state
       users[i].type = req.body.type
       users[i].favorites = req.body.favorites
        res.status(200).send(users[i])
      }
  }
 }



};//end
