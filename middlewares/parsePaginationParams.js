const parseNumber = (number, defaultValue)=> {
    if(typeof number !== "string") return defaultValue;

    const value = parseInt(number);
    if(Number.isNaN(value)) return defaultValue;

    return value;
};

const parsePaginationParams = (req, res, next)=> {
    const {page, perPage} = req.query;
    const parsedPage = parseNumber(page, 1);
    const parsedPerPage = parseNumber(perPage, 10);

    req.query.page = parsedPage;
    req.query.perPage = parsedPerPage;

    next();
};

module.exports = parsePaginationParams;