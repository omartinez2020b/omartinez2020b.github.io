// Component for injecting some A-Frame entities in a scene

/* global AFRAME */
if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.');
}

AFRAME.registerComponent('globe', {
    init: function() {
        // Box
        // <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
        this.el.setAttribute('animation', {'property': 'position',
                                       'to': {x: 0, y: 200, z: 0},
                                       'dur': 100000});
    }
});

AFRAME.registerComponent('breakable', {
    init: function() {
        scene = document.querySelector('a-scene');
        let el = this.el;
        el.addEventListener('click', function() {
            scene.removeChild(el);
        });
    }
});


AFRAME.registerComponent('basic-scene', {
    
    init: function() {
        // Box
        // <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
        let box = document.createElement('a-box');
        box.setAttribute('color', 'red');
        box.setAttribute('position', {x: -1, y: 0.5, z: -3});
        box.setAttribute('rotation', {x: 0, y: 45, z: 0});
        box.setAttribute('color', "#4CC3D9");
        this.el.appendChild(box); 

        box.addEventListener('click', function() {
            let sphere = document.createElement('a-sphere');
            sphere.setAttribute('position', {x: Math.random() * (10 - 2) + 2, y: 1.25, z: -5});
            sphere.setAttribute('radius', 1.25);
            sphere.setAttribute('color', "#EF2D5E");
            sphere.setAttribute('globe', null);
            sphere.setAttribute('breakable', null);
            let scene = document.querySelector('a-scene');
            scene.appendChild(sphere);
        });
        
        
}});


