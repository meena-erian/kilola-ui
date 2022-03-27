import Dashboard from "./Dashboard";

export default function Content(props){
    const { page } = props;
    switch(page){
        case 'dashboard':
            return <Dashboard {...props} />
        default:
            return <>
            <h3>Page does not exist</h3>
            <p>Please refer to <b>BuyerDashboard/Content/index.js</b> for more information</p>
        </>
    }
}
