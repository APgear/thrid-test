const express = require('express');
// const expressLayouts = require ('express-ejs-layouts');
const app = express();

//gunakan ejs
app.set('view engine', 'ejs');
// app.use(exspressLayouts);
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/Program-Keahlian', (req, res) => {
  res.render('Program-Keahlian');
});

app.get('/Teknik-Elektronika-Industri', (req, res) => {
    res.render('Teknik-Elektronika-Industri');
  });

  app.get('/Akutansi-Keuangan-Lembaga', (req, res) => {
    res.render('Akutansi-Keuangan-Lembaga');
  });

  app.get('/Teknik-Komputer-jaringan', (req, res) => {
    res.render('Teknik-Komputer-jaringan');
  });

  app.get('/Teknik-Kelistrikan', (req, res) => {
    res.render('Teknik-Kelistrikan');
  });

  app.get('/Teknik-Mesin', (req, res) => {
    res.render('Teknik-Mesin');
  });

  app.get('/Profil', (req, res) => {
    res.render('Profil');
  });
  app.get('/Visi-Dan-Misi-Sekolah', (req, res) => {
    res.render('Visi-Dan-Misi-Sekolah');
  });
  app.get('/Sejarah-Sekolah', (req, res) => {
    res.render('Sejarah-Sekolah');
  });
  app.get('/Struktur-Organisasi', (req, res) => {
    res.render('Struktur-Organisasi');
  });
  app.get('/GURU', (req, res) => {
    res.render('GURU');
  });
  app.get('/Program-Sekolah', (req, res) => {
    res.render('Program-Sekolah');
  });
  app.get('/Program-SMK-Pusat-Keunggulan', (req, res) => {
    res.render('Program-SMK-Pusat-Keunggulan');
  });
  app.get('/Program-Business-Center', (req, res) => {
    res.render('Program-Business-Center');
  });
  app.get('/Hubin-Dan-BKK', (req, res) => {
    res.render('Hubin-Dan-BKK');
  });
  app.get('/Kegiatan-Sekolah', (req, res) => {
    res.render('Kegiatan-Sekolah');
  });
  app.get('/PPDB', (req, res) => {
    res.render('PPDB');
  });
  app.get('/MOPD', (req, res) => {
    res.render('MOPD');
  });
  app.get('/Kegiatan-Kesiswaan', (req, res) => {
    res.render('Kegiatan-Kesiswaan');
  });
  app.get('/Kegiatan-OSIS', (req, res) => {
    res.render('Kegiatan-OSIS');
  });
  app.get('/Ekstrakulikuler', (req, res) => {
    res.render('Ekstrakulikuler');
  });
  app.get('/OSIS', (req, res) => {
    res.render('OSIS');
  });
  app.get('/MPK', (req, res) => {
    res.render('MPK');
  });
  app.get('/TDS', (req, res) => {
    res.render('TDS');
  });
  app.get('/PRAMUKA', (req, res) => {
    res.render('PRAMUKA');
  });
  app.get('/PASKIBRA', (req, res) => {
    res.render('PASKIBRA');
  });
  app.get('/FUTSAL', (req, res) => {
    res.render('FUTSAL');
  });
  app.get('/BKC', (req, res) => {
    res.render('BKC');
  });
  app.get('/SILAT', (req, res) => {
    res.render('SILAT');
  });
  app.get('/MARCHING-BAND', (req, res) => {
    res.render('MARCHING-BAND');
  });
  app.get('/ROHIS', (req, res) => {
    res.render('ROHIS');
  });
  app.get('/CMS', (req, res) => {
    res.render('CMS');
  });
  app.get('/BOLA-VOLI', (req, res) => {
    res.render('BOLA-VOLI');
  });
  app.get('/PMR', (req, res) => {
    res.render('PMR');
  });
  app.get('/Kerjasama', (req, res) => {
    res.render('kerjasama');
  });
  app.get('/Berita', (req, res) => {
    res.render('Berita');
  });
  app.get('/berita-1', (req, res) => {
    res.render('berita-1');
  });

app.listen(8000, () => {
  console.log(`Example app listening on port 8000`);
});