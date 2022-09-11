const express = require('express');
const app = express();
const PORT = 3001;

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2022-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2022-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2022-05-30T19:20:14.298Z",
      important: true
    }
  ]

  const requestLogger = (request, response, next) => {
    console.log('Method: ', request.method);
    console.log('Path: ', request.path);
    console.log('Body: ', request.body);
    console.log('---');
    next();
  }

app.use(requestLogger);

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>');
})

app.get('/api/notes', (request, response) => {
  response.json(notes);
})

app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id);
  console.log(id);
  const note = notes.find(note => note.id === id);
  console.log(note);
  if(note){
    response.json(note);
  }else{
    response.status(404).end();
  }
});

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter(note => note.id !== id);
  response.status(204).end();
})

const unknownRoute = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}




app.use(unknownRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
