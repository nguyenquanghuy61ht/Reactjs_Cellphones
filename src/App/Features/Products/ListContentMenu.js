import React from "react";
import styles_content from "./content.module.scss";

function ListContentMenu({ data }) {
  return (
    <>
      <div className="box_list_big">
        {data.map((elm, idx) => {
          return (
            <div
              key={idx}
              className={`box_list_child_menu ${elm.className}  shadow-lg`}
            >
              <ul className={styles_content.list_menu}>
                {elm.data.map((name, index) => {
                  return (
                    <li key={index} className={styles_content.item_menu_child}>
                      <a>
                        <span>{name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ListContentMenu;
