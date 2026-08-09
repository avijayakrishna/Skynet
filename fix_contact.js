const fs = require('fs');

const files = ['index.html', 'sses.html', 'secretary.html', 'admin.html'];

files.forEach(file => {
    let html = fs.readFileSync(file, 'utf8');

    const target = `function scrollToContact() {
            const section = document.getElementById('contact');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
        }`;

    const replacement = `function scrollToContact() {
            const section = document.getElementById('contact');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.location.href = 'index.html#contact';
            }
        }`;

    if (html.includes(target)) {
        html = html.replace(target, replacement);
        fs.writeFileSync(file, html);
        console.log(`Updated scrollToContact in ${file}`);
    } else {
        console.log(`Could not find target in ${file}`);
    }
});
