import "./OrderPage.css"
import product from "../../data";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { RiVisaLine, RiMastercardLine, RiPaypalFill, } from 'react-icons/ri';

function OrderPage() {

    function updatePaymentMethod(e) {
        setCurrPaymentGateway(e.target.value);
    }
    const paymentMethods = [
        {
            name: 'PayPal',
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png"
        },
        {
            name: 'Visa',
            img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWEAAACPCAMAAAAcGJqjAAABMlBMVEX///8OGmUAKJcOGmMAIoIAKJkAIoEAKJYHHnICIHkAI4UHHnEAJ5MOGmYAJIoKHG4AJo/f4OcAAFnk5vDe4e4AAGkAAGUAAHEAAGAAAFu8vsy8vtAAAIIAAIu7v9cAAFAAAJMAAHcAAG4AAHsAAE9FVKIAIJEQGV0AAIcAC48AGG309fgAE2QAF4XMz97X2eQAGJEAEWuoq8EAG4cAFnt2f7SwtdUADXzu7vIAEXSKkLUAGZecob/Dx90AEYUAHIdudqaZn8icoLxfZ5qGjbhocapLV54qPJIeNJBdZ6cyQ5IAAEIXI2qDhqUNKYh3gboYNJ9ZXoo7RocgJmSkqtFucJEsOHtqc6dLUYQgMHwwQZgAIJldarN9gqVBT5pFUJA8QXZWZLBkaI1PVIR6fZxQW5iI2kHvAAAS4klEQVR4nO2de1fiyBbFo8OojYC0yEsJAunmqrwRBRTBB/aot7Wn32Pbj7k93d//K9wkvFJV+yQV7Ky77lrZa03/MyGSn8ddVeecqiiKL1++fPny5cuXL1++fPny5cuXL1++fPny5cuXL1++fPn6f1DspDe8fPFHJGOocvX1+uAsWyv9r7/VTKWnLuTye3fIG9UsV8lcQyiWPbjRMpl+v7I/iIw0GFQqfR31/vVZ1d231VWKbSDFXN/Iqs1/PzO1zWid0Mvbpy7uvZqIE7qYXVRNFApJQfl8Pulw9+rwTtMqkWAwIioajVb6O5kbN5Srr4pqDupPF88s6sf2v2b6TdTCVGFDqfXXHdlb1xKrqyuCnuiKW+KzV3jCaclU64K+s6JsDNtaJTgSIGwg1rXf3+kfnEh92dhztf774uLi70A52SeGui0/217/jUa8wCDW/2usy8bFaQMR1hE33liuuuhiwu0efefsV60dnIombKiyk5Hwm0O1uLy4SBF27zeMOpu3b3WTkCNs/LMt+QMTKwThwpblqiQPeIw4T/6U7J02CFplSzgazTj/1R2qi8vLyxTh43dyD2ynzub7bSOUHW3C/Gddyiia8dVVbBMFy1UxwSTGhJPEsFr9QwsGgk6ErYhDjl91Q12eEEaIHy5lntdZNT2U18PONhEOl/+Wud+HPUx4JX5kuWoLxLCBOHCP7/ox3woEOML2QVxx5vNn0SRMBvGizPNK6en5Wz2SnYM4vel8r1pqdRUjjlv/BI4EGx4Rbp2im1bb7YApF0Hcd/wbP1SXZ4QR4tyvnF4/vV3fLjsRLv/lfKMvDYJwg5kkvGlgwvkmuOdRPhhwTXjHcdi4Ki4v29pETm4+Iq3N18/S9mNdeN35l5pYW8OE48wTAxs2ESfBBOBaC0wlbxMZp29aVZeXl21t4vjMBT4pdX5sp+1tYsvpFs34mDCPeI8x2BpJWLzl17Zuz9KEJ4gHn5y+6nVxBJcO4ofPbujJqXQ78wow1qXOnW7wZo8gXGD+/JtooNMJt74Jd7xpL81DuH/g9KhqaHnZwSaO3dGTU+f1Ogxi85/ya4dPP02trWGbiDPXnaKBTlf7iL/jNwPwknubyBw6fNWzeijE2ARAnJNeyLrS+TZtEw2Hz36ZEWYRd78w161iwE/yvA2d5kdLPddBnHHK29SXQ45BvJt1C09OzXXSJpwWHYm1NRzECeaBS3GCcJK7f3MMmCJMB/GOw0Nmd0MWwsRYdzycA5+MXpepIE7bT4G2rIStiBvsPK+KB7onT7rs/Tr5AE9YMoj3Xzg84/NiKORoEw/P56Ano6fbVBA7DHVvGgThOPvXLybWRuITa99aS0v2QUwR7jtMtDbUUCjkbBO5OehJ6a8yMSVuvLf72GicAzaxt8deKCbWxgMdm1jL5pdEwnJj3Y7DYuFVnSVM2ERuYy5+zhKdeGwT5bd2H7tNMIRniAtc6OO5mm7DrAndBZYAYgvd/X5fy2QyWr9fGbCInRJroxB2DOJdpxnJvOqQNrFu97EpYD6IE+xaMEYOdMx11hAWCQ807e5y2DvMZrOHveHHrzrp/v6E8CBq/4Dv6jxhHMTHr+Yk6KiXYSKI0zZp7S2e8ARx95S7kLDhJTaxdtOChE3E+9p1llvCl6pn1zplI5gdE2t/FkMWxPRY9+C4MpxXP9IE4RTKzIz1V4MgHOd+LTCxZswkTq1X1ZgQZoNYuyRcoHZ2lelHnBJrJxOTcLSJnASsubSJp8QL4fQX8jOx1NoatIm9D9yVMLGmi02sHbUJwoGgZjeObQz7ThWkz0WRMLaJnEQpai6VqHWdTRb+NiEQXkVTNUUhbZh5nKvAEkYc1JzWa9kr2//d2QmFGMR0+udXVJKwPgiLjvFYRw91DGCGMHchkVjTCVuv6iSXCMLaY9eywzpHmLaJB8+GulvBiCc2QXVObDImYbGJLp/NaVLrDSaxls0ThFs3j3243VCID2JyrHtc04SNJkYs2ARZSbKOc0wQJ/hBSS6xxtvwFDEsg7jRoUhYR0yU9X9pJckqYMQjm0jd4g900mtrMIgbQovJPWUSjF9ftAjC2iPbGJRPRUC4+PkBjnWPbZqg9XcZBzGVIj5KQMKrXPVIkU6s3XhFuKaGQgLiRbX6qYiC2Luh7jxNBTG+XgA8JrwnlOfJxFqbuUwEPEZs1xUko8s6IPz7sfKqjgh7UUkaqSoa8WiswylifpybIo4LrnlOxHCXtRNhoJsQDt496sFKOyFAuH6gHB7jKfGjfpqdJkbM2wROEf/TwIRXEsKlF8R6o8DGpjBZmyLOC6UmNzrjQ9hErG4otRwc6zyqJOn6RzRiM4hhilgc58aIu+IakJwNs786FMOT2cRjMl6LAmCdcNGYlKlwXbf7i5smZpoaMRfEje/oYtGGR4QTwvQ5Fl8hYpidFz2hCQfy81vxCT/OmYjNzohPcML265smJqrhmnM4/BJcDDzCJLwnVue3CisQMZdYs9Y3RMTa9byP9aKICKuGFRzUEeGH/8z7oxy1vYBtAjT+oHHORCykJIzEGibMpziHdoQDlfx8S+fYThQQLpr1uMNdbBNz/SAZvQa9KWbjj5hueo1jeG2tK972TQMTTnKTDnHVzCAOal/nqfAM64jwqJSxocKVc+5x+zls1ARGbFZDhfkXHud0JcCoGDdyFciGuV+cmPlhCAeCg/xH98P8TggQXlZH/zO3iAh71TShGzGYr5kV/R/8lXic05USDaVGEuavvOGzlyzhQDBYyQ9dZg0Od43WbV71sas/L6Ig9qxpQlHWF6BNiCnivTIGjKYdzQImLHasNe1twiwmtTV3c+OrECKsjidkwzoiXPSqaUJRvhNNgnyKuEqMc2sJsDg57a5AxEKOU58R203YJhXRvuZi5lbdGe0/YLU4aQDM7sJSR07+B7hUc9YXzxLm5rjUOCdUjwzd72HCSXHW0aOXddaiszaQNsrrIiJcn9hATIVZYs+aJqatP3wQc13EJXKcA4ncUmJcHRVsGIxacL4GGie0G7lqWicTRYTV6aePFxFhz5omFCUNjNioN7Mp4nPSJMAtq3GCMJjXKSdyQWz0TnyUGfLO6lGAuDgrY3x+QDbhXdOE8h7bRPkf5qoFYpxLoFz9OUG4C7eCnop1DhjE+rQiI2EVE8As4fpsWXx2jGyi6FnTxKyUxNuE9aJqOowJp9BM/aKxAhEX8Hh1T2aJOcK6VTgupLM7kLA686cTFZb1c+6wuVBnZsRMEDMp4u+NMETcgBuXCk8IwrhwUWqBSTGwCTOMBw4j0tdBFCC2TsZKKqyIqp5VkpTfwpCwtRpaWg9jwglUMo1NTIJHHCd8NJa3Q8y2YQ7sy/wbmSgizIxjoSIi7F0lSfmBbcKaIm6mMOG9NXTDLYowsRVUR9ym6nUC4WBEs8s0HlSiCLFqveayjmziV22/BbIYsTWIrWu1l+UwRIxSEqPEGiLMJ9Ys6lxJI45EMvQKt7QTRYSLjH2/O4a9KZ41TRBGvBAuT6/QxzlMGKQklFFiDSHmE2uMflK9KaBbO0Ouot/1IWGVKWFUVUjYs6YJRXmLjHjBsjf0fSMMERPN8okVTJhPrLHqJQMEYRGxRi0P7qJRhLjOXqXC7h/vKknT5irOJqbVUHOcQ4RTEFktThG2/xq1O6oPUyAcIdoGT3Yg4Tq3sfGqiILYu0oSYcQL0xSxOc4Bwntv4O1GiTURcVcsNnEaJnG7Nj/WRSID3Hd5XYkixCoXCa/qqNPVu6aJWXMVi3iaIn5bDkPECbwB+rRLEHbOQW58tc7bbGwikkEBF8tEEeEi/+s43IU24cn225H+LiPC5XHWrDYxCYEwvts4sSYgLjjuSNeVDVgY2xCOZMC4NOxDwnX+t0Ecm+Jd0wRhxAvjFPFknOMRJ3BMlhIrmHBc7gF6bU1mB2MfTNl2QjxhE/GO8INV2BDvXSVp1lzFIh6niGchzBJOY2LVOEEYJdagdMYyQSx87lAwCZMwKF88L6Ig9rCSpDzDRmz+WU/HOY5wg+jPPOcJr9gl1rB67bzTWBcR9+V/GkDCIPM7rKMg9rBpYrI9lEM8ShF/KIch4hSRKbloYML8hkZ79fJtB5uo8Gm2GghhA/GO6NjZXdgQn3PzDd3pHNqEeeJPzWoSFsJiQ+tYQgiPEROJNUqlYb7lziYu+anaiHARJDxjKtzV4V3ThKWmbyVsVkN/EIRR9cj88vxANyFMJdZIxW40e5tgZ7klGMLRqIqWakbThGgTHlaSFCvhGWIjRcwCniEmeriZxBpDmEys0TrL206JWR5nwlRtFMN1dOf/FNHmLw8rSZbmKivh9KbSTC9AwilqU+NtVyS8Yp9Yo1XVgjRh7uyDARjndBUvOzFBnYM6sgnvtt8yNX3rUHeuL0YWIGJyP9ibPUy4MNfmophGB3GFyTacECYRLapAdbz5KzfPd5RTDdpE+XtsfXwyDUd4jzz2jjo1l9/2LPvF8jRhJmX+Yj9CIA4BETsYvWua0O0WEQ6/vU1jwilqBYzPJdYR83tGZTVsU2MdQziWicxFmB3rvBzqvpchYnMuDBCTx1mZh7oCwg3HxBqhDhnEDOGDfsQ1YtEm6h4OdU0YxAuzA6wYwrh6ZMg4+RkFsURijdAfLYqw1YczEfeERZsoeldJsjZXiYQFxGlybvtyDxOWSqxBXbSIIO5bfmmHmg1hhJiwCQ8rSYr1vFF4zp2FMNxHY6qUkjk115WuKcLWUtLVIDJHEItTYu+23yrKe7sg5gjTp9RUE5iwfGJN0B0xJQ5mZou1aiYyD2ExiD1smuCM2DaIy6ihdaRzgrCbxBqrGLmus9TqrvdtCcuPdQ9zb3+SeJJtacI2xwC9Jo5+FhNrspm20xaVnOhPr+lk2MMaHzHWebf9VlHCC7I2QaUkdMWJo5/FvfuJ5JHMqHKSpxJs+7PJ2lHfgbD8WOdhJcnaXGUfxLChdSTjnCUYxEJirVp40i6cOq7zqmbVDiK2DHRTwI8f6zxsmmBq+rZBbHO061YCExYTa+fGxudu4b5nG8g9m1KHNv1kNjM3YcEmPGyaYJqr7KbEVPXI0K2x2QMQFreWjw/FXEoWvvWoJFL2SqMrooOf0+tuBo6Epcc6LytJ1uYqO5uwOzvXOL4cBbGYWJudAtRKJrsfe1XuD6N0MmzngzZl/dlpbBuWEH58EHu3/Zat6dM2UUZ7yicabfYQCQuJtQ57OkLXeOXXzcXpUa/XbPZ6w4u7ZL6NelNm643ZCR8HlccSto51HlaSeCMmgtjuxMZaYkaYQSwk1sDbZpYCrVa73U4m2+0W3xQv2sRsnCsxIfzo9I+HTRNK6ZkMYbtzXZsEYTGxRhyKKfQQU0EcmTVK9fqPIszbhJdNE0xzFTXWifudLXpvPV3bOtCJLy8gDqlxJDxGbDnKKjggCA8MFW0EbcKzM8sN3UrYBL9VlNHLvTUYxOIBFNQhNZJBbHkPxwlnElPE+zfP7fWpCKfEOQ/ITlTdpgjLvfmrNNnVKBDmZ9DkoZjOQWwAblkOsvq5TxB2fKFPR4VB7GUlSeGMGLwNxfbFX1X2/HKLS/BXEm+bkbUJS84npvGAx4RR5yCn+jIa67ysJPFGDGzCJiVhdKytwSAWj2ykDsWUswnrGxqHfYHwCLHE6y0/F9FY52UliW2uQjZh/x4Jy/Z9hrCYWKMOxZSyCebwH8GFx4QHEifindWRTXi4/VY0YiGI7d82Q50QL38opkQQs4APEWEDsdOrOgyd7ML0T841NxeiCZtBTFePDFkPMGcIJ0BibV7CLfbI0T8QYJkXSRgqqXBK7GUlaXaEICZs/65h61sOmBPicWJtLptoXzHkahrxNpT9rzKPG1pE6zovK0mCEXNn/9i+CUW5TfGEV+0Ta66DOJg/ZW90WSFe6eP4WrXRx+soiD3cfss3V/FBnLZvPXuztwaDWDzY1Q6wTRBrS9zfUEkzV9CIsFRV/t0xTP942DQhGjG7W9/+s+wpKrMgjvPLQPJtM3aEA23xHMyzPkFY6I/Hqqow/eNl0wTXXMUSpo4uH6tGERY2hVVTdj6Mz67K50FZbxAhCGcka0EqTP/Anu5fpSZtxAvr9pnTJnfi3YQw6Fgr9e7jBSL3AxAHWvk7dLpKVhsn2kTCko9rHBYv2oSXlSSuuYpBzB38I+g98ZoD3LH2tPchniT8mHeH/Cmew7wYEIQdX9A6kfl6NWFK7OH2W13b65zSE207vIs8kUqwio9ENsKWtr58iBeSXTGYJ3Rb7XzyakhNETeSmma8Vk2UJturfKjuIuUkPz6XqpukHD65Rcl23Kg1v/zsFgrJZLvbbY02Hy21jGJHPp9s/zzaslk41LKkZJ+2gz/uZe7nf6PS02qz9+X057eb+/ur+5tvP0+PetmalyO6L1++fPny5cuXL1++fPny5cuXL1++fPny5cuXL1++fPky9F9Rz615ZpJw4AAAAABJRU5ErkJggg=="
        },
        {
            name: 'MasterCard',
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png"
        },
        {
            name: 'Paytm',
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/2560px-Paytm_Logo_%28standalone%29.svg.png",
        },
    ];





    const cart = useSelector(state => state.cart);
    const total = useSelector(state => state.total);
    const [currPaymentGateway, setCurrPaymentGateway] = useState(paymentMethods[0]);
    const img = product[0].main_img
    const name = product[0].name
    const price = product[0].price
    return (
        <div className="main-order-page">
            <h3>Shipping and Payment</h3>
            <div className="container">
                <div className="order-page">
                    <div className="login-signup">
                        {/* <Link to='/'>
                        <button className="login-btn">LOG IN</button>
                    </Link> */}
                        {/* <Link to='/sign-up' style={{
                        textDecoration: 'none',
                        color: 'black'
                    }}>
                        <button className="signup-btn">SIGN UP</button>
                    </Link> */}
                    </div>
                    <h4>Shipping Information</h4>
                    <div className="shipping-info-form">
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Address" />
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="City" />
                        <input type="text" placeholder="Last Name" />
                        <input type="number" placeholder="Postal Code / ZIP" />
                        <input type="number" placeholder="Phone Number" />
                        <label>
                            <select name="state" value="State" id="state" class="form-control">
                                <option value="select">State</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                <option value="Daman and Diu">Daman and Diu</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Lakshadweep">Lakshadweep</option>
                                <option value="Puducherry">Puducherry</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="payment-delivery">
                    <h4>Payment Method</h4>
                    <div className="payment">
                        {paymentMethods.map((method, index) => (
                            <button value={method.name} onClick={() => {
                                setCurrPaymentGateway({
                                    name: method.name,
                                    img: method.img
                                });
                            }}><img src={method.img} alt="" /></button>
                        ))}

                        <div className="selected-payment">
                            Selected:
                            <button value={currPaymentGateway.name}><img src={currPaymentGateway.img} alt="" /></button>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className="order-cart">
                    <h4>Your Cart</h4>
                    <div style={{
                        overflowY: 'auto'
                    }} className="cart-items">
                        {cart.map((item) => (
                            <div className="cart-item">
                                <img src={item.main_img} alt="" style={{ display: "inline-block" }} />
                                <p>{item.name}</p>
                                <p style={{ marginLeft: "2.5rem", fontWeight: "bolder" }}><span style={{ fontFamily: "sans-serif" }}>₹</span>{price}</p>
                            </div>
                        ))}

                    </div>
                    <div className="total">
                        <p>Total Cost: <span style={{ fontFamily: "sans-serif", marginLeft: "2rem", fontWeight: "bolder" }}>₹{total}</span></p>
                    </div>
                </div>
            </div>
            <div className="end" style={{
                
            }}>
                <div className="payment-proceed">
                    <Link to='/Shop' style={{
                        textDecoration: 'none',
                        color: 'black'
                    }}>
                        <button className="continue">CONTINUE SHOPPING</button>
                    </Link>
                    <Link to='/' style={{
                        textDecoration: 'none',
                        color: 'black'
                    }}>
                        <button onClick={() => {
                            
                        }} className="proceed">CONFIRM PAYMENT</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default OrderPage;