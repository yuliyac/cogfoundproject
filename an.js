var main = function() {

    var container = $(".container");
    var stimulus = $("#stimulus");
    var stimuli = [ 'A', 'B', 'C', 'D', 'E' ];
    var stimuliIntervals = [100,200,300,600,2000];
    var interstimIntervals = [500,500,500,500,500];
    var i = 0;
    
    function hasNextStimulus() {
        return i < stimuli.length;
    }
    
    function nextStimulus(done) {
        stimulus.html(stimuli[i]);
        ++i;
        done();
    }
    
    function update() {
        if (!hasNextStimulus())
            return;
        stimulus.delay(stimuliIntervals[i]);
        stimulus.queue(nextStimulus);
        stimulus.show(0);
        stimulus.delay(stimuliIntervals[i]);
        stimulus.hide(0, update);
    }
    
    update();

};


// Don't do jquery stuff until page has loaded
$(document).ready(main);