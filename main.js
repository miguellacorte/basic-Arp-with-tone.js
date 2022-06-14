// const { Tone } = require("tone/build/esm/core/Tone");

const freeverb = new Tone.Freeverb().toDestination();
freeverb.dampening = 1000;




const synth = new Tone.Synth();
synth.toDestination();

// 
synth.triggerAttackRelease('C4', '16n');
const notes = [
    'C3', 'F4', 'A5', 'E#4', 'C2',
    'C5', 'E5', 'G5', 'G#3', "A5"
]

let index = 0;

Tone.Transport.scheduleRepeat((time) => {
	// use the callback time to schedule events
	repeat(time );
}, "8n");


Tone.Transport.bpm.value = 120;



function repeat(time) {
    let note = notes[index % notes.length];
    synth.triggerAttackRelease(note, '32n', time);
    index++;
}

// uncomment this to start: 
Tone.Transport.start();






  



