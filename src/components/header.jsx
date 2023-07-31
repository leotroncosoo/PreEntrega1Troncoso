import NavBar from "./NavBar";

function Header() {
    return (
      <div className="Header flex justify-between items-center px-20 bg-blue-900 " >
        <a href="#inicio" className="text-white">Tienda de juegos</a>
        <NavBar />
        <a href="#carrito" className="flex item-center gap-2">
          <i class="bi bi-cart3 text-2xl text-white"></i>
          <strong className="text-white py-1 rounded-md bg-slate-900 p-2">10</strong>    
        </a>
      </div>
    );
  }
  
  export default Header;
  