const express = require('express');
const cors = require('cors');
const axios = require('axios');
const querystring = require('querystring');
const cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });



const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true, 
  }));
app.use(cookieParser());

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const redirect_uri =process.env.REDIRECT_URL;


app.get('/login',(req,res)=>{

      const redirect_url = encodeURIComponent(redirect_uri);
      const scope = 'user-read-private user-read-email user-top-read';
      const state = Math.random().toString(36).substring(2, 15);
      
  
      // Construct the Spotify authorization URL
      const authURL = `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_url}&state=${state}&show_dialog=true`;
      res.redirect(authURL);

});

app.get('/callback', async function (req, res) {
  const code = req.query.code || null;
  const state = req.query.state || null;

  if (state === null) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    try {
      const response = await axios.post('https://accounts.spotify.com/api/token', querystring.stringify({
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
        }
      });

      // Handle successful response here
      console.log(response.data);

      if(req.cookies.access_token){
        res.clearCookie('access_token');
        res.clearCookie('refresh_token');
      }
      
      res.cookie('access_token', response.data.access_token,{maxAge:3600000});
      res.cookie('refresh_token', response.data.refresh_token);
      res.redirect('http://localhost:5173/landingPage');
    } catch (error) {
      // Handle errors here
      console.error('Error retrieving access token:', error.message);
      res.status(500).send('Error retrieving access token');
    }
  }
});


app.get('/wrapper', async (req, res) => {
    try {  
        if (req.cookies.access_token) {
          const token = req.cookies.access_token;
          const [topTracks, topArtists] = await Promise.all([
            axios.get('https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=5&offset=0', {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }),
            axios.get('https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=5&offset=0', {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
          ]);
        
          const concatenatedResponse = {
            topTracks: topTracks.data.items,
            topArtists: topArtists.data.items
          };
            console.log(concatenatedResponse);
            res.status(200).send(concatenatedResponse);
            
            // Handle user data or further actions
        } else {
            const refresh_token = req.cookies.refresh_token;
            if (!refresh_token) {
                throw new Error('No refresh token available');
            }

            const url = 'https://accounts.spotify.com/api/token';
            const payload = {
                grant_type: 'refresh_token',
                refresh_token: refresh_token,
                client_id: client_id
            };
            
            const response = await axios.post(url, querystring.stringify(payload), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            if (!response.data.accessToken) {
                throw new Error('Failed to refresh token');
            }

            res.cookie('access_token', response.data.accessToken, { maxAge: 3600000 });
            res.clearCookie('refresh_token');
            res.cookie('refresh_token', response.data.refreshToken);

            // Reuse the earlier axios call to get user data using the new access token
            const [topTracks, topArtists] = await Promise.all([
              axios.get('https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=5&offset=0', {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              }),
              axios.get('https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=5&offset=0', {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              })
            ]);
          
            const concatenatedResponse = {
              topTracks: topTracks.data.items,
              topArtists: topArtists.data.items
            };
              console.log(concatenatedResponse);
              res.status(200).send(concatenatedResponse);
              
        }
    } catch (error) {
        console.error('Error occurred:', error);
        res.redirect('http://localhost:5173/mainPage');
    }
});




app.listen('3000', () => {
  console.log("listening on port 3000");
});
