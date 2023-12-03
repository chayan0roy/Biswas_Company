import './ClientLists.css'
import axios from 'axios';
import React, { useState, useEffect } from 'react'

export default function ClientLists() {
    const [reciveData, setReciveData] = useState();

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const result = await axios.get("http://localhost:5000/GetData",);
        setReciveData(result.data);
    }

    return (
        <div className='clientLists'>
            {
                reciveData
                    ?
                    <> {
                        reciveData.map((d) => {
                            console.log(d);
                            return (
                                <div className='card flex'>
                                    <div className='cardImageArea flex'>
                                        <img src={d.userImage} />
                                    </div>
                                    <div className='cardNameArea flex'>
                                    <h2 className='cardName'>{d.customerName}</h2>
                                    </div>
                                    <div className='cardContactDetails flex'>
                                        <h4>{d.mobileNumber}</h4>
                                        <h4>{d.email}</h4>
                                        <h4>{d.address}</h4>
                                    </div>
                                    <div className='cardWorkDetails flex'>
                                        {
                                            d.works.map((w) => {
                                                return (
                                                    <h4>{w.work}</h4>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                    </>
                    :
                    <></>

            }
        </div>
    )
}
