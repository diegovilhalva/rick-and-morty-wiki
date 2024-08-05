import { NavLink,Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
  <div className="container">
  <Link to={'/'} className="ubuntu fs-3  fw-bold navbar-brand">Rick & Morty <span className="text-primary">Wiki</span></Link >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <style jsx="true">
            {`
                button[aria-expanded="false"] > .close {
                    display:none;
                }
                     button[aria-expanded="true"] > .open {
                    display:none;
                }
            `}
        </style>
    <i className="fa-solid fa-bars open text-dark"></i>
    <i className="fa-solid fa-x close text-dark"></i>
    </button>
    <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
      <ul className="navbar-nav fs-5">
        <li className="nav-item">
        <NavLink a to={'/'}  className={"nav-link"} >Characters</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/episodes'} className={"nav-link"}>Episodes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/location'} className={'nav-link'} >Locations</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar