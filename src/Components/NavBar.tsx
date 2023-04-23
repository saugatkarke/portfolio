import NavList from "./NavList";
function TopNavBar(){

    const navLists = ['Home', 'Skills', 'Certificates','Contact']; 
    return (
      
<nav className="navbar px-3">
<a className="p-2 flex-grow-0.1" href="#">
    <img src="https://media.licdn.com/dms/image/D5603AQHT874Z9lmapQ/profile-displayphoto-shrink_800_800/0/1668271836809?e=1686182400&v=beta&t=ClPPi5UDE4Jxn149lxapP4wIVgMuuPGu4UG9iQVWBrI" width="40" height="40" alt=""  className="rounded-circle"/>
  </a>
<NavList list = {navLists}/>
<button type="button" className="btn btn-primary">Lets Work Together 🙌</button>
</nav>
);
}
export default TopNavBar;