var knex = require('knex')({
    client: 'mysql',
    connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'navgurukul',
    database: 'saralCourse'

    },
});


knex.schema.createTable('courses', (table)=>{
    table.increments('id')
  table.string('Course-name')
  table.string('Description')
})
.then(() => console.log("table created"))
  .catch((err) => { console.log(err); throw err })
  .finally(() => {
      knex.destroy();
});


