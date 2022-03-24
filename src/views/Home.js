import { useEffect, useState } from "react"
import { is_loggedin } from "../auth"
import Loading from "./Loading";
import { api } from "../constants/api";
import { client } from "../auth";
import FarmerDashboard from "./FarmerDashboard";
import BuyerDashboard from "./BuyerDashboard";

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();
    useEffect(() => {
        (async () => {
            var loggedin = await is_loggedin();
            if (loggedin) {
                var user = await client.GET(api.user);
                console.log(user);
                setUser(user);
                setLoading(false)
            }
            else window.location.href = '/login';
        })();
    }, []);
    if (loading) {
        return <Loading />;
    }
    if (user.type === 'farmer') {
        return <FarmerDashboard user={user} />;
    }
    else {
        return <BuyerDashboard user={user} />;
    }
}