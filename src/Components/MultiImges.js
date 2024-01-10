import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyAdvance.css";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

function MultiImges() {
  let [formData, UpdaterState] = React.useState({
    name: "",
    last_name: "",
    email: "",
    password: "",
    address: "",
    resume: ""
  })


  function handleInputField(e) {
    let { name, value } = e.target;

    let state = { ...formData };

    state[name] = value;  
    console.log(state);

    // for multiple files uploading kay liyy

    if (e.target.name === "resume") {
      let filesdata = [];
    
      for (let i = 0; i < e.target.files.length; i++) {
        let file = e.target.files[i];
    
        let obj = {};
        obj.file = file;
        obj.id = 'img' + i;
        obj.type = file.type;
    
        filesdata.push(obj);
      }
    
      state.resume = filesdata;
      UpdaterState(state);
    }
  }

  function clearSelectedFile(id) {
    let state = { ...formData };

    let updatedFiles = [];
     updatedFiles = state.resume.filter((elem) => elem.id !== id);

    state.resume = updatedFiles;
    UpdaterState(state);
  }

  // function form_send_backend() {
  //   console.log(formData);
  //   console.log("form sent succsessfully");
  // }
  

  return (
    <div className="p-5 ad-wrapper">
      <Row className="mb-3 " >
        <Col>
          <Card>
            <Card.Body className="d-flex justify-content-center align-items-center bg-light">
              <h5>College Form</h5>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row className="mb-3 g-3 d-flex justify-content-center" >
        <Col md={6}>
          <Card>
            <Card.Body>
              <Row className="mb-3 g-3 bg-light">
                <Col md={6}>
                  <input
                    className="form-control"
                    placeholder="Enter Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputField}
                  />
                </Col>
                <Col md={6}>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Your Last_Name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputField}
                  />
                </Col>
                <Col md={6}>
                  <input
                    className="form-control"
                    placeholder="Enter Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputField}
                  />
                </Col>
                <Col md={6}>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputField}
                  />
                </Col>
                <Col md={12}>
                  <input
                    className="form-control"
                    placeholder="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputField}
                  />
                </Col>
              </Row>
              <Row className="mb-3 g-3">
                <Col md={12}>
                  
                  <label
                    style={{
                      height: "130px",
                      width: "100%",
                      borderRadius: "10px",
                      border: "1px dashed silver",
                      cursor: "pointer",
                      color: "silver",
                    }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <input
                      type="file"
                      name="resume"
                      onChange={handleInputField}
                      hidden
                      multiple
                    />
                    Upload your resume
                  </label>
                  <br />
                  {formData.resume?.length > 0 && (
                    <div>
                      <Row>
                        {formData.resume?.map((elem) => (
                          <Col md={4} key={elem.id} className="mb-3 overflow-hidden">
                            <div
                              style={{
                                boxShadow: "0px 0px 3px ",
                              }}
                            >
                              <img
                                src={URL.createObjectURL(elem.file)}
                                className="img-fluid"
                              />
                              <Button
                                variant="danger"
                                size="sm"
                                className="d-block w-100"
                                style={{marginLeft:'0px'}}
                                onClick={()=>clearSelectedFile(elem.id)}
                              >
                                Delete
                              </Button>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </div>
                  )} 
                </Col>
                <div className="text-end">
                  <button
                    // onClick={send_data_to_backend}
                    className="btn btn-success btn-sm"
                  >
                    Submit now
                  </button>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default MultiImges;

