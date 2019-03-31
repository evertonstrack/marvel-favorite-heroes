import CryptoJS from 'crypto-js';

export class MarvelAPI {

  constructor() {

    this.API_URL = 'https://gateway.marvel.com/v1/public/';
    this.PUBLIC_KEY = `${process.env.REACT_APP_PUBLIC_KEY}`;
    this.PRIVATE_KEY = `${process.env.REACT_APP_PRIVATE_KEY}`;
  }

  handleErrors(res) {

    if( !res.ok ) {
      throw res.status;
    }
    return res;
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

  getAuthenticationParams() {

    const ts = new Date().getTime();
    return {
      ts,
      apikey: this.PUBLIC_KEY,
      hash: this.getHash(ts)
    }
  }

  getHash(ts) {

    const hash = CryptoJS.MD5(ts + this.PRIVATE_KEY + this.PUBLIC_KEY).toString();
    return hash;
  }

  async getHeroByName(name) {

    const url = new URL(`${this.API_URL}characters`);
    const query = {
      name,
      ...this.getAuthenticationParams()
    }

    Object.keys(query).forEach(key => 
      url.searchParams.append(key, query[key]));

    const hero = await fetch(url, this.params)
                        .then(res => this.handleErrors(res))
                        .then(res => res.json())
                        .then(res => this.transformHeroResponse(res.data.results[0]));
                      
    return hero;
  }

  getStoriesByHero(heroId, limit = 5, orderBy = 'modified') {

    const url = new URL(`${this.API_URL}characters/${heroId}/comics`);
    const query = {
      limit,
      orderBy,
      ...this.getAuthenticationParams()
    }

    Object.keys(query).forEach(key => 
      url.searchParams.append(key, query[key]));

    return fetch(url, this.params)
            .then(res => this.handleErrors(res))
            .then(res => res.json());
  }

  transformHeroResponse(response) {

    return response ? {
      id: response.id,
      name: response.name,
      description: response.description,
      image: `${response.thumbnail.path}.${response.thumbnail.extension}`,
      urlWiki: response.urls[1].url,
      stories: []
    } : {};
  }
}