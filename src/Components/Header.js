import React, { useState } from 'react';
// import { ReactComponent as YoutubeLogo } from '../Images/youtubeLogo.svg';
import './CSS/Header.css';
import MainLogo from '../Images/mainLogo.png';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

export default function Header() {
	const [ inputSearch, setInputSearch ] = useState('');
	return (
		<div className="header">
			<div className="header__left">
				<MenuIcon className="Icons" />
				<Link to="/">
					<img className="logo" src={MainLogo} alt=" Youtube Img" />
				</Link>
			</div>
			<div className="header__middle">
				<input
					// onKeyDown={(e) => setInputSearch(e.target.value)}
					onChange={(e) => setInputSearch(e.target.value)}
					value={inputSearch}
					placeholder="Search"
					type="text"
					name="search"
					id="search"
				/>
				<Link to={`/search/${inputSearch}`}>
					<SearchIcon className="search__button" />
				</Link>
			</div>
			<div className="header__right">
				<VideoCallIcon className="Icons" />
				<AppsIcon className="Icons" />
				<NotificationsIcon className="Icons" />
				<AccountCircleIcon className="Icons" />
			</div>
		</div>
	);
}
