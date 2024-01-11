import { Router } from "express";
import {
  allCustomers,
  updateCustomer,
  deleteCustomer,
  createCustomer,
} from "../controllers/customersController.js";

const router = Router();

router.get("/allcustomers", allCustomers);
router.post("/createcustomer", createCustomer);
router.put("/updatecustomer", updateCustomer);
router.delete("/deletecustomer/:id", deleteCustomer);

export default router;
