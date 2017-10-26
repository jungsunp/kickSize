const chance = require('chance')(123);
// const faker = require('faker');
const Promise = require('bluebird');
const toonavatar = require('cartoon-avatar');

const db = require('./server/db');
const { User, Sneaker } = require('./server/db/models/');

/* -----------  Set up User data ----------- */

const adminUser = () => {
  return User.create({
    email: 'admin@admin.admin',
    password: 'admin',
    isAdmin: true,
    name: 'Jung Park',
    height: 69,
    weight: 150,
    gender: 'male',
    photo: toonavatar.generate_avatar({gender: 'male'}),
  })
    .catch(console.error);
};


const numMaleUsers = 200;
const numFemaleUsers = 50;
const userEmails = chance.unique(chance.email, numMaleUsers + numFemaleUsers);

const randomMaleUser = () => {
  const bmi = Math.floor(Math.random() * 10) + 19; // Body Mass Index
  const height = Math.floor(Math.random() * 14) + 61;
  const weight = (bmi * height * height) / 730;

  return User.create({
    email: userEmails.pop(),
    password: chance.string(),
    name: chance.name({ gender: 'male' }),
    height,
    weight,
    gender: 'male',
    photo: toonavatar.generate_avatar({gender: 'male'}),
  })
    .catch(console.error);
};

const randomFemaleUser = () => {
  const bmi = Math.floor(Math.random() * 10) + 19; // Body Mass Index
  const height = Math.floor(Math.random() * 14) + 58;
  const weight = (bmi * height * height) / 730;

  return User.create({
    email: userEmails.pop(),
    password: chance.string(),
    name: chance.name({ gender: 'female' }),
    height,
    weight,
    gender: 'female',
    photo: toonavatar.generate_avatar({ gender: 'female' }),
  })
    .catch(console.error);
};

const createUsers = () => {
  const promiseArr = [adminUser()];

  for (let i = 0; i < numMaleUsers; i += 1) {
    promiseArr.push(randomMaleUser());
  }

  for (let i = 0; i < numFemaleUsers; i += 1) {
    promiseArr.push(randomFemaleUser());
  }

  return Promise.all(promiseArr);
};

/* -----------  Set up sneakers data ----------- */

const sneakersData = [
  {
    name: 'Jordan 1 Retro High Off-White Virgil Chicago',
    brand: 'Nike',
    style: 'AA3834-101',
    colorway: 'WHITE/BLACK-VARSITY RED',
    retailPrice: 190,
    releaseDate: '2017-09-09',
  },
  {
    name: 'Air VaporMax Oreo',
    brand: 'Nike',
    style: '899473-002',
    colorway: 'PALE GREY/SAIL-BLACK-PURE PLATINUM',
    retailPrice: 190,
    releaseDate: '2017-04-27',
  },
  {
    name: 'adidas NMD R1 Japan Triple White',
    brand: 'Adidas',
    style: 'BZ0221',
    colorway: 'WHITE',
    retailPrice: 180,
    releaseDate: '2017-08-11',
  },
  {
    name: 'Air Presto Off-White Virgil',
    brand: 'Nike',
    style: 'AA3830-001',
    colorway: 'BLACK/BLACK-MUSLIN',
    retailPrice: 160,
    releaseDate: '2017-09-09',
  },
  {
    name: 'Air Presto Acronym Volt',
    brand: 'Nike',
    style: '844672-100',
    colorway: 'WHITE/BLACK-HOT LAVA-VOLT',
    retailPrice: 200,
    releaseDate: '2016-09-15',
  },
  {
    name: 'Jordan 11 Retro Space Jam',
    brand: 'Nike',
    style: '378037-003',
    colorway: 'BLACK/DARK CONCORD-WHITE',
    retailPrice: 220,
    releaseDate: '2016-12-10',
  },
  {
    name: 'Air VaporMax Pure Platinum',
    brand: 'Nike',
    style: '849558-004',
    colorway: 'PURE PLATINUM/WHITE-WOLF GREY',
    retailPrice: 190,
    releaseDate: '2017-03-25',
  },
  {
    name: 'Air More Uptempo Supreme Suptempo Black',
    brand: 'Nike',
    style: '902290-001',
    colorway: 'BLACK',
    retailPrice: 190,
    releaseDate: '2017-04-27',
  },
  {
    name: 'NikeCraft Mars Yard Shoe 2.0 Tom Sachs Space Camp',
    brand: 'Nike',
    style: 'AA2261-100',
    colorway: 'NATURAL/SPORT RED-MAPLE',
    retailPrice: 200,
    releaseDate: '2017-06-08',
  },
  {
    name: 'Jordan 1 Retro Reverse Shattered Backboard',
    brand: 'Nike',
    style: '555088-113',
    colorway: 'SAIL/STARFISH-BLACK',
    retailPrice: 160,
    releaseDate: '2016-10-08',
  },
  {
    name: 'adidas Ultra Boost Mid Ronnie Fieg',
    brand: 'Adidas',
    style: 'BY2592',
    colorway: 'WHITE/MULTI-COLOR',
    retailPrice: 220,
    releaseDate: '2016-12-23',
  },
  {
    name: 'Air VaporMax Off-White Virgil',
    brand: 'Nike',
    style: 'AA3831-001',
    colorway: 'BLACK/WHITE-CLEAR',
    retailPrice: 250,
    releaseDate: '2017-09-09',
  },
  {
    name: 'ACE 16 PureControl Ultra Boost Kith Flamingos',
    brand: 'Adidas',
    style: 'CM7890',
    colorway: 'CLEAR GRANITE/CLEAR GRANITE/VAPOUR PINK',
    retailPrice: 220,
    releaseDate: '2017-06-02',
  },
  {
    name: 'Jordan 4 Retro Black Cement',
    brand: 'Nike',
    style: '308497-089',
    colorway: 'BLACK/FIRE RED-CEMENT GREY',
    retailPrice: 160,
    releaseDate: '2012-11-01',
  },
  {
    name: 'Nike HyperAdapt 1.0 Black ',
    brand: 'Nike',
    style: '843871-001',
    colorway: 'BLACK/WHITE-BLUE LAGOON',
    retailPrice: 720,
    releaseDate: '2016-12-01',
  },
  {
    name: 'adidas Copa Mundial 17 Ultra Boost Kith Cobras',
    brand: 'Adidas',
    style: 'CM7895',
    colorway: 'CRYSTAL WHITE/CRYSTAL WHITE/CLEAR GREY',
    retailPrice: 220,
    releaseDate: '2017-06-02',
  },
  {
    name: 'Asics Gel-Lyte III Ronnie Fieg Militia',
    brand: 'Asics',
    style: 'H6C3K-6969',
    colorway: 'OLIVE/CHOCOLATE/ORANGE',
    retailPrice: 250,
    releaseDate: '2016-11-22',
  },
  {
    name: 'Asics Gel-Lyte III Ronnie Fieg Leatherbacks',
    brand: 'Asics',
    style: 'H10AK-9090',
    colorway: 'BLACK/GREY-TEAL',
    retailPrice: 130,
    releaseDate: '2011-11-18',
  },
  {
    name: 'Asics Gel-Lyte 3.1 Ronnie Fieg Salmon',
    brand: 'Asics',
    style: 'H6C2K-3131',
    colorway: 'SALMON',
    retailPrice: 200,
    releaseDate: '2016-11-22',
  },
  {
    name: 'Asics Gel-Lyte III Beams x Mita Souvenir Jacket',
    brand: 'Asics',
    style: 'H60LK-9090',
    colorway: 'BLACK',
    retailPrice: 130,
    releaseDate: '2016-06-11',
  },
  {
    name: 'Air Max 1 Anniversary Red ',
    brand: 'Nike',
    style: '908375-100',
    colorway: 'WHITE/UNIVERSITY RED-NEUTRAL GREY-BLACK',
    retailPrice: 140,
    releaseDate: '2017-03-04',
  },
  {
    name: 'Air Max 98 Supreme Black',
    brand: 'Nike',
    style: '844694-001',
    colorway: 'BLACK/BLACK-VARSITY RED',
    retailPrice: 175,
    releaseDate: '2016-04-28',
  },
  {
    name: 'Jordan 3 Retro White Cement ',
    brand: 'Nike',
    style: '580775-160',
    colorway: 'WHITE/FIRE RED-CEMENT GREY-BLACK',
    retailPrice: 200,
    releaseDate: '2013-02-06',
  },
  {
    name: 'Air Max 1 Anniversary Blue ',
    brand: 'Nike',
    style: '908375-101',
    colorway: 'WHITE/GAME ROYAL-NEUTRAL GREY-BLACK',
    retailPrice: 140,
    releaseDate: '2017-03-11',
  },
  {
    name: 'Kobe 6 Grinch',
    brand: 'Nike',
    style: '429659-701',
    colorway: 'LIME GREEN/VARSITY RED/BLACK',
    retailPrice: 130,
    releaseDate: '2010-12-25',
  },
  {
    name: 'Jordan 8 Retro Doernbecher',
    brand: 'Nike',
    style: '729893-480',
    colorway: 'HYPER BLUE-ELECTRO ORANGE-BLACK',
    retailPrice: 190,
    releaseDate: '2014-11-23',
  },
  {
    name: 'Jordan 1 Retro Fragment',
    brand: 'Nike',
    style: ' 716371-040',
    colorway: 'BLACK/SPORT BLUE-WHITE',
    retailPrice: 185,
    releaseDate: '2014-12-27',
  },
  {
    name: 'Jordan 2 Retro Just Don Blue',
    brand: 'Nike',
    style: '717170-405',
    colorway: 'VARSITY ROYAL/METALLIC GOLD-UNIVERSITY RED',
    retailPrice: 350,
    releaseDate: '2015-01-31',
  },
  {
    name: 'Jordan 7 Retro Miro',
    brand: 'Nike',
    style: '323213-161',
    colorway: 'WHITE/SPORT RED-BLACK-METALLIC GOLD',
    retailPrice: 175,
    releaseDate: '2008-07-03',
  },
  {
    name: 'Jordan 7 Retro Bordeaux ',
    brand: 'Nike',
    style: '304775-034',
    colorway: 'BLACK/BORDEAUX-LIGHT GRAPHITE-MIDNIGHT FOG',
    retailPrice: 190,
    releaseDate: '2015-07-18',
  },
  {
    name: 'Air Max 1 B Atmos Viotech',
    brand: 'Nike',
    style: '302740-251',
    colorway: 'KHAKI/VIOTECH-DARK MOCHA-METALLIC GOLD',
    retailPrice: 100,
    releaseDate: '2003-01-01',
  },
];

const createSneakers = () => {
  return Promise.all(sneakersData.map((sneaker) => {
    return Sneaker.create(sneaker);
  }));
};

/* -----------  Syncing database ----------- */

const seed = () => {
  return Promise.all([createUsers(), createSneakers()])
    .spread((users, sneakers) => {
      const addSneakerPromArr = [];
      users.forEach((user) => {
        // pick random set of sneakers
        const numUserSneakers = Math.ceil(Math.random() * 10);
        const userSneakerArr = chance.pickset(sneakers, numUserSneakers);

        // pick random size based on height & weight
        let sizeFactor = (user.height + user.weight) - 160;
        sizeFactor = sizeFactor > 0 ? sizeFactor : 0;
        sizeFactor = sizeFactor < 110 ? sizeFactor : 110;
        sizeFactor = Math.floor(sizeFactor / 10) + 4;
        let size = (Math.floor(Math.random() * 5) + sizeFactor) - 2;
        size = size > 4 ? size : 4;
        size = size < 14 ? size : 14;

        // create promises for adding sneaker to user
        userSneakerArr.forEach((sneaker) => {
          addSneakerPromArr.push(user.addSneaker(sneaker, {
            through: { size },
          }));
        });
      });
      return Promise.all(addSneakerPromArr);
    });
};

console.log('Syncing database kickSize ...');

db.sync({ force: true })
  .then(() => {
    console.log('Seeding database kickSize ...');
    return seed();
  })
  .then(() => {
    console.log('Seeding successful!');
  })
  .catch((err) => {
    console.log('Error from seeding!', err);
  })
  .then(() => {
    db.close();
    return null;
  });

