const skills = [
    {id: 8338, skill: 'HTML', level: 'Intermediate'},
    {id: 24601, skill: 'CSS', level: 'Expert'},
    {id: 8675309, skill: 'JavaScript', level: 'Intermediate'},
    {id: 90210, skill: 'Bash', level: 'Off-Charts'}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function getAll() {
    return skills;
};

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
};

function create(skill, level) {
    skill.id = Date.now() % 1000000;
    skills.level = `${level}`;
    skills.push(skill);
};

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
};

function update(id, skill) {
    const skillObj = skills.find(s => s.id === parseInt(id));
    Object.assign(skillObj, skill);
}