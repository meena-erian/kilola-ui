import { useState } from "react"
import { is_loggedin } from "../auth"
import Loading from "./Loading";

export default function Home() {
    const [loading, setLoading] = useState(true);
    if(loading){
        is_loggedin().then(loggedin => {
            if(loggedin){
                setLoading(false);
            }
            else{
                window.location.href = '/login';
            }
        });
        return <Loading />;
    }
    return (
        <div className="App">
            <header className="App-header">
                <p>This will be the home page</p>
            </header>
        </div>
    )
}