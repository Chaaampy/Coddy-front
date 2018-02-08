Router.configure({
    layoutTemplate: 'mainLayout'
});

Router.route('/', {
    name: 'home',
    template: "home"
});

Router.route('/start', {
    name: 'start',
    template: "start"
});

Router.route('/project', {
    name: 'project',
    template: "project"
});

Router.route('/report', {
    name: 'report',
    template: "report"
});

Router.route('/about', {
    name: 'about',
    template: "about"
});

Router.route('/contact', {
    name: 'contact',
    template: "contact"
});

Router.route('/donate', {
    name: 'donate',
    template: "donate"
});

Router.route('/legal', {
    name: 'legal',
    template: "legal"
});