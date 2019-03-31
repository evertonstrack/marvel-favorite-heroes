import React, { Component } from 'react';
import { MarvelAPI } from '../../services/MarvelAPI';
import { HeroesTemplate } from './Heroes.template';
import { scrollIt } from '../../utils/Scroll';


export class HeroesController extends Component {

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

    this.service.getStoriesByHero(heroId)
      .then(res => {

        this.setState(prevState => ({
          heroes: {
            ...prevState.heroes,
            [heroId]: {
              ...prevState.heroes[heroId],
              stories: res.data ? res.data.results : []
            }
          }
        }), () => {
          // Save data to local storage
          localStorage.setItem('heroes', JSON.stringify(this.state.heroes));
        });
      });
  }

  
  scrollDown() {

    const target = document.querySelector('.heroes');
    scrollIt(target);
  }

  render() {

    return (
      <HeroesTemplate onClick={this.scrollDown} {...this.state} />
    );
  }
}
