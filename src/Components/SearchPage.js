import React from 'react';
import './CSS/SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';
import SearchItems from './SearchItems';

function SearchPage() {
	const AllContents = [
		{
			image:
				'https://i.ytimg.com/vi/v7jiFpX5SU4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2lZ90ARksNL7GeYhUPnvtn6YD-w',
			title: 'Suno Na Sangemarmar Full Song Youngistaan | Arijit Singh | Jackky Bhagnani, Neha Sharma',
			time: '2:29',
			views: '34,060,860 ',
			timestamp: '7 years ago',
			channel: 'T-Series',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwnhEWQNuA-mjqxLqnxia6OrJooWWGnyn8KCw3yNbriQ=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/dRpc9picJqo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJTlJDHwOcNFvA92wsIL6mhNekbg',
			title: 'Python Tutorial for Beginners - Full Course in 11 Hours [2021]',
			time: '11:29',
			views: '89',
			timestamp: 'Apr 10, 2021',
			channel: 'Iballdesigningdeveloper',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwngecWq4fhbnCfTxqppJwRnp-lseQX00xoANEj2z=s48-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/bCk1-llBaHE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA8kwKKfwkRj-GNzR7G5CQM0tuHfA',
			title: 'GODZILLA VS KONG 4K Trailer (2021)',
			time: '2:45',
			views: '4,962,972',
			timestamp: '2 months ago',
			channel: 'FRESH Movie Trailers',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwnh_KVHlg2_OtXU6EA5V42m2U6ELMbhO-2F_LpzqHQ=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/-2X1lWQCWoc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7GyziFBQOGvJ2X08kNY_aTHNuiQ',
			title: 'Range Rover Sport EXTREME Climb 999 Steps | Dragon Challenge | Complete Video ',
			time: '10:01',
			views: '25,575,755',
			timestamp: '3 years ago',
			channel: 'YOUCAR',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwni-NdGo2gAbn3FTTct_H5u3oVvhibL0CelXUIi-Xg=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/594ITLAyL1o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDexrOOP1MbrUXdgHcmhVwtxjHmug',
			title: 'हिंदी Oggy and the Cockroaches - Oggy Goes Green (S04E32) - Hindi Cartoons for Kids',
			time: '6:47',
			views: '25,575,755',
			timestamp: '1 years ago',
			channel: 'Oggy Hindi',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwnhDE6imN3EcXWpZ7oH_afJXsYW2-U1pRNm4_lJo=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/qh-yxk-qAOc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASbJ0nGB-1xG0sz1Xxi_1ZKms42w',
			title: 'Unforgettable Goals Football #2',
			time: '9:51',
			views: '7,630,328',
			timestamp: '3 weeks ago',
			channel: 'TKHD',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwni9Kb70j90xSwFzQtbjlq4vR4ZC0HB61Wd71sIDiA=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/Kh9aPWCCg6s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBdPy6ZRBcxNAZ2MAAfaKVRUsXk2Q',
			title: 'Dr. Gulati Gets Flirty With Anushka Sharma | The Kapil Sharma Show | SET India Rewind',
			time: '11:23',
			views: '16,458,765',
			timestamp: '1 year ago',
			channel: 'SET India',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwniqHMFoLXPnpESjBJVEHk5k3t6j8NLO5SHM1PCWqQ=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/zUOWTV8dujM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCWy9KXzPbkfdvMUV6pBNeoicfsqA',
			title: '2021 Mercedes S-Class Long - Sound, Interior, Exterior in detail by RoCars  8 minutes, 10 seconds  views',
			time: '8:10',
			views: '2,796,014',
			timestamp: '1 month ago',
			channel: 'RoCars',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwnhHm1QJqS_MFf4t4NBU5mfya7YOJK40nxRQaCpLCA=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/ziGbylaem7w/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBaXLLngBqhCLvNLrmwwMlFDEolOA',
			title: 'ARIJIT SINGH BEST HEART TOUCHING SONGS | TOP 20 hits SONGS/ Hindi songs Jukebox',
			time: '1:29:00',
			views: '1,260,500',
			timestamp: '1 year ago',
			channel: 'QueenFox Entertainment',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwnjnRqdonyxjhwLnufJoq3yLWpGd2Yhu7h1kLzPJ=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/4HHrtdvvPv4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDn84geotwfjw7gZd-CxhXExqa_YQ',
			title: 'Johnny Lever के साथ हो रही हैं Sapna की Comedy Talks | The Kapil Sharma Show Season 2 | Best Moments',
			time: '11:02',
			views: '1,454,858',
			timestamp: '1 day ago',
			channel: 'SET India',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwniqHMFoLXPnpESjBJVEHk5k3t6j8NLO5SHM1PCWqQ=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/k2qgadSvNyU/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAmBREItHdgjGfABZCf67FrbvIdfQ',
			title: 'Dua Lipa - New Rules (Official Music Video)',
			time: '3:45',
			views: '2,397,557,171',
			timestamp: '3 years ago',
			channel: 'Dua Lipa',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwnhDZXpXUoc7YNL7h7j6Y4o6lZnEPuWDy2lbuBO4NQ=s88-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/z3JecpWZ-m0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjOHgSthdwERz-QRsnuNqBjXc3WA',
			title: 'The funniest thing ever seen on a cricket field?',
			time: '2:21',
			views: '3,002,452',
			timestamp: '2 weeks ago',
			channel: 'cricket.com.au',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwnjdwk_H9e0CxY8VlVJ0zibRkwlsUkhH1WlxSQRpz58=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/858YA9sSWqg/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2tjRaq_WV5nDZf5ZCMCyeVNEPdQ',
			title: 'lut gaye full song: teri nazron ne kuch aisa jadoo kiya lut gaye|aankh uthi mohabbat ne angrai lee',
			time: '4:58',
			views: '122,933,294',
			timestamp: '1 month ago',
			channel: 'Sonu',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwni-VXIY5QQZjkUpuPITfmvVousWoLmhQQvBf17Piw=s88-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/tI1JGPhYBS8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKH2QeySDp3XMnjurlzn101dgJoQ',
			title: 'Army of the Dead | Official Trailer | Netflix',
			time: '3:03',
			views: '2,483,249',
			timestamp: '16 hours ago',
			channel: 'Netflix',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwni_LdnpDi-SOIhjp4Kxo2l_yVBoYsfdDCpUM5VDzg=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/eGDes92Uop4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByyloIHzV8r_5Q2PrNOrrK00aQVg',
			title: '(2021) New Released Hindi Dubbed Official Movie with English/Arabic Subtitles | Naga Chaitanya',
			time: '02:19:00',
			views: '14,420,135',
			timestamp: '3 days ago',
			channel: 'Latest Cinema',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwngv1zqCF6bxr_DOTmcx8W3BzRRXJuAShUAjCJb_Ew=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/h9Am4CYaLng/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD_dJ87OMmhQX58Lc2mEaw9EfINtQ',
			title: '#SarangaDariya | Lovestory Songs | Naga Chaitanya | Sai Pallavi | Sekhar Kammula | Pawan Ch',
			time: '03:51',
			views: '132,427,839',
			timestamp: '1 month ago',
			channel: 'Aditya Music',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwnjs39FzjzREzTGZS6kP0YEWRHsNVnAjQ2tYRoGung=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/ueVwnCDEbwc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGNb6HFOaAGjdLRtYlbjO2I8yiig',
			title: 'Maharashtra Lockdown 2.0: Whats Open, Whats Closed For Next 15 Days? | India Today Special ',
			time: '16:00',
			views: '161 ',
			timestamp: 'Toady',
			channel: 'India Today',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwnh5cz8o5VajalYlE6SAOp9lWpOyaZcKuI6Sun_sPw=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/Lk2oDvoonUc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDw6_Ng8DfcF7yPAEGssRn2UtD9dA',
			title: 'Introducing Pushpa Raj | Allu Arjun | Pushpa | Rashmika | Fahadh Faasil | DSP | Sukumar',
			time: '01:21',
			views: '42,669,016 ',
			timestamp: '3 days ago',
			channel: ' Mythri Movie Makers',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwnhfqGQHrFvrk4o3rz-Ostzqyf2mwjwMQw9GLHUJbA=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/7M5NY_PF7gk/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArPGM5yuS44MGk-hNyVC0ha7jxdA',
			title: 'Tzuyu beautiful | view |Archery match | 2016|',
			time: '00:43',
			views: '479,211',
			timestamp: '2 years ago',
			channel: 'Top Gamer',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwnj_Z9FfRgYvTjuIbbK2g65i0Z49H7F4eH8kFG35=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/v7jiFpX5SU4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2lZ90ARksNL7GeYhUPnvtn6YD-w',
			title: 'Suno Na Sangemarmar Full Song Youngistaan | Arijit Singh | Jackky Bhagnani, Neha Sharma',
			time: '2:29',
			views: '34,060,860 ',
			timestamp: '7 years ago',
			channel: 'T-Series',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwnhEWQNuA-mjqxLqnxia6OrJooWWGnyn8KCw3yNbriQ=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/dRpc9picJqo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJTlJDHwOcNFvA92wsIL6mhNekbg',
			title: 'Python Tutorial for Beginners - Full Course in 11 Hours [2021]',
			time: '11:29',
			views: '89',
			timestamp: 'Apr 10, 2021',
			channel: 'Iballdesigningdeveloper',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwngecWq4fhbnCfTxqppJwRnp-lseQX00xoANEj2z=s48-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/bCk1-llBaHE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA8kwKKfwkRj-GNzR7G5CQM0tuHfA',
			title: 'GODZILLA VS KONG 4K Trailer (2021)',
			time: '2:45',
			views: '4,962,972',
			timestamp: '2 months ago',
			channel: 'FRESH Movie Trailers',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwnh_KVHlg2_OtXU6EA5V42m2U6ELMbhO-2F_LpzqHQ=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/-2X1lWQCWoc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7GyziFBQOGvJ2X08kNY_aTHNuiQ',
			title: 'Range Rover Sport EXTREME Climb 999 Steps | Dragon Challenge | Complete Video ',
			time: '10:01',
			views: '25,575,755',
			timestamp: '3 years ago',
			channel: 'YOUCAR',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwni-NdGo2gAbn3FTTct_H5u3oVvhibL0CelXUIi-Xg=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/594ITLAyL1o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDexrOOP1MbrUXdgHcmhVwtxjHmug',
			title: 'हिंदी Oggy and the Cockroaches - Oggy Goes Green (S04E32) - Hindi Cartoons for Kids',
			time: '6:47',
			views: '25,575,755',
			timestamp: '1 years ago',
			channel: 'Oggy Hindi',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwnhDE6imN3EcXWpZ7oH_afJXsYW2-U1pRNm4_lJo=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/qh-yxk-qAOc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLASbJ0nGB-1xG0sz1Xxi_1ZKms42w',
			title: 'Unforgettable Goals Football #2',
			time: '9:51',
			views: '7,630,328',
			timestamp: '3 weeks ago',
			channel: 'TKHD',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwni9Kb70j90xSwFzQtbjlq4vR4ZC0HB61Wd71sIDiA=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/Kh9aPWCCg6s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBdPy6ZRBcxNAZ2MAAfaKVRUsXk2Q',
			title: 'Dr. Gulati Gets Flirty With Anushka Sharma | The Kapil Sharma Show | SET India Rewind',
			time: '11:23',
			views: '16,458,765',
			timestamp: '1 year ago',
			channel: 'SET India',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwniqHMFoLXPnpESjBJVEHk5k3t6j8NLO5SHM1PCWqQ=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/zUOWTV8dujM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCWy9KXzPbkfdvMUV6pBNeoicfsqA',
			title: '2021 Mercedes S-Class Long - Sound, Interior, Exterior in detail by RoCars  8 minutes, 10 seconds  views',
			time: '8:10',
			views: '2,796,014',
			timestamp: '1 month ago',
			channel: 'RoCars',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwnhHm1QJqS_MFf4t4NBU5mfya7YOJK40nxRQaCpLCA=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/ziGbylaem7w/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBaXLLngBqhCLvNLrmwwMlFDEolOA',
			title: 'ARIJIT SINGH BEST HEART TOUCHING SONGS | TOP 20 hits SONGS/ Hindi songs Jukebox',
			time: '1:29:00',
			views: '1,260,500',
			timestamp: '1 year ago',
			channel: 'QueenFox Entertainment',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwnjnRqdonyxjhwLnufJoq3yLWpGd2Yhu7h1kLzPJ=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/4HHrtdvvPv4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDn84geotwfjw7gZd-CxhXExqa_YQ',
			title: 'Johnny Lever के साथ हो रही हैं Sapna की Comedy Talks | The Kapil Sharma Show Season 2 | Best Moments',
			time: '11:02',
			views: '1,454,858',
			timestamp: '1 day ago',
			channel: 'SET India',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwniqHMFoLXPnpESjBJVEHk5k3t6j8NLO5SHM1PCWqQ=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/k2qgadSvNyU/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAmBREItHdgjGfABZCf67FrbvIdfQ',
			title: 'Dua Lipa - New Rules (Official Music Video)',
			time: '3:45',
			views: '2,397,557,171',
			timestamp: '3 years ago',
			channel: 'Dua Lipa',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwnhDZXpXUoc7YNL7h7j6Y4o6lZnEPuWDy2lbuBO4NQ=s88-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/z3JecpWZ-m0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjOHgSthdwERz-QRsnuNqBjXc3WA',
			title: 'The funniest thing ever seen on a cricket field?',
			time: '2:21',
			views: '3,002,452',
			timestamp: '2 weeks ago',
			channel: 'cricket.com.au',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwnjdwk_H9e0CxY8VlVJ0zibRkwlsUkhH1WlxSQRpz58=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/858YA9sSWqg/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2tjRaq_WV5nDZf5ZCMCyeVNEPdQ',
			title: 'lut gaye full song: teri nazron ne kuch aisa jadoo kiya lut gaye|aankh uthi mohabbat ne angrai lee',
			time: '4:58',
			views: '122,933,294',
			timestamp: '1 month ago',
			channel: 'Sonu',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwni-VXIY5QQZjkUpuPITfmvVousWoLmhQQvBf17Piw=s88-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/tI1JGPhYBS8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKH2QeySDp3XMnjurlzn101dgJoQ',
			title: 'Army of the Dead | Official Trailer | Netflix',
			time: '3:03',
			views: '2,483,249',
			timestamp: '16 hours ago',
			channel: 'Netflix',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwni_LdnpDi-SOIhjp4Kxo2l_yVBoYsfdDCpUM5VDzg=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/eGDes92Uop4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByyloIHzV8r_5Q2PrNOrrK00aQVg',
			title: '(2021) New Released Hindi Dubbed Official Movie with English/Arabic Subtitles | Naga Chaitanya',
			time: '02:19:00',
			views: '14,420,135',
			timestamp: '3 days ago',
			channel: 'Latest Cinema',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwngv1zqCF6bxr_DOTmcx8W3BzRRXJuAShUAjCJb_Ew=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/h9Am4CYaLng/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD_dJ87OMmhQX58Lc2mEaw9EfINtQ',
			title: '#SarangaDariya | Lovestory Songs | Naga Chaitanya | Sai Pallavi | Sekhar Kammula | Pawan Ch',
			time: '03:51',
			views: '132,427,839',
			timestamp: '1 month ago',
			channel: 'Aditya Music',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwnjs39FzjzREzTGZS6kP0YEWRHsNVnAjQ2tYRoGung=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/ueVwnCDEbwc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGNb6HFOaAGjdLRtYlbjO2I8yiig',
			title: 'Maharashtra Lockdown 2.0: Whats Open, Whats Closed For Next 15 Days? | India Today Special ',
			time: '16:00',
			views: '161 ',
			timestamp: 'Toady',
			channel: 'India Today',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwnh5cz8o5VajalYlE6SAOp9lWpOyaZcKuI6Sun_sPw=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/Lk2oDvoonUc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDw6_Ng8DfcF7yPAEGssRn2UtD9dA',
			title: 'Introducing Pushpa Raj | Allu Arjun | Pushpa | Rashmika | Fahadh Faasil | DSP | Sukumar',
			time: '01:21',
			views: '42,669,016 ',
			timestamp: '3 days ago',
			channel: ' Mythri Movie Makers',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwnhfqGQHrFvrk4o3rz-Ostzqyf2mwjwMQw9GLHUJbA=s68-c-k-c0x00ffffff-no-rj'
		},
		{
			image:
				'https://i.ytimg.com/vi/7M5NY_PF7gk/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArPGM5yuS44MGk-hNyVC0ha7jxdA',
			title: 'Tzuyu beautiful | view |Archery match | 2016|',
			time: '00:43',
			views: '479,211',
			timestamp: '2 years ago',
			channel: 'Top Gamer',
			channelimg: 'https://yt3.ggpht.com/ytc/AAUvwnj_Z9FfRgYvTjuIbbK2g65i0Z49H7F4eH8kFG35=s68-c-k-c0x00ffffff-no-rj'
		}
	];
	return (
		<div className="searchPage">
			<div className="filterArea">
				<h3>
					<TuneIcon /> <span> Filter</span>
				</h3>
			</div>
			<hr />

			{AllContents.map((data) => (
				<SearchItems
					image={data.image}
					title={data.title}
					channel={data.channel}
					subs={data.views}
					views={data.views}
					timestamp={data.timestamp}
					description={data.title}
				/>
			))}
		</div>
	);
}

export default SearchPage;
