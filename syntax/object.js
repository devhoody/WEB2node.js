var members = ['hoody', 'noh', 'ho']
console.log(members[1]);

var i = 0;
while (i < members.length) {
    console.log('array loop', members[i]);
    i = i + 1;
}

var roles = {
    'programmer' : 'hoody',
    'designer' : 'noh',
    'manager' : 'ho'
}
console.log(roles.designer); 
console.log(roles['designer']);

for(var name in roles) {
    console.log('object =>', name, 'value =>', roles[name]);
}
