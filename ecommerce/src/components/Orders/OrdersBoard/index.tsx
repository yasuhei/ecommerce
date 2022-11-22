import { useState } from "react";
import { Order } from "../../../types/Order";
import { OrderModal } from "../../OrderModal";
import { Board, OrdersContainer } from "./styles";

interface OrdersProps {
  icon: React.ReactNode;
  title: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersProps) {
  const [isModalVisible, SetIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

  function handleOrderModal(order: Order) {
    SetIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    SetIsModalVisible(false);
    setSelectedOrder(null);
  }
  return (
    <Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
      />
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>(1)</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button
              type="button"
              key={order._id}
              onClick={() => handleOrderModal(order)}
            >
              <strong>Mesa {order.table} </strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
