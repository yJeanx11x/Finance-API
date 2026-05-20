const ratelimit = require('express-rate-limit');

const limit = ratelimit({
    windowMs: 600 * 1000,
    max: 5,
    message: 'Passou dos limitesLimite de requisições excedido. Tente novamente mais tarde.'
})

module.exports=ratelimit