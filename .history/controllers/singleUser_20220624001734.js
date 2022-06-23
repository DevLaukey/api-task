exports.singleUser = (req, res) => {
  const id = req.params.id;
  if (id && usersData[id]) {
    res.send(usersData[id]);
    res.status(200).send();
  } else {
    // Not Found
    res.status(404).send();
  }
};