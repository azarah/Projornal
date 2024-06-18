// Disable right click
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });


// Disable common keyboard shortcuts for copying and saving images 
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'p' || e.key === 'a' || e.key === 'c')) {
            e.preventDefault();
        }
        if (e.key === 'PrintScreen') {
            e.preventDefault();
        }
    });

// Disable Drag and Drop 
    document.addEventListener('dragstart', function(event) {
        if (event.target.nodeName === 'IMG') {
            event.preventDefault();
        }
    });