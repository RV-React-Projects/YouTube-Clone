import React from 'react';
import './CSS/Sidebar.css';
import SidebarButtons from './SidebarButtons';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';
import EmojiEventsRoundedIcon from '@material-ui/icons/EmojiEventsRounded';
import SportsEsportsRoundedIcon from '@material-ui/icons/SportsEsportsRounded';
import MovieCreationRoundedIcon from '@material-ui/icons/MovieCreationRounded';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TheatersIcon from '@material-ui/icons/Theaters';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import EcoIcon from '@material-ui/icons/Eco';
import SportsFootballIcon from '@material-ui/icons/SportsFootball';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';

function SideBar() {
	return (
		<div className="sidebar">
			<SidebarButtons title="Home" Icon={HomeIcon} className="FirstButton" />
			<SidebarButtons title="Explore" Icon={ExploreIcon} Color="primary" />
			<SidebarButtons title="Subscription" Icon={SubscriptionsIcon} Color="secondary" />
			<hr />
			<h4>Best of YouTube</h4>
			<SidebarButtons title="Library" Icon={VideoLibraryIcon} Color="error" />
			<SidebarButtons title="History" Icon={HistoryIcon} Color="action" />
			<SidebarButtons title="Watch Later" Icon={WatchLaterIcon} />
			<SidebarButtons title="Liked Videos" Icon={ThumbUpAltIcon} Color="primary" />
			<SidebarButtons title="Music" Icon={MusicNoteRoundedIcon} />
			<SidebarButtons title="Sports" Icon={EmojiEventsRoundedIcon} />
			<SidebarButtons title="Gaming" Icon={SportsEsportsRoundedIcon} Color="error" />
			<SidebarButtons title="Films" Icon={MovieCreationRoundedIcon} Color="primary" />
			<hr />
			<h4>More From YouTube</h4>
			<SidebarButtons title="YouTube Premiums" Icon={YouTubeIcon} Color="error" />
			<SidebarButtons title="Films" Icon={TheatersIcon} />
			<SidebarButtons title="Games" Icon={VideogameAssetIcon} />
			<SidebarButtons title="Live" Icon={LiveTvIcon} Color="primary" />
			<SidebarButtons title="Fashon & Beauty" Icon={BeenhereIcon} />
			<SidebarButtons title="Learning" Icon={EcoIcon} Color="error" />
			<SidebarButtons title="Sports" Icon={SportsFootballIcon} />
			<hr />
			<SidebarButtons title="Settings" Icon={SettingsIcon} Color="disabled" />
			<SidebarButtons title="Reoprt History" Icon={FlagIcon} Color="error" />
			<SidebarButtons title="Help" Icon={HelpIcon} Color="primary" />
			<SidebarButtons title="Send Feedback" Icon={FeedbackIcon} />
		</div>
	);
}

export default SideBar;
