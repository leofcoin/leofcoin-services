const Koa = require('koa');
const koaStatic = require('koa-static');

class Service {
  constructor(port, path) {
    this.service = new Koa();
    this.service.use(koaStatic(path));
    this.service.listen(port);
  }
}

const services = [
  [5010, 'node_modules/@leofcoin/paper-wallet']
];

for (const [port, path] of services) {
  new Service(port, path);
}
