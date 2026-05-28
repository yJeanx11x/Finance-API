const { z } = require('zod')

const transactionSchema = z.object({

    titulo: z.string()
        .min(3, 'O título deve ter no mínimo 3 caracteres'),

    valor: z.number({
        required_error: 'O valor é obrigatório'
    }),

    tipo: z.enum(['entrada', 'saida'], {
        errorMap: () => ({
            message: 'O tipo deve ser entrada ou saida'
        })
    }),

    categoria: z.string().min(3, 'A categoria deve ter no mínimo 3 caracteres')

})

module.exports = transactionSchema