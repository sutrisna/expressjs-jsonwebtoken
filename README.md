# expressjs-jsonwebtoken
Implementasi JWT di Express JS

# Install
- Clone this project:
```bash
$ git clone https://github.com/sutrisna/expressjs-jsonwebtoken.git
$ cd expressjs-jsonwebtoken
```
- Install NPM dependencies:
```bash
$ npm install
```
- Running aplikasi:
```bash
$ node bin/www
```
### Gunakan rest client seperti postman

```bash
Generate Token
route GET: localhost:3000
Verify Token
Tambahkan Authorization di header dan masukan hasil Generate Tokennya
route GET: localhost:3000/validation
```
### Setting expired time

```js
router.get('/', function (req, res) {
  var token = jwt.sign({
    name: 'test',
  },secret , {
    expiresIn: '60000'
  });
  res.send(token);
});
```
### NPM jsonwebtoken by 
[Auth0](https://auth0.com)

### Explore lebih lanjut kunjungi 
[auth0/node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)

### Sutrisna 1453
Jika tidak bisa sedekah dengan uang, maka bersedekahlah dengan ilmu pengetahuan


