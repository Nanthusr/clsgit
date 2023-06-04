import '../App.css';
import pic2 from '../Images/pic2.jpg';
import brand1 from '../Images/brand1.png'
import brand2 from '../Images/brand2.png'
import breakfast from '../Images/breakfast.png'
import painkiller from '../Images/painkiller.png'
import Take from '../components/Take.mp4'
import social from '../Images/social.png'
import pay from '../Images/pay.png'



function ProductList({ product,addToCart }) {
    return ( <>
        <div className='flex'>
            {
                product.map((productItem, productIndex) => {
                    return (
                        <div style={{ width: '32%'  }}>
                            <div className='product-item'>
                                <img src={productItem.url} width="80%"  />
                                <p>{productItem.name} | {productItem.category} </p>
                                <p> {productItem.seller} </p>
                                <p> Rs. {productItem.price} /-</p>
                                <button
                                    onClick={() => addToCart(productItem)}
                                >Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>

         <div className='thor'>
       <ul>
       <li><a href="#">Medicines</a></li>
       <li><a href="#">Lab Tests</a></li>
       <li><a href="#">Consult Doctors</a></li>
       <li><a href="#">Ayurveda</a></li>
       <li><a href="#">Care Plan</a></li>
       </ul>
       </div> 

    
       <div >
       <img className='banner' src={pic2} alt=''></img>
       </div> 

        <div >
        <video className='main' src={Take} autoPlay loop muted></video>
       </div>  
        

       <div>
        <img className='live' src={brand1} alt=''></img>
        <img className='live' src={brand2} alt=''></img>
        <img className='live' src={breakfast} alt=''></img>
        <img className='live' src={painkiller} alt=''></img>
        </div> 


        <p className='book'>
            <h3> Stay Healthy with Tata 1mg: Your Favourite Online Pharmacy and Healthcare Platform</h3>
            We Bring Care to Health.
            Tata 1mg is India's leading digital healthcare platform. From doctor consultations on chat to online pharmacy and lab tests at home: we have it all covered for you. Having delivered over 25 million orders in 1000+ cities till date, we are on a mission to bring "care" to "health" to give you a flawless healthcare experience.

            <h3>Your Favourite Online Pharmacy!</h3>
            Tata 1mg is India's leading online chemist with over 2 lakh medicines available at the best prices. We are your one-stop destination for other healthcare products as well, such as over the counter pharmaceuticals, healthcare devices and homeopathy and ayurveda medicines.

            With Tata 1mg, you can buy medicines online and get them delivered at your doorstep anywhere in India! But, is ordering medicines online a difficult process? Not at all! Simply search for the products you want to buy, add to cart and checkout. Now all you need to do is sit back as we get your order delivered to you.

            In case you need assistance, just give us a call and we will help you complete your order.

            And there is more! At Tata 1mg, you can buy health products and medicines online at best discounts.

            Now, isn't that easy? Why go all the way to the medicine store and wait in line, when you have Tata 1mg Pharmacy at your service.

            <h3>The Feathers in Our Cap</h3>
            At , our goal is to make healthcare understandable, accessible and affordable in India. We set out on our journey in 2015, and have come a long way since then. Along the way, we have been conferred with prestigious titles like BML Munjal Award for 'Business Excellence through Learning and Development', Best Online Pharmacy in India Award and Top 50 venture in The Smart CEO-Startup50 India. We have been selected as the only company from across the globe for SD#3 "Health & Well Being for all" by Unreasonable group, US State Department. In 2019 alone we received three awards including the BMW Simply Unstoppable Award.

            <h3>The Services We Offer</h3>
            Tata 1mg is India's leading digital healthcare platform, where you can buy medicines online with discount. Buy medicine online in Delhi, Mumbai, Bangalore, Hyderabad, Pune, Gurgaon, Noida, Kolkata, Chennai, Ahmedabad, Lucknow and around a 1000 more cities. Besides delivering your online medicine order at your doorstep, we provide accurate, authoritative & trustworthy information on medicines and help people use their medicines effectively and safely.

            We also facilitate lab tests at home. You can avail over 2,000 tests and get tested by 120+ top and verified labs at the best prices. Need to consult a doctor? On our platform, you can talk to over 20 kinds of specialists in just a few clicks.

            Customer centricity is the core of our values. Our team of highly trained and experienced doctors, phlebotomists and pharmacists looks into each order to give you a fulfilling experience.

            We ve made healthcare accessible to millions by giving them quality care at affordable prices. Customer centricity is the core of our values. Our team of highly trained and experienced doctors, phlebotomists and pharmacists looks into each order to give you a fulfilling experience.

            Visit our online medical store now, and avail online medicine purchase at a discount.
            Stay Healthy!
        </p>

        <img className='social' src={social} alt=''></img>
        <img className='social' src={pay} alt=''></img> 

</>)

     
   
}

export default ProductList