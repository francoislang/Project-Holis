export default function Navbar() {
    return (
        <main className="container">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <div className="container-button">
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>

                        </div>
                    </div>
                </div>
            </nav>
        </main>
    )
}