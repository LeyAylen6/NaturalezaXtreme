const { PORT } = process.env


export const paginado = (offset:number, limit:number, count: number) =>{
    let next = '';
    let prev = '';

    if(offset + limit >= count) next = 'null'
    else next = `http://localhost:${PORT}/articles?offset=${offset + limit}&limit=${limit}`

    if(offset <= 0) prev = 'null'
    else prev = `http://localhost:${PORT}/articles?offset=${+Math.sign(offset - limit) ?  (offset - limit <= 0 ? '0' : offset - limit): '0' }&limit=${limit}`

    let pag = {
        count,
        next,
        prev
    }

    return pag;
}
