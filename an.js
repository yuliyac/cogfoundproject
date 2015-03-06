var main = function() {

    var container = $(".container");
    var stimulus = $("#stimulus");
    var stimuli = [ '+', 'A', 'G', '9', 'K','L', 'M', '2', 'N', 'Y','P', 'R', 'S', '7', '5','K', 'D', 'A', '6', 'F','3', '!', 'P', '0', 'K','A' ];
    var stimuliIntervals = [100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100];
    var interstimIntervals = [200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200];
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