// CommonJS export for async route handler wrapper
module.exports.asyncHandler = (fn) => (req, res, next) => {
    console.log('[asyncHandler] Wrapping request:', req.method, req.path);
    Promise.resolve(fn(req, res, next)).catch(err => {
        console.error('[asyncHandler] Caught error for', req.method, req.path, ':', err);
        next(err);
    });
};