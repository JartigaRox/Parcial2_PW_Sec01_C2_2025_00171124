const express = require('express');
const cors = require('cors');
const cuentas = require('./cuentas.js');
const app = express();
const PORT = 3130;
app.use(cors());
app.use(express.json());

// endpoint que lista todas las cuentas
app.get('/cuentas', (req, res) => {
  try {
    const response = {
      count: cuentas.length,
      data: cuentas
    };
    res.json(response);
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'Error interno del servidor'
    });
  }
});

// endpoint para buscar cuentas
 app.get('/cuentas/buscar', (req, res) => {
  try {
    const { id, client, gender } = req.query;

    if (!id && !client && !gender) {
      return res.json({
        count: cuentas.length,
        data: cuentas
      });
    }

    const resultados = cuentas.filter(cuenta => {
      if (id && cuenta.id !== id) return false;

      const nombre = cuenta.client || cuenta.cliente || '';
      if (client && !nombre.toLowerCase().includes(client.toLowerCase())) return false;

      if (gender && cuenta.gender.toLowerCase() !== gender.toLowerCase()) return false;

      return true;
    });

    // Si no hay resultados
    if (resultados.length === 0) {
      return res.json({
        finded: false,
        message: 'No se encontraron cuentas',
        account: null
      });
    }

    // Si hay solo un resultado
    if (resultados.length === 1) {
      return res.json({
        finded: true,
        account: resultados[0]
      });
    }

    // Si hay muchos resultados
    return res.json({
      finded: true,
      count: resultados.length,
      data: resultados
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: true,
      message: 'Error interno del servidor'
    });
  }
});

// enpoint que busca cuetas por id
app.get('/cuentas/:id', (req, res) => {
  try {
    const cuenta = cuentas.find(c => c.id === req.params.id);
    
    res.json({
      finded: !!cuenta,
      account: cuenta || null
    });
    
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'Error interno del servidor'
    });
  }
});

// caso de poner un endpoint que no existe
app.use((req, res) => {
  res.status(404).json({ 
    error: true,
    message: 'Endpoint no encontrado' 
  });
});

app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en http://localhost:${PORT}`);
});