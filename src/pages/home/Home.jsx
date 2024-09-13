import DashNavbar from '../../Components/dashnavbar/DashNavbar';
import DashSidebar from '../../Components/dashsidebar/DashSidebar';
import Featured from '../../Components/featured/Featured';
import Widget from '../../Components/widgets/Widget';
import Chart from '../../Components/chart/Chart';
import './Home.scss';
import ListTable from '../../Components/table/ListTable';
import { Premium } from '../../Components/premium/Premium';
const Home = () => {
  return (
    <div className='home'>
      <DashSidebar/>
      <div className="homeContainer">
        {/* <DashNavbar/> */}
        <div className="widgets">
          <Widget type="user" />
          <Widget type="overall coding score" />
          <Widget type="total problem solved" />
          <Widget type="monthly coding score" />
        </div>
        <div className="charts">
          <Featured/>
          <Chart aspect={2 / 1} title="Last 6 Months (Streak)"/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Subscription Plans</div>
          {/* <ListTable/> */}
          <Premium/>
        </div>
      </div>
    </div>
  )
}

export default Home
