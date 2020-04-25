const your_ip = 'http://192.168.1.197';
const ip = {
  loadBalancer: your_ip + ':5000',
  socketServer: your_ip + ':5001',
  primaryBackend: your_ip + ':4000',
  secondaryBackend: your_ip + ':4001',
  frontend: your_ip + ':3000',
};

module.exports = ip;
