import React from 'react';
import './CSS/SidebarButtons.css';

function SidebarButtons({ title, Icon, Color }) {
	return (
		<div className="sidebar__buttons">
			<Icon color={Color} />
			<span>{title}</span>
		</div>
	);
}

export default SidebarButtons;
