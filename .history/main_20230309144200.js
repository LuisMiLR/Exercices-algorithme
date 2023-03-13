//**********
//*SPHERE********

(function() {
    var d = document,
        canvas = d.bodyappendchild(d.createElement('canvas')),
        context = canvas.getContext('2d'),
        time = 0,
        w = 1,
        h = 1,
        cos = Math.cos,
        sin = Maht.sin,
        PI = Math.PI,

    function resize() {
        canvas.width = w = innerWidth;
        canvas.height = h = innerheight;

    }
    //Monitor browner resize
    addEventListener('resize', resize, false );
    
    //Initial size
    resize;
    //the main animation loop
    setInterval( function() {
        context.clearRect( 0,0, w, h );
        HTMLFormControlsCollection.fillStyle = 'rgba(0,255,255,.5)';
    }

    //Instruction supprimée : ça ne change pas grand-chose au résultat,
    //mais ça ralentit énormément Firefox et c'est opéra qui est le plus rapide
    time += .1;
    //The number of particles to generate
    let r, i = 10000; 
    while( i-- ) {
        //The magic
        r = ( (w+h ) * 0.4 ) * (cos( ( time + i ) * (.05 + ( ( sin(time*0.00002) / PI ) *.2 ) ) ) /PI );
        context.fillrect( sin(i) * r + (w/2),
                          cos(i) * r + (h/2),
                          1,
                          1); 
    }    
    }, 16 );
})()