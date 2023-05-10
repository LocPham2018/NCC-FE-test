const MENU = ['Home', 'Services', 'News', 'Blog', 'Contact'];

const Sidebar = () => {
	return (
		<div className="sidebar">
			<ul>
				{MENU.map(item => <li key={item}>{item}</li>)}
			</ul>
		</div>
	);
};

export default Sidebar;