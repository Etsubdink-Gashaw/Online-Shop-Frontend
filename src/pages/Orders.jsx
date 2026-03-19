import API from "../api/axios.js";
import { useEffect, useState } from "react";
import OrdersList from "../components/ordersList.jsx";
export default function Orders() {
    const [orders,setOrders]= useState([]);

    useEffect (()=> {
        API.get("/orders").then((res) => {
            console.log("API response:", res.data);
            console.log("ORDERS LENGTH:", res.data?.data?.length);
            const items = res.data?.data || [];
        setOrders(items);
        }).catch((err) => console.log("API ERROR:", err));
    },[]);
    
    return (
        <div className="page">
            <h2 style={{textAlign: "center"}}>Orders</h2>
            <OrdersList orders={orders} />
        </div>
    );
}