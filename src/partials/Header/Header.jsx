import "./Header.css";

//Components;
import logo from "./logo.png";
import NavbarItems from "./NavbarItems";

export default function Header() {
  return (
    <nav >
      <div className="logo">
      <img src={logo} alt="logo" />
      </div>
      <h1 className="ProjectName">Stonks</h1>
      <ul className="NavMenu">
        {NavbarItems.map((item, index) => {return(
          <li>
            <a className={item.cName} href={item.url} >
                {item.title}</a>
          </li>)
        })}
      </ul>
    </nav>
  );
}
