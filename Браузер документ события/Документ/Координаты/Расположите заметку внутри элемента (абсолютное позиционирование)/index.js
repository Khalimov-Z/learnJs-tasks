function positionAt(anchor, position, elem) {
    let anchorCoords = anchor.getBoundingClientRect();

    if (position === 'top-out') {
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
    } else if (position === 'right-out') {
        elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
        elem.style.top = anchorCoords.top + "px";
    } else if (position === 'bottom-out') {
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
    } else if (position === 'top-in') {
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + elem.offsetHeight - elem.offsetHeight + "px";
    } else if (position === 'right-in') {
        elem.style.left = anchorCoords.left - elem.offsetWidth + anchor.offsetWidth + "px";
        elem.style.top = anchorCoords.top + "px";
    } else if (position === 'bottom-in') {
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top - elem.offsetHeight + anchor.offsetHeight + "px";
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

showNote(blockquote, "top-out", "note top-out");
showNote(blockquote, "right-out", "note at the right-out");
showNote(blockquote, "bottom-out", "note bottom-out");
showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "right-in", "note at the right-in");
showNote(blockquote, "bottom-in", "note bottom-in");