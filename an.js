an.js$(function() {
    // get the html elements we need to use
    var container = $(".container");
    var stimulus = $("#stimulus");
    // set the delay parameters
    var presentationInterval = 250;
    var interStimulusInterval = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50];
    
    // initialize your stimuli here
    var stimuli = [ '+', 'A', 'G', '9', 'K', 'L', 'M', '2', 'N', 'Y', 'P', 'R', 'S', '7', '5', 'K', 'D', 'A', '6', 'F', '3', '!', 'P', 'O', 'K', 'A' ];
    var i = 0;
    
    // update is the main stimulus presentation loop, it recursively calls
    // itself as long as there are stimuli remaining    
    function update() {
        // wait until the isi has elapsed
        container.delay(interStimulusInterval);
        // then set the stimulus and increment the counter
        // queue and dequeue makes this function "wait in line"
        container.queue(function() {
            stimulus.html(stimuli[i]);
            i++;        // instead of adding 1, you could set i randomly or follow some other pattern
            container.dequeue();
        });
        // show the stimulus, the argument is required to make show "wait in line", but it could
        // be any small value, a large value will cause a visible animation
        container.show(10);
        // wait until the presentation interval has elapsed
        container.delay(presentationInterval);
        // hide the stimulus
        container.hide(10);
        // finally, check if there are remaining stimuli and recursively call this function
        container.queue(function() {
            if (i < stimuli.length)    // if you present "out of order" you'll have to modify this
                update();              // one improvement would be to avoid recursion and use a callback
            container.dequeue();
        });
    }
    
    // start presenting stimuli
    update();
});