function showSection(sectionId) {
    var sections = document.getElementsByClassName('content-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none'; // Versteckt alle Abschnitte
    }
    document.getElementById(sectionId).style.display = 'block'; // Zeigt den gewählten Abschnitt an
}
