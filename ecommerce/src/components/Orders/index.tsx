import { Order } from "../../types/Order";
import { OrdersBoard } from "./OrdersBoard";
import { Container } from "./styles";

const orders: Order[] = [
  {
    _id: "6376a7d58da20695df2173b8",
    table: "3",
    status: "WAITING",
    products: [
      {
        product: {
          name: "Pizza quatro queijo",
          imagePath: "1668716652073-quatro-queijos.png",
          price: 40,
        },
        quantity: 1,
        _id: "6376a7d58da20695df2173b9",
      },
    ],
  },
];

export function Orders() {
  return (
    <>
      <Container>
        <OrdersBoard icon="🕐" title="Fila de espera" orders={orders} />
        <OrdersBoard icon="👩‍🍳" title="Em preparação" orders={[]} />
        <OrdersBoard icon="✅" title="Fila de espera" orders={[]} />
      </Container>
    </>
  );
}
