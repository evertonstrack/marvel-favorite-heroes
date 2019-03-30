import CryptoJS from 'crypto-js';

export class MarvelAPI {

  constructor() {

    this.API_URL = 'http://gateway.marvel.com/v1/public/';
    this.PUBLIC_KEY = `${process.env.REACT_APP_PUBLIC_KEY}`;
    this.PRIVATE_KEY = `${process.env.REACT_APP_PRIVATE_KEY}`;
  }

  get params() {

    return {
      method: 'GET',
      Headers: { 
        'Accept-Encoding':'gzip',
        'Content-type' : 'application/json'
      }
    };
  }

  transformResponse(response) {

    console.log('API HERO', response);

    return {
      id: response.id,
      name: response.name,
      description: response.description,
      image: `${response.thumbnail.path}.${response.thumbnail.extension}`,
      urlWiki: response.urls[1].url,
      stories: []
    }
  }

  getAuthenticationParams(ts) {

    return {
      ts: ts,
      apikey: this.PUBLIC_KEY,
      hash: this.getHash(ts)
    }
  }

  getHash(ts) {

    const hash = CryptoJS.MD5(ts + this.PRIVATE_KEY + this.PUBLIC_KEY).toString();
    return hash;
  }

  async getHeroByName(heroName) {

    const url = new URL(`${this.API_URL}characters`);
    const ts = new Date().getTime();
    const query = {
      name: heroName,
      ...this.getAuthenticationParams(ts)
    }

    Object.keys(query).forEach(key => 
      url.searchParams.append(key, query[key]));

    const hero = await fetch(url, this.params)
                        .then(res => res.json())
                        .then(res => this.transformResponse(res.data.results[0]));
    return hero;
  }

  getSotriesByHero(heroId) {

    const url = new URL(`${this.API_URL}characters/${heroId}/comics`);
    const ts = new Date().getTime();
    const query = {
      limit: 5,
      orderBy: 'modified',
      ...this.getAuthenticationParams(ts)
    }

    Object.keys(query).forEach(key => 
      url.searchParams.append(key, query[key]));

    return fetch(url, this.params)
      .then(res => res.json())
      .catch(err => console.log(err));
  }
}