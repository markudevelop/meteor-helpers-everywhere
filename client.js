(function () {
  // get helpers from global helpers object or from template instance or template name
  var getHelper = function (helperName, template) {
    if (!helperName) {
      throw new Meteor.Error("Helper name is required");
    }
    var template = template || false;

    // Look for helper at template instance or template name
    if (template) {
      var helper;

      // If template instance is provided
      if (typeof template === "object") {
        helper = template.view.template.__helpers.get(helperName);
        // If template name is provided
      } else if (typeof template === "string") {
        helper = Template[template].__helpers.get(helperName);
      }

      if (!helper)
        throw new Meteor.Error("Helper not found");
      return helper;
    }

    // Look for helper at global helpers object
    var helper = Blaze._globalHelpers[helperName];
    if (!helper)
      throw new Meteor.Error("Helper not found");
    return helper;
  }

  // For convenient use
  Meteor.helpers = getHelper;

}());