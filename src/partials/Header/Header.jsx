import "./Header.css";

//Components;
import logo from "./logo.jpg";
import NavbarItems from "./NavbarItems";

export default function Header() {
  return (
    <div className="Header">
      <img src={logo} alt="logo" className="logo" />
      <h1 className="ProjectName">Stonks</h1>
      <ul>
        {NavbarItems.map((item, index) => {return(
          <li>
            <a className={item.cName} href={item.url} >
                {item.title}</a>
          </li>)
        })}
      </ul>
    </div>
  );
}
