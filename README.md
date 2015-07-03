# meteor-helpers-everywhere
Use template helpers everywhere (template events, onCreated, onRendered, onDestroyed, JavaScript code)

Meteor Helpers Everywhere
=========================

*voidale:helpers-everywhere*

A simple, package to make it easy use template helpers at template events, onCreated, onRendered, onDestroyed or even plain JavaScript code.

* Finds global helpers registered using "Template.registerHelper"
* Finds template instance helpers "Template.ANY.helpers({})"

# API

## Meteor.helpers(helperName, template) - Client only
helperName: string

template: template instance object or a template name string.

returns: helper function, so you can use .call(), .apply(), .bind() as you need it.

## Examples:

Global Registered Helper:
````
Template.registerHelpers("demoHelper", function () {
  console.log('hello');
});
````
Use anywhere (notice the "()" at the end required to execute the function)
Can also use .call()...
````
Meteor.helpers("demoHelper")();
````

Template Instance Helpers
````
Template.ANY.helpers({
  demoHelper: function () {
    console.log('hello');
  }
});

Template.ANY.onRendered({
  var helper = Meteor.helpers("demoHelper", this)();
});
````