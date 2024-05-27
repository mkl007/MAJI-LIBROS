import { Link } from "react-router-dom"



export const NavBar = () => {
  return (
    <>
      <div className=' bg-[1da1f2]'>
        <div>
          <div>
            <nav>
              <Link to='/'><img src="" alt="Maji books" /></Link>
            </nav>
          </div>
          <div>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li><Link to='/products'>Products</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
