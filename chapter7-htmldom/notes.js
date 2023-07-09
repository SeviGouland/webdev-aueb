function getGRDate() {
    let daysGR = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'];
    let monthsGR = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου', 'Ιουλίου',
                    'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου'];
    let cdate = new Date();

    let day = daysGR[cdate.getDay()];
    let date = cdate.getDate();
    let month = monthsGR[cdate.getMonth()];
    let year = cdate.getFullYear();
    let hours = cdate.getHours();
    let minutes = cdate.getMinutes();
    let seconds = cdate.getSeconds();

    return day + ', ' + date + ' ' + month + ' ' + year + '<br>' +
            (((hours < 10) ? '0' : '') + hours) + ':' + (((minutes < 10) ? '0' : '') + minutes)
             + ':' + (((seconds < 10) ? '0' : '') + seconds);
}


let header = document.querySelector('.header');
header.innerHTML = getGRDate();