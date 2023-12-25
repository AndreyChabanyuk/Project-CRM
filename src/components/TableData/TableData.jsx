import { useEffect, useState } from "react";
import AllDataTable from "./../AllDataTable/index";
import Navmenu from "../Navmenu";
import { Link } from "react-router-dom";
import { serverPath } from "../../helpers/serverPath";
import { arrBtns } from "./index";
import Avatar from "./img/avatar.jpg";

const TableData = () => {
  const [filter, setFilter] = useState({
    product: "all",
    status: "all",
    everything: "another",
  });

  const [filterData, setFilterData] = useState(null);

  useEffect(() => {
    document.body.className = "with-nav body--dashboard";
    fetch(
      `${serverPath}array?${
        filter.status === "all" ? "" : `status=${filter.status}&`
      }${filter.product === "all" ? "" : `product=${filter.product}&`}${
        filter.everything === "another" ? "" : `everything=${filter.everything}`
      }`
    )
      .then((res) => res.ok && res.json())
      .then((data) => {
        setFilterData(data);
        setLoading(false);
      });
  }, [filter]);

  const Count = () => {
    if (filterData) {
      const res = filterData.reduce((acc, request) => {
        if (!acc[request.status]) {
          acc[request.status] = 1;
        } else {
          acc[request.status]++;
        }
        return acc;
      }, {});

      return res;
    }
  };

  const Everything = () => {
    if (filterData) {
      const result = filterData.reduce((acc, requer) => {
        if (!acc[requer.everything]) {
          acc[requer.everything] = 1;
        } else {
          acc[requer.everything]++;
        }
        return acc;
      }, {});

      return result;
    }
  };

  const filterCount = Count();
  const everythingCount = Everything();

  const ReturnCount = () => {
    for (const request in filterCount) {
      return (
        <div className="badge" id={`badge-${request}`}>
          {filterCount[request]}
        </div>
      );
    }
  };

  const ReturnEverything = () => {
    for (const request in everythingCount) {
      return (
        <div className="badge" id={`badge-${request}`}>
          {everythingCount[request]}
        </div>
      );
    }
  };

  const getProduct = () => {
    if (filterData) {
      return filterData.map((el) => {
        return <AllDataTable el={el} key={el.id} />;
      });
    }
  };

  const TableDeleteData = () => {
    const res = confirm("Вы уверены,что хотите удалить все заявки?");
    if (res) {
      if (filterData) {
        filterData.map((item) => {
          fetch(serverPath + "array/" + item.id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          }).then(() => {});
        });
      }
    }
  };

  const [isLoading, setLoading] = useState(true);

  return (
    <>
      <Navmenu />
      <div className="left-panel blue-skin">
        <div className="left-panel__logo">
          <div className="left-panel__logo-title">CRM заявки</div>
          <div className="left-panel__logo-subtitle">
            учебный проект webcademy
          </div>
        </div>
        <div className="left-panel__user clearfix">
          <div className="left-panel__user-photo">
            <img src={Avatar} alt="Avatar" />
          </div>
          <div className="left-panel__user-name">
            Андрей <br />
            Чабанюк
          </div>
        </div>
        <div className="left-panel__navigation">
          <div className="left-panel__navigation-title">Заявки</div>
          <ul>
            {arrBtns.map((el) => (
              <li key={el.name}>
                <Link
                  onClick={() => setFilter({ ...filter, status: el.active })}
                  id={el.name}
                  data-value={el.name}
                  data-role="left-status"
                  className={el.active === filter.status ? "active" : ""}
                >
                  {el.name}{" "}
                  {el.active === filter.status &&
                  el.active === filter.everything ? (
                    <ReturnCount />
                  ) : (
                    ""
                  )}
                  {el.active === filter.status &&
                  el.active !== filter.everything ? (
                    <ReturnEverything />
                  ) : (
                    ""
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="main-wrapper">
        <div className="container-fluid">
          <div className="header-top">
            <div className="admin-heading-1">Все заявки</div>

            <button
              onClick={() => {
                TableDeleteData();
              }}
              className="btn-delete-data"
            >
              <span className="text">Удалить все заявки</span>
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                </svg>
              </span>
            </button>
          </div>
          <div className="row mb-3 justify-content-start">
            <div className="col">
              <div
                id="topStatusBar"
                className="btn-group"
                role="group"
                aria-label="..."
              >
                {arrBtns.map((el) => (
                  <button
                    key={el.name}
                    onClick={() => setFilter({ ...filter, status: el.active })}
                    className={`btn btn-light ${
                      el.active === filter.status ? "active" : ""
                    } `}
                    data-value={el.name}
                  >
                    {el.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="col">
              <select
                onChange={(e) =>
                  setFilter({ ...filter, product: e.target.value })
                }
                className="custom-select"
                id="productSelect"
              >
                <option value="all">Все продукты</option>
                <option value="course-html">Курс по верстке</option>
                <option value="course-js">Курс по JavaScript</option>
                <option value="course-vue">Курс по VUE</option>
                <option value="course-php">Курс по PHP</option>
                <option value="course-wordpress">Курс по WordPress</option>
              </select>
            </div>
          </div>
          <div />
          <table className="table fs-14">
            <thead>
              <tr>
                <th>ID</th>
                <th>дата</th>
                <th>продукт</th>
                <th>имя</th>
                <th>email</th>
                <th>телефон</th>
                <th>статус</th>
                <th></th>
              </tr>
            </thead>
            <tbody id="tbody">
              {isLoading && (
                <div className="preloader">
                  <div className="preloader__row">
                    <div className="preloader__item"></div>
                    <div className="preloader__item"></div>
                  </div>
                </div>
              )}
              {getProduct()}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default TableData;
