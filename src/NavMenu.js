import React, { Component } from "react";

const data = [
  {
    title: "Home",
    url: "#sdf"
  },
  {

    title: "Services",
    url: "#dfhbx",
    submenu: [
      {
        title: "For Entrepreneurs",
        url: "#azeza"
      },
      {
        title: "For Students",
        url: "#azeazdsfsd"
      },
      {
        title: "For hobbyists",
        url: "#azeazlkjljk"
      }
    ]
  },
  {

    title: "Contact",
    url: "#dsfds"
  }
];

const Nav = props => {
  const data = props.data;
  return (
    <li className="main_menu">
      <a href={data.url}>{data.title}</a>

      {data.submenu && (
        <ul>
          {data.submenu.map(el => {
            return (
              <li className="submenu_link">
                <a href={el.url}>{el.title}</a>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};

const NavMenu = () => {
  return (
    <div className="NavMenu">
      {data.map(NavMenu => (
        <Nav data={NavMenu} />
      ))}
    </div>
  );
};
export default NavMenu;
