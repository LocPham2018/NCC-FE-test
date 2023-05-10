const Item = ({src, alt}) => {
	return (
		<div className="dashboard-item">
			<h3>Lorem ipsum dolor sit asmet</h3>
			<div>
				<img src={src} alt={alt} />
			</div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
				dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
				suscipit accumsan. Aenean consequat condimentum velit ut tempor.
				Nam porta massa in metus bibendum congue. Pellentesque ultrices
				liquam egestas nunc at ullamcorper ultricies. Donec feugiat
				velit nulla, vel sodales est ullamcorper id. Aenean consequat
				condimentum velit ut tempor. Nam porta massa in metus bibendum
				congue. Pellentesque ultrices vestibulum mattis.
			</p>
		</div>
	);
};

export default Item;
