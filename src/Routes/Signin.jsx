import { Heading } from '@chakra-ui/react';
import React, { useState } from 'react'
import Footer from '../Components/Footer'
import Shopwhat from '../Components/Shopwhat'
import Sale from './Sale';

const Signin = () => {
        const [form, setForm] = useState({
          username: "",
          age: "",
          email: "",
          password: "",
        });
      
       
        const onChange = (e) => {
          let { checked, type, name, value, files } = e.target;
          console.log(e);
          console.log(type, name, value, checked);
      
          if (type === "checkbox") {
            setForm({
              ...form,
              [name]: checked,
            });
          } else if (type === "file") {
            setForm({
              ...form,
              [name]: files,
            });
          } else {
            setForm({
              ...form,
              [name]: value,
            });
          }
        };
      
        const handleOnSubmit = (e) => {
          e.preventDefault();
          <Sale />;
          console.log(form);
        };
      
       return (
    <div>
        <Shopwhat/>
        <br/>
        <br/>
      
        <div
          style={{
            backgroundColor: "ButtonFace",
            width: "95%",
            margin: "auto",
          }}
        >
          <br />
          
          <Heading style={{ textAlign: "center", color: "brown" }}>
            Sign In Page
          </Heading>
          <br />
          <br />
          <div
            style={{
              border: "1px solid teal",
              height: "350px",
              width: "350px",
              margin: "auto",
              padding: "20px",
            }}
          >
            <form onSubmit={handleOnSubmit}>
              <div
                style={{
                  border: "1px solid black",
                  backgroundColor: "lightgrey",
                }}
              >
                <label>Name :</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Name"
                  value={form.name}
                  onChange={onChange}
                  style={{ backgroundColor: "lightgrey" }}
                />
              </div>
              <br />
              <div style={{ border: "1px solid black" }}>
                <label>Age :</label>
                <input
                  type="number"
                  name="age"
                  placeholder="Enter Age...."
                  onChange={onChange}
                  style={{ backgroundColor: "lightgrey" }}
                />
              </div>
              <br />
              <div style={{ border: "1px solid black" }}>
                <label>Email :</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email...."
                  value={form.email}
                  onChange={onChange}
                  style={{ backgroundColor: "lightgrey" }}
                />
              </div>
              <br />
              <div style={{ border: "1px solid black" }}>
                <label>Password :</label>
                <input
                  type="text"
                  name="password"
                  placeholder="Enter pass...."
                  value={form.password}
                  onChange={onChange}
                  style={{ backgroundColor: "lightgrey" }}
                />
              </div>
              <br />
              <div style={{ border: "1px solid black" }}>
                <label> Gender</label>
                <select
                  name="selectGender"
                  value={form.selectgender}
                  onChange={onChange}
                  style={{ backgroundColor: "lightgrey" }}
                >

<option>select Gender</option>
                  <option value="male"> Male</option>
                  <option value="female"> Female</option>
                </select>
              </div>
              <br />

              <br />
              <div
                style={{
                  border: "1px solid black",
                  textAlign: "center",
                  cursor: "pointer",
                  backgroundColor: "rebeccapurple",
                  color: "white",
                }}
              >
                <button type="submit" style={{ textAlign: "center" }}>
                  Submit{" "}
                </button>
              </div>
            </form>
            <br />
            <br />
          </div>
        </div>
        
        <Footer />
      </div>

  )
}

export default Signin


