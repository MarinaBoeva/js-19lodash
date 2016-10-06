var r = new XMLHttpRequest();
r.open('GET','data.json',false);
r.send(null);
var data= r.responseText;
data = JSON.parse(data);

var skills= _.map(data,function (el) {
  return el.skills;
});

skills=_.flatten(skills);
skills=_.uniq(skills);
skills=_.sortBy(skills, function(s){
    return s.charCodeAt();
});
console.log('Массив всех скилов:  '+skills);


var dataSortedByFriedns=_.sortBy(data, ['friends.length']);
var names=_.map(dataSortedByFriedns,function (el) {
  return el.name;
});
console.log('Массив всех имен:  '+names);

var friends=_.map(data,function (el) {
  return el.friends;
});
friends=_.flatten(friends);
friends=_.map(friends,function (el) {
  return el.name;
});
friends=_.uniq(friends);
console.log('Массив имен всех друзей:  '+friends);
