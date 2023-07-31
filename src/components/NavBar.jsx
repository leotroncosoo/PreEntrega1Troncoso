function NavBar() {
    return (
      <div>
        <nav>
            <ul className=" text-white py-6 flex gap-10">
                <a href="#juegos" className="categorias">Juegos</a>
                <a href="#consolas" className="categorias">Consolas</a>
                <a href="#contacto" className="categorias">Contacto</a>
            </ul>
        </nav>
      </div>
    );
  }
  
export default NavBar;
  