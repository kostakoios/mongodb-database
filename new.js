const mongoose = require('mongoose');
const Project = require('./models'); // Replace with your model

mongoose.connect('mongodb+srv://your_connection_string', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', async () => {
  try {
    const filter = { name: 'Project 0' };
    const update = { name: 'Koios Tech AI' };

    const updatedProject = await Project.updateOne(filter, update);

    console.log('Updated project:', updatedProject);

    mongoose.connection.close();
  } catch (error) {
    console.error('Error updating project:', error);
  }
});
