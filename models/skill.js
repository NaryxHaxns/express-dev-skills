const skills = [
    {id: 8338, skill: 'HTML', level: 'Intermediate'},
    {id: 24601, skill: 'CSS', level: 'Expert'},
    {id: 8675309, skill: 'JavaScript', level: 'Intermediate'},
    {id: 90210, skill: 'Bash', level: 'Off-Charts'}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
};

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
};