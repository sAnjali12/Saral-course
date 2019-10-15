var knex = require('knex')({
    client: 'mysql',
    connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'navgurukul',
    database: 'saralCourse'

    },
});


knex.schema.createTable('coursesExercise', (table)=>{
  table.increments('id')
  table.integer('courseId')
  table.string('ExercisName')
  table.string('Description')
})
.then(() => console.log("table created"))
  .catch((err) => { console.log(err); throw err })
  .finally(() => {
      knex.destroy();
});


