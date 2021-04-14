import './App.css';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import VideoContents from './Components/VideoContents';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './Components/SearchPage';

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route path="/search">
						<div className="searchArea">
							<SideBar />
							<SearchPage />
						</div>
					</Route>
					<Route path="/">
						<div className="mainContent">
							<SideBar />
							<VideoContents />
						</div>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
