function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

$(document).ready(function() {
    var $projects = $('.project');
    if ($projects.length > 0) {
        var alreadyShown = [];
        function nextProject() {
            $projects.hide();
            var remainingProjects = $projects.filter(function(index) {
                if (alreadyShown.includes(index)) {
                    return false;
                }
                else {
                    return true;
                }
            });
            var random = getRandomInt(remainingProjects.length);
            var $project = $(remainingProjects.get(random));
            $project.show();
            var projectIndex = $projects.index($project);
            alreadyShown.push(projectIndex);
            if (alreadyShown.length == $projects.length) {
                alreadyShown = [projectIndex];
            }
        }
        $('.next-project').click(nextProject);
        nextProject();
    }
});
