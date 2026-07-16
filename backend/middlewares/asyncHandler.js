// CommonJS export for async route handler wrapper
module.exports.asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(err => {
        next(err);
    });
};