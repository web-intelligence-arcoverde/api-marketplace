exports.allAccess = (req, res) => {
  res.status(200).send("Conteúdo público.");
};
exports.userBoard = (req, res) => {
  res.status(200).send("Conteúdo do usuário.");
};
exports.adminBoard = (req, res) => {
  res.status(200).send("Conteúdo do administrador.");
};
exports.moderatorBoard = (req, res) => {
  res.status(200).send("Conteúdo do moderador.");
};
