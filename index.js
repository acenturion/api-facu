import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

app.get('/:name', (req, res) => {
  const { name } = req.params;
  res.send(`¡Hola, ${name}!`);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

export default app;