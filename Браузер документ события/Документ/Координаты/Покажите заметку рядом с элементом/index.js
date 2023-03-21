function positionAt(anchor, position, elem) {
    let anchorCoords = anchor.getBoundingClientRect();

    if (position === 'top') {
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
    } else if (position === 'right') {
        elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
        elem.style.top = anchorCoords.top + "px";
    } else if (position === 'bottom') {
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
    }
}


function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
}

let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");