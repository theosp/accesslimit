Router.map(function() {
    this.route('home', {path: '/'});
});

Router.configure({
    layoutTemplate: "master_layout"
});

Router.onBeforeAction("loading");
