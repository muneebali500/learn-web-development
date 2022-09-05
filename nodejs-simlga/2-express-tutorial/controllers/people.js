const { people } = require(`../data`);

function getPeople(req, res) {
  res.status(200).json({ success: true, data: people });
}

function addPerson(req, res) {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ success: false, msg: `please add the data` });
  } else {
    res.status(201).json({ success: true, person: name });
  }
}

function editPerson(req, res) {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === parseInt(id));

  if (!person) {
    res.status(400).json({ success: false, msg: `please add the data` });
  } else {
    res.status(200).json({ success: true, person: { ...person, name } });
  }
}

function deletePerson(req, res) {
  const { id } = req.params;

  const person = people.find((person) => person.id === parseInt(id));

  if (!person) {
    return res
      .status(400)
      .json({ success: false, mg: `There is no person with the id` });
  }

  const newPeople = people.filter((person) => person.id !== parseInt(id));
  console.log({ newPeople });

  res.status(200).json({ sucess: true, data: newPeople });
}

module.exports = { getPeople, addPerson, editPerson, deletePerson };
