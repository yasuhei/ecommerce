import { Request, Response } from "express";

import { Order } from "../../Order";

export async function changeOrdersStatus(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!["WAITING", "IN_PRODUCTION", "DONE"].includes(status)) {
      return res.status(400).json({
        error: "Status should be one of these: WAITING, IN_PRODUCTION, DONE ",
      });
    }
    await Order.findByIdAndUpdate(orderId, { status });
    res.sendStatus(204);
    // res.status(201).json(order);
  } catch (error) {
    res.sendStatus(500);
  }
}
