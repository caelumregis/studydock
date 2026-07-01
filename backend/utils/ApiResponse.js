class APIResponse {

    static success(res, data = null, message = "Request successful", statusCode = 200) {
        return res.status(statusCode).json({
            success: true,
            message,
            data
        });
    }

    static error(res, message = "Request failed", statusCode = 500, data = null) {
        return res.status(statusCode).json({
            success: false,
            message,
            data
        });
    }
}

module.exports = APIResponse;