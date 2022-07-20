const { app } = require('./app');

// Models
const { User } = require('./models/user.model');
const { Task } = require('./models/task.model');

// Utils
const { db } = require('./utils/database');

db.authenticate()
	.then(() => console.log('Db authenticated'))
	.catch(err => console.log(err));


User.hasOne(Task, { foreignKey: 'userId' });
Post.belongsTo(User);

db.sync()
	.then(() => console.log('Db synced'))
	.catch(err => console.log(err));

app.listen(7000, () => {
	console.log('Express app running!!');
});
