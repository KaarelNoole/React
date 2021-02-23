import React from 'react';
const year = new Date().getFullYear();

function Footer() {
    return <footer>
        <p>Copyright {year} Kaarel Noole</p>
    </footer>
}

export default Footer;