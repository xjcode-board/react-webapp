import React ,{Component} from "react";
import loading from "./loading.gif"
import "./index.scss";
class Pageing extends Component {
    constructor(props){
        super()
    }

    render() {
        return (
            <div className="pageing">
                <div className="pageing-wrapper">
                     <img  src={loading} alt="loading"/>
                </div>
            </div>
        )
    }
}

export default Pageing