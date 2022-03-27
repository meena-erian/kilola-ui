import ListReservations from "./ListReservations";
import SearchBatches from "./SearchBatches";


export default function Content(props){
    const { page } = props;
    switch(page){
        case 'reservations':
            return <ListReservations {...props} />
        case 'search':
            return <SearchBatches {...props} />
        default:
            return <>
            <h3>Page does not exist</h3>
            <p>Please refer to <b>BuyerDashboard/Content/index.js</b> for more information</p>
        </>
    }
}

