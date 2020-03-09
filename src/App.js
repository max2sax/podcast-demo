import React from 'react';
import logo from './logo.svg';
import './App.css';
import PodcastList from './PodcastList.js';
import SearchBar from './SearchBar.js';
import { Media, Player, controls  } from 'react-media-player'
const { PlayPause, MuteUnmute  } = controls


function App() {
    // TODO: add podcast objects to state here
    // this way we can update the podcast list from the search bar
    // const [podcasts, setPodcasts] = React.useState([]);

    const [selectedPodcastId, setSelectedPodcast] = React.useState('unique-podcast-id-1');
    const [podcasts, setPodcasts] = React.useState(
    [
       {
            ID: 'unique-podcast-id-1',
            Name: 'Planet Money',
            FeedURL: 'https://www.npr.org/rss/podcast.php?id=510289',
            CoverURL: 'https://media.npr.org/assets/img/2018/08/02/npr_planetmoney_podcasttile_sq-7b7fab0b52fd72826936c3dbe51cff94889797a0.jpg?s=1400',
            Episodes: [
                {
                    ID: 'unique-podcast-1-episode-id-1',
                    Name: '#977: Where\'s The Vaccine?',
                    MediaSource: 'https://play.podtrac.com/npr-510289/edge1.pod.npr.org/anon.npr-podcasts/podcast/npr/pmoney/2020/03/20200306_pmoney_pmpod977-9d21f76b-71be-4fcc-8fd7-f6ee5d75ad81.mp3?awCollectionId=510289&awEpisodeId=812943907&orgId=1&topicId=1031&aggIds=812054919&d=1236&p=510289&story=812943907&t=podcast&e=812943907&size=19747326&ft=pod&f=510289'
                },
                {
                    ID: 'unique-podcast-1-episode-id-2',
                    Name: 'Episode 2',
                    MediaURL: ''
                },
                {
                    ID: 'unique-podcast-1-episode-id-3',
                    Name: 'Episode 3',
                    MediaURL: ''
                }
            ]
        },
        {
            ID: 'unique-podcast-id-2',
            Name: 'Planet Money',
            FeedURL: 'https://www.npr.org/rss/podcast.php?id=510289',
            CoverURL: 'https://media.npr.org/assets/img/2018/08/02/npr_planetmoney_podcasttile_sq-7b7fab0b52fd72826936c3dbe51cff94889797a0.jpg?s=1400',
            Episodes: [
                {
                    ID: 'unique-podcast-2-episode-id-1',
                    Name: 'Episode 1'
                },
                {
                    ID: 'unique-podcast-2-episode-id-2',
                    Name: 'Episode 2'
                },
                {
                    ID: 'unique-podcast-2-episode-id-3',
                    Name: 'Episode 3'
                }
            ]
         }
    ]);

  return (
    <div className="App">
      <header className="App-header">
        <PodcastList
          podcasts={podcasts}
          updateSelectedPodcast={setSelectedPodcast}
        />
        <img
          src={podcasts[0].CoverURL}
          className="App-logo"
          alt="logo"
        />
          <Media>
            <div className="media">
              <div className="media-player">
                <Player src={podcasts[0].Episodes[0].MediaUrl} />
              </div>
              <div className="media-controls">
                <PlayPause />
                <MuteUnmute />
              </div>
            </div>
          </Media>
      </header>
    </div>
  );
}

export default App;
