import React from 'react';
import './CSS/SearchItems.css';
function SearchItems({ views, subs, description, timestamp, channel, title, image }) {
	return (
		<div className="searchItems">
			<img src={image} alt="mainImg" />
			<div className="video__info">
				<h3>{title}</h3>
				<p>
					{channel} •
					<span class="subSpan">
						<span className="Totalsubs">{subs}</span> Subscription
					</span>
					• {views} Views • {timestamp}
				</p>
				<p className="desc">{description}</p>
			</div>
		</div>
	);
}

export default SearchItems;
