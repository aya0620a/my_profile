const Footer = () => {
    return (
        <>
        <hr/>
        <div className="footer-container">
            <p>
            © {new Date().getFullYear()} AOTOのポートフォリオ
            </p>
            <div className="social_icons">
            <a
                href="https://twitter.com/AO25255"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa-brands fa-twitter"></i>
            </a>
            <a
                href="https://github.com/aya0620a"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa-brands fa-github"></i>
            </a>
            </div>
        </div>
        </>
    )
}

export default Footer;