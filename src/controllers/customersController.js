import { db } from "../conectionDB.js";

export const allCustomers = async (req, res) => {
  db.all("SELECT * FROM clientes", (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Error en la consulta a la base de datos");
    }
    res.json(rows);
  });
};

export const createCustomer = async (req, res) => {
  try {
    const {
      nombres,
      apellidos,
      dni,
      fecha_nacimiento,
      celular,
      correo,
      banco,
      numero_cci,
    } = req.body;

    if (
      nombres &&
      apellidos &&
      dni &&
      fecha_nacimiento &&
      celular &&
      correo &&
      banco &&
      numero_cci
    ) {
      const query =
        "INSERT INTO clientes (nombres,apellidos, dni, fecha_nacimiento, celular, correo, banco, numero_cci) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
      const values = [
        nombres,
        apellidos,
        dni,
        fecha_nacimiento,
        celular,
        correo,
        banco,
        numero_cci,
      ];
      await db.run(query, values);
      res.send("Cliente creado exitosamente");
    } else {
      res.status(400).send("Faltan datos obligatorios en la solicitud");
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error en la inserción en la base de datos");
  }
};

export const updateCustomer = (req, res) => {};

export const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send("Se requiere el parámetro 'id'");
    }

    const query = "DELETE FROM clientes WHERE id = ?";
    const values = [id];

    await db.run(query, values);

    res.status(200).send(`Cliente con id ${id} fue eliminado exitosamente`);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error en la eliminación en la base de datos");
  }
};
