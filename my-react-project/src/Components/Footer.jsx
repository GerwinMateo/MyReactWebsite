
function Footer() {
    return (
        <footer className="footer">
            <p className="Copyright">Gerwin Mateo &copy; {new Date().getFullYear()} | All Rights Reserved</p>
            <div>
                <ul class="icons">
                    <li class="font-text-bundle">
                        <a class="font-text" href="https://github.com/GerwinMateo" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github fa-lg"></i> Github
                        </a>
                    </li>
                    <li class="font-text-bundle">
                        <a class="font-text" href="https://www.linkedin.com/in/gerwinmateo" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin fa-lg"></i> LinkedIn
                        </a>
                    </li>
                    <li class="font-text-bundle">
                        <a class="font-text" href="mailto:gerwinmateo08@gmail.com">
                            <i className="fas fa-envelope fa-lg"></i>  Mail
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}


export default Footer