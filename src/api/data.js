let students = [{
    'id': 1,
    'name': 'spiderman',
    'games': ['cricket', 'football'],
    'selected': false
  },
  {
    'id': 2,
    'name': 'superman',
    'games': ['cricket', 'hadudo'],
    'selected': false
  },
  {
    'id': 2,
    'name': 'ant man',
    'games': ['cricket', 'tenis'],
    'selected': false
  },
  {
    'id': 4,
    'name': 'batman',
    'games': ['hockey', 'hadudo'],
    'selected': false
  },
  {
    'id': 5,
    'name': 'iron man',
    'games': ['football', 'tenis'],
    'selected': false
  },
  {
    'id': 6,
    'name': 'ip man',
    'games': ['karate'],
    'selected': false
  },
  {
    'id': 7,
    'name': 'gentlman',
    'games': [],
    'selected': false
  },
]
export default {
  getStudents() {
    return students;
  }
}
