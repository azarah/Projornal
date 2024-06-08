
    function showExperience(keyword) {
        // Hide all experience details
        const experiences = document.querySelectorAll('.experience-details');
        experiences.forEach(experience => {
            experience.style.display = 'none';
        });
        // Gather the experiences that match the keyword
        const matchedExperiences = [];
        experiences.forEach(experience => {
            const keywords = experience.getAttribute('data-keywords').split(' ');
            if (keywords.includes(keyword)) {
                matchedExperiences.push(experience);
            }
        });
        // Sort matched experiences by start date
        matchedExperiences.sort((a, b) => {
            const dateA = a.getAttribute('data-start-date');
            const dateB = b.getAttribute('data-start-date');
            return new Date(dateB) - new Date(dateA); // Sort in descending order
        });
        // Display sorted experiences
        matchedExperiences.forEach(experience => {
            experience.style.display = 'block';
        });
    }
