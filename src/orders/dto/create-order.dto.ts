import { OrderType } from "../entities/order.entity";

export class CreateOrderDto {
    walletId: string;
    assetId: string;
    shares: string;
    price: number;
    type: OrderType;
    
}
