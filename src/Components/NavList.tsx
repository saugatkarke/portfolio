export interface listofNav {
   list:string[];
}
function NavList(props:listofNav){
   const lists = props.list;
    return(<ul className="navbar-nav p-2 flex-fill d-flex justify-content-evenly flex-row">
       {lists.map(lst=><li className = "nav-item" key={lst}>
        <a className="nav-link alert-link"key={lst}>{lst}</a></li>)}
        </ul>
    )
}
export default NavList;