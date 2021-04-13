import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="links">
                <div className="links__link">Developers</div>
                <div className="links__link">Terms of Privacy</div>
                <div className="links__link">Privacy</div>
            </div>
            <div className="copy-right">{`© ${new Date().getFullYear()} Diego Rodrigues, Inc`}</div>
        </footer>
    )
}

export default Footer
