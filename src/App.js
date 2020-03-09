import React from 'react';
import logo from './logo.svg';
import './App.css';
import PodcastList from './PodcastList.js';
import SearchBar from './SearchBar.js';

function App() {
    // TODO: add podcast objects to state here
    // this way we can update the podcast list from the search bar
    // const [podcasts, setPodcasts] = React.useState([]);

    const [selectedPodcastId, setSelectedPodcast] = React.useState('unique-podcast-id-1');
    const [selectedEpisodeId, setSelectedEpisode] = React.useState('unique-podcast-1-episode-id-1');
    const [episodes, setEpisodes] = React.useState({
      'unique-podcast-1-episode-id-1': {
          ID: 'unique-podcast-1-episode-id-1',
          PodcastID: 'unique-podcast-id-1',
          Name: '#977: Where\'s The Vaccine?',
          MediaSource: 'https://play.podtrac.com/npr-510289/edge1.pod.npr.org/anon.npr-podcasts/podcast/npr/pmoney/2020/03/20200306_pmoney_pmpod977-9d21f76b-71be-4fcc-8fd7-f6ee5d75ad81.mp3'
      },
      'unique-podcast-1-episode-id-2': {
          ID: 'unique-podcast-1-episode-id-2',
          PodcastID: 'unique-podcast-id-1',
          Name: '#976: Terms Of Service',
          MediaURL: 'https://play.podtrac.com/npr-510289/edge1.pod.npr.org/anon.npr-podcasts/podcast/npr/pmoney/2020/03/20200305_pmoney_pmpod976_v2-4ad3d515-0cae-41a8-8cfc-bfad6937b9cd.mp3'
      },
      'unique-podcast-1-episode-id-3': {
          ID: 'unique-podcast-1-episode-id-3',
          PodcastID: 'unique-podcast-id-1',
          Name: '#975: Reparations In New Zealand',
          MediaURL: 'https://play.podtrac.com/npr-510289/edge1.pod.npr.org/anon.npr-podcasts/podcast/npr/pmoney/2020/02/20200228_pmoney_pmpod975-c3f3764e-ec69-4339-9d72-eb2938f866a0.mp3'
      },
      'unique-podcast-2-episode-id-1': {
          ID: 'unique-podcast-2-episode-id-1',
          PodcastID: 'unique-podcast-id-2',
          Name: '84: Max Stoiber on Finding Luck in Open Source',
          MediaURL: 'https://audio.simplecast.com/243d82e0.mp3'
      },
      'unique-podcast-2-episode-id-2': {
          ID: 'unique-podcast-2-episode-id-2',
          PodcastID: 'unique-podcast-id-2',
          Name: '83: David Khourshid on XState, Statecharts, and the Future of Designer—Coder Collaboration',
          MediaURL: 'https://audio.simplecast.com/dd8ac8f4.mp3'
      },
      'unique-podcast-2-episode-id-3': {
          ID: 'unique-podcast-2-episode-id-3',
          PodcastID: 'unique-podcast-id-2',
          Name: '82: Becca Bailey on Refactoring React Components',
          MediaURL: 'https://audio.simplecast.com/6e11cc41.mp3'
      }
    });
    const [podcasts, setPodcasts] = React.useState(
    [
       {
            ID: 'unique-podcast-id-1',
            Name: 'Planet Money',
            FeedURL: 'https://www.npr.org/rss/podcast.php?id=510289',
            CoverURL: 'https://media.npr.org/assets/img/2018/08/02/npr_planetmoney_podcasttile_sq-7b7fab0b52fd72826936c3dbe51cff94889797a0.jpg?s=1400',
            Episodes: [
            ]
        },
        {
            ID: 'unique-podcast-id-2',
            Name: 'React Podcast',
            FeedURL: 'https://www.npr.org/rss/podcast.php?id=510289',
            CoverURL: 'https://media.simplecast.com/podcast/image/6265/1550288890-artwork.jpg',
            Episodes: [
            ]
         }
    ]);

  return (
    <div className="App">
      <header className="App-header">
        <PodcastList
          podcasts={podcasts}
          episodes={episodes}
          updateSelectedPodcast={setSelectedPodcast}
          updateSelectedEpisode={setSelectedEpisode}
        />
        <img
          src={podcasts.find((pod) => {return pod.ID === selectedPodcastId}).CoverURL}
          className="App-logo"
          alt="logo"
        />
        <div className='media-player'>
          <label>{episodes[selectedEpisodeId].Name}</label>
          <audio controls
            src={episodes[selectedEpisodeId].MediaURL}
          >
            <source src={episodes[selectedEpisodeId].MediaURL} type='audio/mpeg' />
          </audio>
        </div>
      </header>
    </div>
  );
}

export default App;
