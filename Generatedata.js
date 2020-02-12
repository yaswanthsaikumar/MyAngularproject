var faker = require('faker');
var database = { users: [] };

for (var i=1; i<=10; i++) {
  database.users.push({
    
    username: faker.random.words(),
    password: faker.random.words(),
    
  });
}

console.log(JSON.stringify(database));