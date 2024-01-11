import { Router } from "express";
import {
  allCustomers,
  allCustomersPruebas,
  searchCustomersDni,
  createCustomerPrueba,
  updateCustomer,
  deleteCustomer,
  createCustomer,
} from "../controllers/customersController.js";

const router = Router();

router.get("/allCustomersPruebas", allCustomersPruebas);
router.post("/createcustomers", createCustomerPrueba);
router.get("/search/customer/dni/:dni", searchCustomersDni);

router.get("/allcustomers", allCustomers);
router.post("/createcustomer", createCustomer);
router.put("/updatecustomer", updateCustomer);
router.delete("/deletecustomer", deleteCustomer);

export default router;
