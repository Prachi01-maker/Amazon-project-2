import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img 
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/pc_unrec_refresh._CB555261616_.jpg"
          alt=""
           />

           <div className="home__row">
            <Product id="12533470" title='The psychology of money' price={200} image='https://th.bing.com/th/id/OIP.9AaKGsWB2qQsqwbiDhjbUwAAAA?pid=ImgDet&w=184&h=284&c=7&dpr=1.3' rating={5}/>

            <Product id="76539980" title='Ladies brown crossbody bag' price={2699} image='https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fdf%2Fbb%2Fdfbb88f4cdd126751b277426cc9ed4f44b7c850c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]' rating={3} />
            
           </div>

           <div className="home__row">
           <Product id="74500870" title='ASIAN Casual Sneaker Shoes for Men | Soft Cushioned Insole || MOSCOW-12 Sneakers for Men' price={1500} image='https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/394371/02/sv01/fnd/IND/fmt/png/Smashic-Unisex-Sneakers' rating={4}/>
           <Product id="73539570" title='AMIGOS Digital T800 Ultra Smart Earth Waterproof Multi-Functional Automatic Digital Sports Watch for Mens Kids Watch for boys ' price={300} image='https://th.bing.com/th?id=OIP.NUkFxDadBF48RzpSlvf9qQAAAA&w=129&h=104&c=7&bgcl=9bbddb&r=0&o=6&dpr=1.3&pid=13.1' rating={1}/>
           <Product id="76589875" title='Estele Earrings for Women Gold Plated Latest Stylish Designer Oval Shaped Stud Earrings for Girls and Women-393/707 ER' price={150} image='https://www.bing.com/th?id=OPAC.RLxht3zWrHqG0g474C474&o=5&pid=21.1&w=160&h=240&rs=1&qlt=100&dpr=1.3&c=8&pcl=f5f5f5' rating={2}/>
           </div>

           <div className="home__row">
           <Product id="76539870" title='Dekorly Artificial Potted Plants, 8 Pack Artificial Plastic Eucalyptus Plants Small Indoor Potted Houseplants, Small Faux Plants for Home Decor Bathroom Office Farmhouse (Set 0F 8)' price={600} image='https://m.media-amazon.com/images/I/8139T8YbdkL._AC_UL480_FMwebp_QL65_.jpg' rating={5}/>
           </div>

       </div> 
    </div>
  );
}

export default Home;
