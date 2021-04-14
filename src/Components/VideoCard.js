import { Avatar } from '@material-ui/core';
import React from 'react';
import './CSS/VideoCard.css';

function VideoCard({ image, title, channel, views, timestamp, channelimg, time }) {
	return (
		<div className="video__card">
			<span className="time">{time}</span>
			<img src={image} alt="Thumbnail" />
			<div className="videocard__info">
				<Avatar className="videocard__avatar" alt={channel} src={channelimg} />
				<div className="video__text">
					<h4>{title}</h4>
					<p>{channel}</p>
					<p>
						{views} Views • {timestamp}
					</p>
				</div>
			</div>
		</div>
	);
}

export default VideoCard;
