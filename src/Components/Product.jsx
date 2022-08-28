
import React from 'react'
import { Button, ButtonGroup, Input ,Heading} from "@chakra-ui/react";

const Product = () => {
  return (
    <div>

<div style={{"display":"flex",width:"95%","height":"auto", marginTop: "50px"}}>
<div style={{width:"15%",height:"100px","marginLeft":"50px","position":"sticky" ,top: "0"}}>
<div style={{"height":"25px"}}> <p style={{"marginLeft":"50px","fontSize":"20px"}}> Size + </p>
<hr /></div>
<br />
<div style={{"height":"25px"}}> <p style={{"marginLeft":"50px","fontSize":"20px"}}> Color + </p>
<hr /></div>
<br />
<div style={{"height":"25px"}}> <p style={{"marginLeft":"50px","fontSize":"20px"}}> Brands + </p>
<hr /></div>
<br />
<div style={{"height":"25px"}}> <p style={{"marginLeft":"50px","fontSize":"20px"}}> Features + </p>
<hr /></div>
<br />
<div style={{"height":"25px"}}> <p style={{"marginLeft":"50px","fontSize":"20px"}}> Fit  + </p>
<hr /></div>
<br />
<div style={{"height":"25px"}}> <p style={{"marginLeft":"50px","fontSize":"20px"}}> Material + </p>
<hr /></div>
<br />
<div style={{"height":"25px"}}> <p style={{"marginLeft":"50px","fontSize":"20px"}}> Neck Style  + </p>
<hr /></div>
<br />
<div style={{"height":"25px"}}> <p style={{"marginLeft":"50px","fontSize":"20px"}}> Occasion + </p>
<hr /></div>
<br />
<div style={{"height":"25px"}}> <p style={{"marginLeft":"50px","fontSize":"20px"}}> Sleeve Length + </p>
<hr /></div>
<br />
<div style={{"height":"25px"}}> <p style={{"marginLeft":"50px","fontSize":"20px"}}> Style + </p>
<hr /></div>
<br />


</div>
{/* 
grid format */}
<div style={{"display":"grid",
"grid-template-columns": "repeat(4,1fr)",
"grid-template-rows": "repeat(3,400px)",
"grid-gap":"20px",
"height":"auto"}}>

<div style={{"width":"25%",width:"80%",}}>
    <img style={{"width":"300px","height":"300px"}} src=" https://n.nordstrommedia.com/id/sr3/4023aad0-9c4e-4a05-a4f4-b7005261357c.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Love By Design</p>
    <p style={{"textAlign":"center"}}>$44.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src=" https://n.nordstrommedia.com/id/sr3/d38ca1e4-a038-4241-bdce-32fddbb14327.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Calvin Klein</p>
    <p style={{"textAlign":"center"}}>$50.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src="https://n.nordstrommedia.com/id/sr3/3e5e7649-4f92-4024-811a-eab52073e835.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Julia Jordan</p>
    <p style={{"textAlign":"center"}}>$64.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src="https://n.nordstrommedia.com/id/sr3/554d0359-4940-4d2c-a626-89ff6fb535ae.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Madewell</p>
    <p style={{"textAlign":"center"}}>$34.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>


<div style={{"width":"25%",width:"80%",}}>
    <img style={{"width":"300px","height":"300px"}} src="https://n.nordstrommedia.com/id/sr3/ea141598-2867-40f3-9bfd-00acd76ee70c.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Love By Design</p>
    <p style={{"textAlign":"center"}}>$44.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src=" https://n.nordstrommedia.com/id/sr3/a330d0a3-3ec8-4855-994f-e4649153b242.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Calvin Klein</p>
    <p style={{"textAlign":"center"}}>$50.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src="https://n.nordstrommedia.com/id/sr3/18eebb3f-3b6d-4936-9e65-3c742c7db1c8.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Julia Jordan</p>
    <p style={{"textAlign":"center"}}>$64.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src=" https://n.nordstrommedia.com/id/sr3/0bdbbcb1-a77b-4e74-b9ca-62f9298642a8.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Madewell</p>
    <p style={{"textAlign":"center"}}>$34.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>


<div style={{"width":"25%",width:"80%",}}>
    <img style={{"width":"300px","height":"300px"}} src="https://n.nordstrommedia.com/id/sr3/1842ef7f-9cca-4896-ad55-f29717cab61b.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Love By Design</p>
    <p style={{"textAlign":"center"}}>$44.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src="https://n.nordstrommedia.com/id/sr3/db2242cb-1e3a-48f2-990d-275a82f6b724.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Calvin Klein</p>
    <p style={{"textAlign":"center"}}>$50.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src="https://n.nordstrommedia.com/id/sr3/e72b7b5c-9cc9-4b77-92a9-2f023537db79.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Julia Jordan</p>
    <p style={{"textAlign":"center"}}>$64.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src="https://n.nordstrommedia.com/id/sr3/11b782e0-99dc-45a2-9b6a-5ce7af60addc.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Madewell</p>
    <p style={{"textAlign":"center"}}>$34.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>


<div style={{"width":"25%",width:"80%",}}>
    <img style={{"width":"300px","height":"300px"}} src=" https://n.nordstrommedia.com/id/sr3/c91dc2c2-58c4-4aab-b2a4-f34f52891a29.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Love By Design</p>
    <p style={{"textAlign":"center"}}>$44.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src="https://n.nordstrommedia.com/id/sr3/aec2aba4-220f-4dbf-bc3e-ff19429060de.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Calvin Klein</p>
    <p style={{"textAlign":"center"}}>$50.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src="https://n.nordstrommedia.com/id/sr3/224e3707-3803-4816-90b1-0c42b44a1548.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Julia Jordan</p>
    <p style={{"textAlign":"center"}}>$64.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src=" https://n.nordstrommedia.com/id/sr3/bb197714-3580-4a25-a9fe-fec1705e95e4.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Madewell</p>
    <p style={{"textAlign":"center"}}>$34.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>


<div style={{"width":"25%",width:"80%",}}>
    <img style={{"width":"300px","height":"300px"}} src=" https://n.nordstrommedia.com/id/sr3/90ae3dbb-7bbd-4c8d-870c-51c00e38c2e1.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Love By Design</p>
    <p style={{"textAlign":"center"}}>$44.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src=" https://n.nordstrommedia.com/id/sr3/32779fb3-5d06-4dfe-b304-b5039c0a38f3.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Calvin Klein</p>
    <p style={{"textAlign":"center"}}>$50.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src="https://n.nordstrommedia.com/id/sr3/365e8118-931e-4da6-9a68-c3e27ddca353.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Julia Jordan</p>
    <p style={{"textAlign":"center"}}>$64.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src=" https://n.nordstrommedia.com/id/sr3/231d4104-5cf8-447e-a5d2-3ba4d9040b3a.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Madewell</p>
    <p style={{"textAlign":"center"}}>$34.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>


<div style={{"width":"25%",width:"80%",}}>
    <img style={{"width":"300px","height":"300px"}} src="https://n.nordstrommedia.com/id/sr3/baf14eb5-cce5-4847-a59e-c72fab8e5dc6.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Love By Design</p>
    <p style={{"textAlign":"center"}}>$44.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src="https://n.nordstrommedia.com/id/sr3/7b843707-65cf-466c-ad50-7f490c830d88.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Calvin Klein</p>
    <p style={{"textAlign":"center"}}>$50.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src="https://n.nordstrommedia.com/id/sr3/e00cea72-9a84-4b0d-aade-7f978310cf0a.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Julia Jordan</p>
    <p style={{"textAlign":"center"}}>$64.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src=" https://n.nordstrommedia.com/id/sr3/5cd9bac3-ad92-4d58-aeff-1c007fc52f27.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Madewell</p>
    <p style={{"textAlign":"center"}}>$34.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>




</div>


</div>
    </div>
  )
}

export default Product