# expressjs-jsonwebtoken
Implementasi JWT di Express JS

# Install

```bash
$ npm install
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
# NPM jsonwebtoken by 
[Auth0](https://auth0.com)

# Explore lebih lanjut kunjungi 
[auth0/node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
