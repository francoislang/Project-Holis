import Navbar from "./components/Navbar"
import MapLeafLeat from "./components/MapLeafLeat"
import CardProject from "./components/CardProject"
import "../style/Dashboard.css"


export default function Dashboard() {
    return (
        <div className="container">
            <Navbar />
            <div className="container-card-and-map">
                <div className="container-project">
                    <CardProject />
                </div>
                
                <div className="container-map">
                    <MapLeafLeat />
                </div>
            </div>
        </div>
    )
}