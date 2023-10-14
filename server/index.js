const express = require('express');
const app = express();
const port = 3001;
const unirest = require("unirest");
app.use(express.json());

app.get('/api/associations', (req, res) => {
    console.log("made it");
  const request = unirest("GET", "http://api.musixmatch.com/ws/1.1/album.tracks.get?album_id=57913525&page=1&page_size=100&apikey=a884aacecebef6d4f467f8a810341857");


  request.end(function (response) {
    if (response.error) throw new Error(response.error);
    // console.log('here is the resp ', response );
    res.send(response.body);
  });

});


app.post('/api/trending/:country/:chart', (req, res) => {
    console.log("made it ",req.params.country,req.params.chart);
    const params = req.params;
    const url = "https://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=a884aacecebef6d4f467f8a810341857&page=1&page_size=10&f_has_lyrics=1";
    const newUrl = url+"&country="+params.country+"&chart_name="+params.chart;
    console.log("new url ", newUrl);
  const request = unirest("GET", newUrl);


  request.end(function (response) {
    if (response.error) throw new Error(response.error);
    // console.log('here is the resp ', response );
    res.send(response.body);
  });

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});