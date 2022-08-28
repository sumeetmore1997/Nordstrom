
import React from 'react'
import { Button, ButtonGroup, Input ,Heading} from "@chakra-ui/react";

const MenProduct = () => {
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
    <img style={{"width":"300px","height":"300px"}} src=" https://n.nordstrommedia.com/id/sr3/23ace0fa-1413-4d7d-b900-677e847fda04.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Love By Design</p>
    <p style={{"textAlign":"center"}}>$44.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src=" https://n.nordstrommedia.com/id/sr3/808c6095-7b20-4815-9b4d-69a79da408b6.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Calvin Klein</p>
    <p style={{"textAlign":"center"}}>$50.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src="https://n.nordstrommedia.com/id/sr3/16ebefdd-3a2b-45ca-9fc1-7ebd6c55404d.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Julia Jordan</p>
    <p style={{"textAlign":"center"}}>$64.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src="https://n.nordstrommedia.com/id/sr3/47bea57b-703d-45b2-8233-811e541defd0.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Madewell</p>
    <p style={{"textAlign":"center"}}>$34.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>


<div style={{"width":"25%",width:"80%",}}>
    <img style={{"width":"300px","height":"300px"}} src="https://n.nordstrommedia.com/id/sr3/35c4ee4d-9479-4d24-afdc-5546635d839f.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Love By Design</p>
    <p style={{"textAlign":"center"}}>$44.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src="https://n.nordstrommedia.com/id/sr3/99f04624-6684-491b-847c-16a01da0f4da.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Calvin Klein</p>
    <p style={{"textAlign":"center"}}>$50.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src="https://n.nordstrommedia.com/id/sr3/111e3bbd-f66e-46db-8c1d-6bb61205b626.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Julia Jordan</p>
    <p style={{"textAlign":"center"}}>$64.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src=" https://n.nordstrommedia.com/id/sr3/34c30310-6de3-466a-bfee-f01df851de0c.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Madewell</p>
    <p style={{"textAlign":"center"}}>$34.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>


<div style={{"width":"25%",width:"80%",}}>
    <img style={{"width":"300px","height":"300px"}} src="https://n.nordstrommedia.com/id/sr3/60d47af1-7d28-4ff5-8f42-86fdb9aa6aab.jpeg?h=365&w=240&dpr=2"/>
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
    <img style={{"width":"300px","height":"300px"}} src="https://n.nordstrommedia.com/id/sr3/89ae587d-c8b4-4bbd-a32c-d80553f14a59.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Madewell</p>
    <p style={{"textAlign":"center"}}>$34.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>


<div style={{"width":"25%",width:"80%",}}>
    <img style={{"width":"300px","height":"300px"}} src=" https://n.nordstrommedia.com/id/sr3/8aa03954-35c5-45ca-8fe2-f7a643c6f372.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Love By Design</p>
    <p style={{"textAlign":"center"}}>$44.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src="https://n.nordstrommedia.com/id/sr3/7075d89b-a65e-4607-850a-30331b09b13a.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Calvin Klein</p>
    <p style={{"textAlign":"center"}}>$50.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src="https://n.nordstrommedia.com/id/sr3/86715b9e-662e-45db-bb33-bd876a3b4fde.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Julia Jordan</p>
    <p style={{"textAlign":"center"}}>$64.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src=" https://n.nordstrommedia.com/id/sr3/f06e1678-4227-4119-ab2b-27251d10f135.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Madewell</p>
    <p style={{"textAlign":"center"}}>$34.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>


<div style={{"width":"25%",width:"80%",}}>
    <img style={{"width":"300px","height":"300px"}} src=" https://n.nordstrommedia.com/id/sr3/6b927f32-74f4-42f3-b7ab-24c8dac0946c.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Love By Design</p>
    <p style={{"textAlign":"center"}}>$44.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src="https://n.nordstrommedia.com/id/sr3/12a83611-2f6e-4883-9c7b-875102c5b665.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Calvin Klein</p>
    <p style={{"textAlign":"center"}}>$50.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src="https://n.nordstrommedia.com/id/sr3/4570ec3e-0a32-44dd-8c5a-60832edd3b94.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Julia Jordan</p>
    <p style={{"textAlign":"center"}}>$64.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src=" https://n.nordstrommedia.com/id/sr3/27de1ef9-70bd-4b91-a6d0-a381c13c3098.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Madewell</p>
    <p style={{"textAlign":"center"}}>$34.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>


<div style={{"width":"25%",width:"80%",}}>
    <img style={{"width":"300px","height":"300px"}} src="https://n.nordstrommedia.com/id/sr3/3a2c1ec0-c2b6-4799-853d-650d562fa9d0.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Love By Design</p>
    <p style={{"textAlign":"center"}}>$44.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src="https://n.nordstrommedia.com/id/sr3/3f399042-3319-4f04-a4bb-b2aa209c5f75.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Calvin Klein</p>
    <p style={{"textAlign":"center"}}>$50.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src="https://n.nordstrommedia.com/id/sr3/016f186a-e217-4869-b888-9dfe6eccb244.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Julia Jordan</p>
    <p style={{"textAlign":"center"}}>$64.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>
<div style={{"width":"20%",width:"80%"}}>
    <img style={{"width":"300px","height":"300px"}} src=" https://n.nordstrommedia.com/id/sr3/a4b1d9ab-a306-42ee-a5f8-1db368c299a1.jpeg?h=365&w=240&dpr=2"/>
    <p style={{"textAlign":"center"}}>Madewell</p>
    <p style={{"textAlign":"center"}}>$34.97</p>
    <button style={{"backgroundColor":"teal","borderRadius":"5px",marginLeft:"60px","padding":"3px","color":"white"}}>Shop Now</button>
</div>




</div>


</div>
    </div>
  )
}

export default MenProduct