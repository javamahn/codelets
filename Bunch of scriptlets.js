// Add or Remove Users from groups
gs.log("start");
   var usr = '2acc7df8139f26007a05da128144b08b';
   var groupAsys_id = '32b1c12e13a1cbc0b72f75c36144b07a';
 //   gs.info("user sysid is:" + current.variables.user);
 //   gs.info("group sysid is:" + current.variables.group);

// var isMemberCheck = isMberOfGroup(usr,groupAsys_id);
      
if(usr.isMemberOf(groupAsys_id)){
gs.addInfoMessage("Not a member");
//   addToGroup(usr,groupAsys_id);
}



function isMberOfGroup(usr,group) {

   gs.info("isMemberCheck: " + usr.isMemberOf(group));

   return usr.isMemberOf(group);

   }


function addToGroup(usr,group) {

   var gr = new GlideRecord('sys_user_grmember');

   gr.user = usr;

   gr.group = group; //sys_id of Group A

   gr.insert();

   }

https://browndev.service-now.com/sp?id=sc_request&table=sc_request&sys_id=ee42213f13dfc700d1783b27d144b0fe

https://browndev.service-now.com/sp?id=sc_request&table=sc_req_item&sys_id=6242213f13dfc700d1783b27d144b0ff
--------------Original Code here --------------------------


// maximum number of entries in this Menu
var max = 15;

//data object
var t = data;  // shortcut
t.items = [];

//current user
var u = gs.getUserID();  //shortcut

// use record watchers to tell header when to update dropdown counts
t.record_watchers = [];
t.record_watchers.push({'table':'sc_req_item','filter':'active=true^request.requested_for=' + u});

//lookup open catalog requests for current user
var z = new GlideRecord('sc_req_item');
z.addActiveQuery();
z.addQuery('request.requested_for', u);
z.orderByDesc('sys_updated_on');
z.setLimit(max);
z.query();

while (z.next()) {

  var a = {};
  $sp.getRecordValues(a, z, 'sys_id,number,sys_updated_on');
  a.short_description = z.cat_item.getDisplayValue() || z.getDisplayValue("short_description");
  a.__table = z.getTableName();
  a.type = 'req_item';
  a.sortOrder = z.sys_updated_on.getGlideObject().getNumericValue();
  t.items.push(a);
}

//sort requests and get count
t.items.sort(function(a, b) {
  return b.sortOrder - a.sortOrder;
});
t.count = t.items.length;
t.type = 'req_item';   //used by menuTemplate to determine if this menu option should show at all times, or only if items are available
//t.glyph = 'pencil-square-o';

//create link for all of users request and append to top of item object
var link = {title: gs.getMessage('View All of My Requests'), type: 'link', href: '?id=req_items', items: 



answer.add('010_Tomorrow@javascript:gs.daysAgoStart(-1)@javascript:gs.daysAgoEnd(-1)','Tomorrow');[]};
t.items.unshift(link); // put 'View My Open Requests' first