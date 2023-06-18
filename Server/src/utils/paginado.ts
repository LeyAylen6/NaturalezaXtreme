const { PORT } = process.env

export const paginado = (offset:number, limit:number, count: number) =>{
    let next = '';
    let prev = '';

    if(offset + limit >= count) next = 'null'
    if(offset === 0) next = `http://localhost:${PORT}/articles?offset=${limit}&limit=${limit + 12}`
    else next = `http://localhost:${PORT}/articles?offset=${limit}&limit=${limit + 12}`

    if(offset <= 0) prev = 'null'
    // else prev = `http://localhost:${PORT}/articles?offset=${+Math.sign(offset - limit) ?  (offset - limit <= 0 ? '0' : offset): '0' }&limit=${limit}`
    else prev = `http://localhost:${PORT}/articles?offset=${limit - 24}&limit=${limit - 12}`

    let pag = {
        count,
        next,
        prev
    }

    return pag;
}