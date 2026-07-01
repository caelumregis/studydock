const APIResponse = require('../utils/APIResponse');

function validateIdParam(req, res, next) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return APIResponse.error(
            res,
            "Invalid ID parameter",
            400
        );
    }

    req.validatedId = id;
    next();
}

module.exports = validateIdParam;