import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {


  const [lname, setlname] = useState("");
  const [fname, setfname] = useState("");
  const [purpose, setpurpose] = useState("");
  const [date, setdate] = useState("");

  const history = useNavigate();

   const addVisitor = () => {
    const newPeople = {
      lname: lname,
      fname: fname,
      purpose: purpose,
      date: date,
    };

    setVisitors((prev) => [...prev, newPeople]);
    console.log(visitors);
  };


  const [visitors, setVisitors] = useState([
    {
      lname: "Griffin",
      fname: "Peter",
      purpose: "Work out",
      date: "08-11-14",
    },
    {
      lname: "Beuwolf",
      fname: "Stewie",
      purpose: "Experiment",
      date: "11-26-12",
    },
  ]);

  const handleDelete = (id) => {
    let index = visitors
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

    visitors.splice(index, 1);
    console.log(index);
    console.log("delete btn");
    history("/project");
  };
  const handleEdit = () => {
    alert("No edit functionality yet.");
  };


  return (
    <div>
        <div className='d-flex justify-content-center'>
      <div className="container d-flex mx-5 justify-content-center w-100 my-5 p-5 align-items-center">
            <div className="row-md-offset m-auto d-flex mt-5 justify-content-center w-100">
                <div className="col-sm-4">
                   
                <div className="card bg-secondary">
        <div className="card-header">
            <h3>Visitor Entry</h3>
        </div>
        <div className="card-body">

            <div className="form-floating mb-3">
                <input type="text" name="lname" 
                onChange={(e) => {
                    setlname(e.target.value);
                }}
                className="form-control"/>
                <label htmlFor="lname">Last Name</label>
            </div>

            <div className="form-floating mb-3">
                <input type="text" name="fname"
                onChange={(e) => {
                    setfname(e.target.value);
                }}
                className="form-control"/>
                <label htmlFor="text">First Name</label>
            </div>

            <div className="form-floating mb-3">
                <input type="text" name="purpose"
                onChange={(e) => {
                    setpurpose(e.target.value);
                }}
                className="form-control"/>
                <label htmlFor="purpose">Purpose of the Visit</label>
            </div>

            <div className="form-floating mb-3">
                <input type="date" name="date"
                onChange={(e) => {
                    setdate(e.target.value);
                }}
                className="form-control"/>
                <label htmlFor="date">Date</label>
            </div>

        <button
                    onClick={addVisitor}
                    className="btn btn-success btn-sm mt-3 w-100"
                    >
                    Submit
                    </button>
    </div>
    </div>
               
                </div>
    {/* gap */}
                <div className="col-sm-8 mx-5">
                
                <h3>List of Visitors</h3>
                <br />
                <table className="table table-striped">
            <thead>
                    <tr className="text-center bg-secondary">
                        <th>Id no.</th>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Purpose of Visit</th> 
                        <th>Date</th> 
                    </tr>
            </thead>
            <tbody className="text-center">
               {visitors.map((visitor, index) => {
              return (
                <tr key={index}>
                  <td>{visitor.lname}</td>
                  <td>{visitor.fname}</td>
                  <td>{visitor.purpose}</td>
                  <td>{visitor.date}</td>
                    <td>
                    <button
                      className="btn btn-sm bg-danger m-1 w-100 text-white "
                      onClick={() => handleDelete(visitor.id)}
                    >
                      Delete
                    </button>
                    </td>
                </tr>
              );
            })}



                      

            </tbody>
       
    </table>


                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Form