import React, { useState, useRef } from 'react';
import './Form.css';
import gradient from '../../assets/gradient.svg';
import link1 from '../../assets/link1.svg';
import link2 from '../../assets/link2.svg';
import link3 from '../../assets/link3.svg';
import link4 from '../../assets/link4.svg';
import link5 from '../../assets/link5.svg';

function Form() {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const phoneNumberRef = useRef('');
    const countryRef = useRef('');
    const cityRef = useRef('');
    const addressRef = useRef('');
    const stuffNumberRef = useRef('');
    const descRef = useRef('');

    const [error, setError] = useState({
        nameError: '',
        emailError: '',
        phoneNumberError: '',
        countryError: ''
    });

    function validate() {
        let isValid = true;

        if (!nameRef.current.value) {
            setError(prevError => ({ ...prevError, nameError: "Name is empty" }));
            nameRef.current.focus();
            isValid = false;
        } else {
            setError(prevError => ({ ...prevError, nameError: '' }));
        }

        if (!emailRef.current.value) {
            setError(prevError => ({ ...prevError, emailError: "Email is empty" }));
            emailRef.current.focus();
            isValid = false;
        } else {
            setError(prevError => ({ ...prevError, emailError: '' }));
        }

        if (!phoneNumberRef.current.value) {
            setError(prevError => ({ ...prevError, phoneNumberError: "PhoneNumber is empty" }));
            phoneNumberRef.current.focus();
            isValid = false;
        } else {
            setError(prevError => ({ ...prevError, phoneNumberError: '' }));
        }

        if (!countryRef.current.value) {
            setError(prevError => ({ ...prevError, countryError: "Country is empty" }));
            countryRef.current.focus();
            isValid = false;
        } else {
            setError(prevError => ({ ...prevError, countryError: '' }));
        }

        return isValid;
    }


    function handleClick(e) {
        e.preventDefault();

        if (validate(nameRef, emailRef, phoneNumberRef, countryRef, error)) {
            console.log("Validation passed");

            const form = {
                name: nameRef.current.value,
                email: emailRef.current.value,
                phoneNumber: phoneNumberRef.current.value,
                country: countryRef.current.value,
                city: cityRef.current.value,
                address: addressRef.current.value,
                stuffNumber: stuffNumberRef.current.value,
                desc: descRef.current.value,
            };

            localStorage.setItem('form', JSON.stringify(form));
        }
    }

    return (
        <>
            <div className="content">
                <div className="card">
                    <h1>Kompaniya ma’lumotlari</h1>
                    <p>Kompaniya haqidagi ma’lumotlarni kiriting</p>
                    <form>
                        <div className="company-img">
                            <img src={gradient} alt="company img" />
                            <p>Yuklash</p>
                        </div>

                        <div>
                            <label htmlFor="name">Kompaniya nomi <span>*</span></label>
                            <input type="text" id="name" placeholder='Kompaniya nomi' ref={nameRef} />
                            {error.nameError && <h6 className='textError'>{error.nameError}</h6>}
                        </div>

                        <div>
                            <label htmlFor="email">Email <span>*</span></label>
                            <input type="email" id="email" placeholder='Email' ref={emailRef} />
                            {error.emailError && <h6 className='textError'>{error.emailError}</h6>}
                        </div>

                        <div>
                            <label htmlFor="phoneNumber">Telfon raqami <span>*</span></label>
                            <input type="number" id="phoneNumber" placeholder='UZ +998' ref={phoneNumberRef} />
                            {error.phoneNumberError && <h6 className='textError'>{error.phoneNumberError}</h6>}
                        </div>

                        <label htmlFor="">Linklar <span>*</span></label>
                        <div className="links">
                            <div className="link"><img src={link1} alt="" /></div>
                            <div className="link"><img src={link2} alt="" /></div>
                            <div className="link"><img src={link3} alt="" /></div>
                            <div className="link"><img src={link4} alt="" /></div>
                            <div className="link"><img src={link5} alt="" /></div>
                        </div>

                        <div className="city">
                            <div>
                                <label htmlFor="country">Davlat <span>*</span></label>
                                <input type="text" id="country" placeholder='Davlat' ref={countryRef} />
                                {error.countryError && <h6 className='textError'>{error.countryError}</h6>}
                            </div>

                            <div>
                                <label htmlFor="city">Shahar <span>*</span></label>
                                <input type="text" id="city" placeholder='Shahar' ref={cityRef} />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="address">Yashash Joyi <span>*</span></label>
                            <input type="text" id="address" placeholder='Joy' ref={addressRef} />
                        </div>

                        <div>
                            <label htmlFor="stuffNumber">Hodimlar soni <span>*</span></label>
                            <input type="number" id="stuffNumber" placeholder='Hodimlar soni' ref={stuffNumberRef} />
                        </div>

                        <div>
                            <label htmlFor="desc">Izoh <span>*</span></label>
                            <textarea name="" id="desc" placeholder='Kompaniya haqida izoh qoldiring' ref={descRef}></textarea>
                        </div>

                        <div className="buttons">
                            <button className='btn1'>ORTGA</button>
                            <button className='btn2' onClick={handleClick}>KEYINGISI</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Form;

