const express = require(`express`);
const { people } = require("../data");
const {
  getPeople,
  addPerson,
  editPerson,
  deletePerson,
} = require(`../controllers/people`);

const router = express.Router();

// router.get(`/`, getPeople);
// router.post(`/`, addPerson);
// router.put(`/:id`, editPerson);
// router.delete(`/:id`, deletePerson);

router.route(`/`).get(getPeople).post(addPerson);
router.route(`/:id`).put(editPerson).delete(deletePerson);

module.exports = router;
