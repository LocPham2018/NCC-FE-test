import Intro from "./Intro";
import Item from "./Item";
import Logo from "./Logo";

const Dashboard = () => {
	return (
		<div className="dashboard">
			<Logo />
			<Intro />
			<div className="dashboard-items">
				<Item src="/item-img.png" alt="Lorem ipsum" />
				<Item src="/item-img.png" alt="Lorem ipsum" />
				<Item src="/item-img.png" alt="Lorem ipsum" />
			</div>
		</div>
	);
};

export default Dashboard;