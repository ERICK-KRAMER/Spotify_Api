const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
//
const axios = require('axios');
//
exports.getToke = async (req, res) => {
  res.status(200).json({ tokens: CLIENT_ID, CLIENT_SECRET });
  //Route test
}

exports.GetTokenMusic = async (req, res) => {
  try {
    const { name } = req.params;

    // Autenticação para obter o token de acesso
    const authResponse = await axios.post(
      'https://accounts.spotify.com/api/token',
      'grant_type=client_credentials',
      {
        headers: {
          'Authorization': `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    const accessToken = authResponse.data.access_token;

    // Pesquisar uma faixa de música usando o nome fornecido
    const searchResponse = await axios.get('https://api.spotify.com/v1/search', {
      params: {
        q: name,
        type: 'track',
      },
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });


    res.json({ searchResult: searchResponse.data });
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

exports.GetTraksInformation = async (req, res) => {
  const { id } = req.params;
  try {
    // Autenticação para obter o token de acesso
    const authResponse = await axios.post(
      'https://accounts.spotify.com/api/token',
      'grant_type=client_credentials',
      {
        headers: {
          'Authorization': `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    const accessToken = authResponse.data.access_token;

    // Buscar informações sobre a faixa específica usando o ID
    const urlMusic = `https://api.spotify.com/v1/tracks/${id}`;
    const musicResponse = await axios.get(urlMusic, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    res.json({ musicInfo: musicResponse.data })
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ error: 'Erro inteiro no servidor' })
  }
}

exports.GetInformationArtist = async (req, res) => {
  const { artistId } = req.params;
  const urlArtist = `https://api.spotify.com/v1/artists/${artistId}`
  try {
    // Autenticação para obter o token de acesso
    const authResponse = await axios.post(
      'https://accounts.spotify.com/api/token',
      'grant_type=client_credentials',
      {
        headers: {
          'Authorization': `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    const accessToken = authResponse.data.access_token;

    const artistResponse = await axios.get(urlArtist, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });
    res.json({ artist: artistResponse.data })
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ error: "erro inteiro no servidor" })
  }
}

exports.topTraks = async (req, res) => {
  const { idArtist } = req.params;
  const urlTopTraks = `https://api.spotify.com/v1/artists/${idArtist}/top-tracks`;
  try {
    // Autenticação para obter o token de acesso
    const authResponse = await axios.post(
      'https://accounts.spotify.com/api/token',
      'grant_type=client_credentials',
      {
        headers: {
          'Authorization': `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    //
    const accessToken = authResponse.data.access_token;
    //
    const topTraks = await axios.get(urlTopTraks, {
      headers: {
        'Autorization': `Bearer ${accessToken}`,
      },
    });
    res.status(200).json({ topTraks: topTraks });
  } catch (error) {
    console.error({ Message: error });
    res.status(500).json({ error: "erro inteiro no servidor" });
  }
}