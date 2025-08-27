document.addEventListener('DOMContentLoaded', function() {
            const yearElement = document.getElementById('currentYear');
            if (yearElement) {
                const currentYear = new Date().getFullYear();
                yearElement.textContent = currentYear;
            }
        });
        