import { db } from "../conectionDB.js";

export const allCustomers = (req, res) => {
  db.all("SELECT * FROM clientes", (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Error en la consulta a la base de datos");
    }
    res.json(rows);
  });
};

export const allCustomersPruebas = (req, res) => {
  db.all("SELECT * FROM customers", (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Error en la consulta a la base de datos");
    }
    res.json(rows);
  });
};

export const searchCustomersDni = async (req, res) => {
  // const { dni } = req.params;
  // try {
  //   if (!dni) {
  //     throw new Error("Falta el DNI en la solicitud");
  //   }
  //   const query = "SELECT * FROM clientes WHERE dni = ?";
  //   db.all(query, [dni], (err, customer) => {
  //     if (err) {
  //       console.error(err);
  //       return res
  //         .status(500)
  //         .json({ error: "Error en la búsqueda del cliente" });
  //     }
  //     if (customer && customer.length > 0) {
  //       res.json(customer);
  //     } else {
  //       res.status(404).json({ error: "Cliente no encontrado" });
  //     }
  //   });
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ error: "Error en la búsqueda del cliente" });
  // }
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

// export const createCustomer = (req, res) => {
//   db.serialize(() => {
//     db.run(
//       "INSERT INTO clientes (dni, nombres, apellidos, fecha_nacimiento, celular, correo, banco, numero_cci) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
//       [
//         req.body.dni,
//         req.body.nombres,
//         req.body.apellidos,
//         req.body.fecha_nacimiento,
//         req.body.celular,
//         req.body.correo,
//         req.body.banco,
//         req.body.numero_cci,
//       ],
//       function (err) {
//         if (err) {
//           console.error(err.message);
//           return res
//             .status(500)
//             .send("Error en la inserción en la base de datos");
//         }
//         res.send("Cliente creado exitosamente");
//       }
//     );
//   });
// };

export const createCustomerPrueba = async (req, res) => {
  try {
    const { dni, nombres } = req.body;

    if (dni && nombres) {
      const query = "INSERT INTO customers (dni, nombres) VALUES (?, ?)";
      const values = [dni, nombres];

      await db.run(query, values);
      res.send("Cliente creado exitosamente");
    } else {
      res.status(400).send("Faltan datos obligatorios en la solicitud");
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error en la inserción en la base de datos");
  }
  // try {
  //   const {
  //     dni,
  //     nombres,
  //     apellidos,
  //     fecha_nacimiento,
  //     celular,
  //     correo,
  //     banco,
  //     numero_cci,
  //   } = req.body;

  //   if (
  //     dni &&
  //     nombres &&
  //     apellidos &&
  //     fecha_nacimiento &&
  //     celular &&
  //     correo &&
  //     banco &&
  //     numero_cci
  //   ) {
  //     const query =
  //       "INSERT INTO clientes (dni, nombres, apellidos, fecha_nacimiento, celular, correo, banco, numero_cci) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

  //     const values = [
  //       dni,
  //       nombres,
  //       apellidos,
  //       fecha_nacimiento,
  //       celular,
  //       correo,
  //       banco,
  //       numero_cci,
  //     ];

  //     await db.run(query, values);
  //     res.send("Cliente creado exitosamente");
  //   } else {
  //     res.status(400).send("Faltan datos obligatorios en la solicitud");
  //   }
  // } catch (error) {
  //   console.error(error.message);
  //   res.status(500).send("Error en la inserción en la base de datos");
  // }
};

export const updateCustomer = (req, res) => {};

export const deleteCustomer = (req, res) => {};
