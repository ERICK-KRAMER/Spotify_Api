import axios from "axios";
import { Root } from "../types/songs";

class Spotify {
  private client_id: string = import.meta.env.VITE_CLIENT_ID;
  private client_secret: string = import.meta.env.VITE_CLIENT_SECRET;
  private token: string | null = null;

  private getAuthOptions() {
    const authHeader = 'Basic ' + btoa(this.client_id + ':' + this.client_secret);

    return {
      method: 'POST',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: 'grant_type=client_credentials'
    };
  }

  private async Authorization() {
    try {
      const response = await axios(this.getAuthOptions());
      this.token = response.data.access_token;
    } catch (error) {
      console.log('Error fetching the token:', error);
    }
  }

  private getRequestOptions() {
    return {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + this.token,
        'Content-Type': 'application/json'
      },
    };
  }

  async Albuns(id: string) {
    try {
      await this.Authorization();
      const response = await fetch(`https://api.spotify.com/v1/albums/${id}`, this.getRequestOptions());
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async Categories() {
    try {
      await this.Authorization();
      const response = await fetch('https://api.spotify.com/v1/browse/categories?locale=pt-Br&limit=20', this.getRequestOptions());
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async Search(query: string, type: string) {
    try {
      await this.Authorization();
      const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`, this.getRequestOptions());
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async Recommendations(): Promise<Root> {
    try {
      await this.Authorization();
      console.log(this.token);
      const response = await fetch('https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK', this.getRequestOptions());
      const data = await response.json();
      return data as Root;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export { Spotify };
