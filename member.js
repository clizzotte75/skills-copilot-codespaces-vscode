function skillsMember() {
  // Add the following code to your member.js file
  var member = this;
  member.skills = ['JavaScript', 'Python', 'HTML', 'CSS'];
  member.getSkills = function() {
    return member.skills;
  };
}