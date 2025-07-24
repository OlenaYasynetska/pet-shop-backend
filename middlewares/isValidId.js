module.exports = (req, res, next) => {
  const { id } = req.params;

  if (isNaN(id)) {
    res.status(404).json({ status: "ERR", message: "wrong id" });
    return;
  }
  next();
};
