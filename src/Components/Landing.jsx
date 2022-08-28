import React from 'react'
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { Box, Heading, Img } from "@chakra-ui/react";

const Landing = () => {
  return (
    <>
    <Box marginLeft="10" marginRight="10" marginTop="10">
          <Img src="https://n.nordstrommedia.com/id/44648fdb-be56-4600-addb-6d3c7ba21f2c.jpeg?h=200&w=1608"/>
        </Box>

    <div>
       <img style={{width:"95%", margin:"auto", marginTop:"50px"}} src="https://n.nordstrommedia.com/id/0a4d1c1c-e045-4f24-be62-b56b759440a6.jpeg?h=700&w=1608"/>
    </div>

    <div>
      <AwesomeSlider style={{ width: "95%", margin: "auto", marginTop: "50px", height: "600px" }}>
        <div>
          <img src="https://n.nordstrommedia.com/id/a5b73db2-4180-4576-b2ed-e68436550fc2.jpeg?h=700&w=1608" />
        </div>
        <div>
          <img src="	https://n.nordstrommedia.com/id/f3091a92-f53a-426d-b674-1ddb72ff5870.jpeg?h=700&w=1608" />
        </div>
      </AwesomeSlider>
    </div>
    <br/>

    <div>
      <img style={{width:"95%", margin:"auto", marginTop:"50px"}} src="https://n.nordstrommedia.com/id/9d44eb74-9bfd-4d63-9b11-d01d18c2e894.jpeg?h=700&w=1608"/>
    </div>

    <div>
        <AwesomeSlider
          style={{ width: "95%", margin: "auto", height: "600px", marginTop: "50px" }}
        >
          <div>
            <img src="	https://n.nordstrommedia.com/id/333c1532-3b85-44bd-92bf-ad5a2f8f5232.jpeg?h=700&w=1608" />
          </div>
          <div>
            <img src="	https://n.nordstrommedia.com/id/706ecb9a-f6be-440e-aaea-682902636a14.jpeg?h=700&w=1608" />
          </div>
          <div>
            <img src=" 	https://n.nordstrommedia.com/id/7e1f53cf-7978-4962-9da6-b4e700d5738f.jpeg?h=700&w=1608" />
          </div>
          <div>
            <img src=" 	https://n.nordstrommedia.com/id/ea36488f-561a-4d5d-a7d1-6249d7baf9e5.jpeg?h=700&w=1608" />
          </div>
          <div>
            <img src=" 	https://n.nordstrommedia.com/id/4fae5d2a-c345-4deb-8337-08a3b1be2349.jpeg?h=700&w=1608" />
          </div>
        </AwesomeSlider>
      </div>
      <br/>

    <div style={{width: "95%", margin: "auto", marginTop: "50px", borderTop: "2px solid black"}}>
      <h2 style={{padding: "30px", fontWeight: "500", fontSize: "23px", letterSpacing: "5px"}}>SHOP BY CATEGORY</h2>
      <div style={{display: "flex"}}>
        <div>
          <img src="	https://n.nordstrommedia.com/id/eeed2128-87d0-4dc2-885b-8cf00990d7a4.jpeg?h=365&w=268"/>
          <p style={{padding: "10px", fontWeight: "700"}}>Women</p>
        </div>
        <div>
          <img src="	https://n.nordstrommedia.com/id/0670ff1a-32ce-4993-981f-022273d21164.jpeg?h=365&w=268"/>
          <p style={{padding: "10px", fontWeight: "700"}}>Men</p>
        </div>
        <div>
          <img src="https://n.nordstrommedia.com/id/0d1f99a7-4e16-4d5a-bbab-6ec0c0d12bd3.jpeg?h=365&w=268"/>
          <p style={{padding: "10px", fontWeight: "700"}}>Kids</p>
        </div>
        <div>
          <img src="	https://n.nordstrommedia.com/id/308c5702-a581-41de-8d79-51d45fdbe85c.jpeg?h=365&w=268"/>
          <p style={{padding: "10px", fontWeight: "700"}}>Home</p>
        </div>
        <div>
          <img src="	https://n.nordstrommedia.com/id/c75b6a06-8e9e-4f6a-9513-1f0871f0eaea.jpeg?h=365&w=268"/>
          <p style={{padding: "10px", fontWeight: "700"}}>Beauty & Fragrance</p>
        </div>
        <div>
          <img src="	https://n.nordstrommedia.com/id/97f13efd-c141-47eb-91ed-9f41506b6cdb.jpeg?h=365&w=268"/>
          <p style={{padding: "10px", fontWeight: "700"}}>Designer</p>
        </div>
      </div>
    </div>

    <div style={{"borderTop":"2px solid black", "marginTop":"50px"}}>
      <h2 style={{marginTop:"50px", fontWeight: "500", fontSize: "23px", letterSpacing: "5px"}}>THE THREAD</h2>
      <p>Introducing your new go-to destination for all things fashion, beauty and lifestyle at Nordstrom, from how-tos and style inspiration to exclusive interviews and more.</p>
      <p style={{marginBottom:"30px"}}>Get Inspired</p>
      <div style={{display: "flex", margin: "auto", width: "95%", textAlign: "left", justifyContent:"space-between"}}>
      <div>
        <img src="https://n.nordstrommedia.com/id/48ef4265-14b7-46cf-a702-13ae9cb172f9.jpeg?h=516&w=536" alt="" />
        <h2 style={{fontWeight:"bold", fontSize: "18px", "marginTop": "15px"}}>Get the Look: Vibrant Tailoring</h2>
        <p>Read More</p>
      </div>
      <div>
        <img src="https://n.nordstrommedia.com/id/99d85eb2-6635-4048-b6fd-7af2456ad7be.jpeg?h=516&w=536" alt="" />
        <h2 style={{fontWeight:"bold", fontSize: "18px", "marginTop": "15px"}}>5 Ways to Set the Scene for a Cozy Fall</h2>
        <p>Read More</p>
      </div>
      <div>
        <img style={{height:"476px"}} src="https://n.nordstrommedia.com/id/4e959a29-2139-4384-8198-af7be4b20a18.jpeg?h=516&w=536" alt="" />
        <h2 style={{fontWeight:"bold", fontSize: "18px", "marginTop": "15px"}}>From The Nordy Pod:
        <br/>
        The Breast Prosthesis Program with Nikky Oliva</h2>
        <p>Read More</p>
      </div>
      </div>
    </div>

    </>
  )
}

export default Landing
