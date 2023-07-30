import React from "react";
import { groupNumber } from "../../../data";
import { ordersData } from "../../../data";
import css from "./Orders.module.css"
import OrdersChart from "../OrdersChart/OrdersChart";
const Orders = () => {
    return (
        <div className={`${css.container} theme-container`}>
            <div className={css.head}>
                <img src="logo.png" alt="logo" />
                <span>Orders Today</span>
            </div>
            <div className={`grey-container ${css.stat}`}>
                <span>Amount</span>
                <span>$ {groupNumber(5458)}</span>
            </div>
            <div className={css.orders}>
                {
                    ordersData.map((order, index) => (
                        <div key={index} className={css.order}>
                            <div>
                                <span>{order.name}</span>
                                <span>$ {order.change}</span>
                            </div>
                            <div>
                                <span>{order.type}</span>
                                <span>items: {order.items}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={css.ordersChart}>
                <span>Split by orders</span>
                <OrdersChart />
            </div>
        </div>
    );
};

export default Orders;
