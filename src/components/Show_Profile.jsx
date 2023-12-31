import React from "react";
import { useParams } from "react-router-dom";
import Services from "./Services";
import { FaRegEdit } from "react-icons/fa";
import "./Show_Profile.css";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

export default function Show_Profile() {
  const params = useParams();
  const [data, setData] = React.useState({ company: {} });
  const [isEditable, setEdit] = React.useState(false);
  const navi = useNavigate();

  React.useEffect(() => {
    console.log(params);
    getDataByid(params.id);
  }, []);

  function getDataByid(id) {
    Services.getUserById(id)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handlevalue(id, value) {
    let handledata = data;
    handledata[id] = value;
    setData(handledata);
    console.log(handledata);
  }
  function submitdata() {
    Services.updateUser(params.id, data)
      .then((res) => {
        console.log(res);
        setEdit(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <div>
      <div className="header_profile">
        <div className="bt_h1">
          <button onClick={() => navi("/list")}>
            <RiArrowGoBackFill />
          </button>
        </div>
        <div className="h1_head">
          <h1>View System User</h1>
        </div>
      </div>
      <div>
        <div className="form_wrap">
          {!isEditable && (
            <div className="noneditable">
              <form>
                <div>
                  <label>
                    Name :
                    <input type="text" id="name" value={data.name} readOnly />
                  </label>
                </div>
                <div>
                  <label>
                    Username :
                    <input
                      type="text"
                      id="uname"
                      value={data.username}
                      readOnly
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Email :
                    <input type="text" id="email" value={data.email} readOnly />
                  </label>
                </div>
                <div>
                  <label>
                    Contact NO:
                    <input
                      type="text"
                      id="c_number"
                      value={data.phone}
                      readOnly
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Company Name:
                    <input
                      type="text"
                      id="company_name"
                      value={data.company.name}
                      readOnly
                    />
                  </label>
                </div>
              </form>
              <div className="bt_edit">
                <button type="button" onClick={() => setEdit(!isEditable)}>
                  <FaRegEdit />
                </button>
              </div>
              <div className="show_id">
                <h2>
                  #{data.id}
                  <br />
                  {data.username}
                </h2>
              </div>
            </div>
          )}

          {isEditable && (
            <div className="editable">
              <form>
                <div>
                  <label>
                    Name :
                    <input
                      type="text"
                      id="name"
                      defaultValue={data.name}
                      onChange={(e) => handlevalue(e.target.id, e.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Username :
                    <input
                      type="text"
                      id="username"
                      defaultValue={data.username}
                      onChange={(e) => handlevalue(e.target.id, e.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Email :
                    <input
                      type="text"
                      id="email"
                      defaultValue={data.email}
                      onChange={(e) => handlevalue(e.target.id, e.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Contact NO:
                    <input
                      type="text"
                      id="phone"
                      defaultValue={data.phone}
                      onChange={(e) => handlevalue(e.target.id, e.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Company Name:
                    <input
                      type="text"
                      id="company.name"
                      defaultValue={data.company.name}
                      onChange={(e) => handlevalue(e.target.id, e.target.value)}
                    />
                  </label>
                </div>
              </form>
              <div className="bt_save">
                <button onClick={() => submitdata()}>Save</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
