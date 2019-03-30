import React, { Component } from 'react';
import { MarvelAPI } from '../../services/MarvelAPI';
import { Hero } from '../../components/Hero';
import './heroes.scss';


const Loading = () => (
  <div className="heroes-loading">
    <h3>Searching for Heroes.. </h3>
    <span className="heroes-loading__loader"></span>
  </div>
);

class Heroes extends Component {

  constructor(props) {
    super(props);

    this.service = new MarvelAPI();
    this.loadHeroStories = this.loadHeroStories.bind(this);

    // Get data from local storage
    const heroes = JSON.parse(localStorage.getItem('heroes')) || null;

    this.state = {
      heroes: heroes,
      isLoading: !heroes ? true : false
    }
  }

  componentDidMount() {
    
    if( !this.state.heroes ) {

      this.getHeroes()
        .then(heroes => {

          this.setState(prevState => ({
            heroes,
            isLoading: false
          }), () => {
            Object.values(heroes).forEach(hero => {
              this.loadHeroStories(hero.id)
            });
          })
        });
    }
  }

  async getHeroes() {

    const captain = await this.service.getHeroByName('captain america');
    const wolverine = await this.service.getHeroByName('wolverine');
    const spider = await this.service.getHeroByName('spider-man');

    return {
      [captain.id]: captain,
      [wolverine.id]: wolverine,
      [spider.id]: spider,
    };
  }

  loadHeroStories(heroId) {

    this.service.getSotriesByHero(heroId)
        .then(res => {
          this.setState(prevState => ({
            heroes: {
              ...prevState.heroes,
              [heroId]: {
                ...prevState.heroes[heroId],
                stories: res.data.results
              }
            }
          }), () => {
            // Save data to local storage
            localStorage.setItem('heroes', JSON.stringify(this.state.heroes));
          });
        });
  }

  render() {

    const { heroes, isLoading } = this.state

    return (

      <section className="content">
        <header className="heroes-title">
          <h2 className="animated fadeInDown fast">
            <span className="small ">Hi! My name is Everton and these are </span>
            <span>My Favorite Heroes</span>
          </h2>
        </header>
        <div className="heroes">
          { isLoading 
            ? <Loading />
            : Object.values(heroes).map(hero => <Hero key={hero.id} {...hero} /> )
          }
        </div>
      </section>
    );
  }
}

export { Heroes };
