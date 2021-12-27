import './featuredInfo.css'
import { FaRupeeSign } from "@react-icons/all-files/fa/FaRupeeSign";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="Title">
                    <h3 >Registration</h3>
            </div>
            <br/>
            <div className="featuredItem">
                <span className="featuredTitle">March</span>
                <div className="featuredcontainer">
                    <span className="featuredreg">Form Sale: 20</span><hr/>
                </div>
                <div className="featuredcontainer">
                  <span className="featuredregRate">Sale Amount: <FaRupeeSign/>2000</span>
                </div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">April</span>
                <div className="featuredcontainer">
                    <span className="featuredreg">Form Sale: 50</span><br/>
                </div>
                <div className="featuredcontainer">
                   <span className="featuredregRate"><FaRupeeSign/>5000<ArrowUpwardIcon className='fup'/></span>
                </div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">May</span>
                <div className="featuredcontainer">
                    <span className="featuredreg">Form Sale: 30</span><br/>
                </div>
                <div className="featuredcontainer">
                  <span className="featuredregRate"><FaRupeeSign/>3000 <ArrowDownwardIcon className='fdown'/> </span>
                </div>
            </div>
        </div> 
    )
}
