

function Nav() {
    return (
        <div className="nav">
            <ul classname="about">
                <li><a href="https://about.google/?fg=1&utm_source=google-CA&utm_medium=referral&utm_campaign=hp-header">About</a></li>
                <li><a href="https://store.google.com/CA/?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-CA">Store</a></li>
            </ul>
            <ul className="navList">
                <li><a href="https://mail.google.com/mail/u/0/?tab=mm#inbox">Gmail</a></li>
                <li><a href="https://www.google.ca/imghp?hl=en&tab=ri&authuser=0&ogbl">Images</a></li>
                <li><a href="#"><i class="fab fa-buromobelexperte"></i></a></li>
                <li className="avatar"><a href="#"><i class="fas fa-user-ninja"></i></a></li>
            </ul>
        </div>
    )
}

export default Nav;