import './ProjectDocumentation.css';
import React, { useState, useRef } from 'react'
import FromData from 'form-data';
import axios from 'axios';
import { useReactToPrint } from 'react-to-print';
import img from "../../assets/accont.png"

export default function ProjectDocumentation() {

    const [isBusinessData, setIsBusinessData] = useState(
        {
            projectName: "",
            businessOwnerName: "",
            businessOwnerMobileNumber: "",
            projectTakingDate: "",
            projectEndingDate: "",
            businessName: "",
            businessVillageName: "",
            businessPostOfficeName: "",
            businessPoliceStationName: "",
            businessDistrictName: "",
            businessPinNo: "",
            businessMobileNumber: "",
            businessEmail: ""
        }
    );
    const [isProjectData, setIsProjectData] = useState(
        {
            projectDetails: "ফটো স্টুডিও আইটেম এর বিজনেস, সাবলিমেশন প্রিন্টিং প্রোডাক্ট, মূলত এডস এর জন্য বিজনেস কে রেডি করাটাই মুল উদ্দেশ্য।",
            projectPagesNumber: "",
            projectPagesThirdRules: "হোম পেজে কিছু কাজের ফটো সমেত কিছু ডেসক্রিপশন শোকেজ করা থাকবে",
            projectPagesFoutrhRules: "এবাউট পেজে বিজনেস সম্পর্কে ডিটেইলস থাকবে, সঙ্গে ভিশন এবং মিশন থাকবে।",
            projectPagesFifthRules: "প্রোডাক্ট পেজে বিভিন্ন প্রোডাক্ট ডিসপ্লে করা থাকবে দাম সহ। প্রোডাক্ট ডেসক্রিপশন থাকবে .",
            projectPagesSixthRules: "গ্যালারি পেজে ফিল্টারেবেল পোর্টফলিও গ্যালারি থাকবে ।",
            projectPagesSeventhRules: "টোটাল ২৫-৩০ টি প্রোডাক্ট ডিসপ্লে করাতে হবে সঙ্গে প্রোডাক্ট ডেসক্রিপশন এবং রেট।",
        }
    );

    const [isPageList, setIsPageList] = useState(
        [
            {
                pageList: "হোম পেজ"
            },
            {
                pageList: "এবাউট পেজ"
            },
            {
                pageList: "প্রোডাক্ট পেজ"
            },
            {
                pageList: "কন্টাক্ট পেজ"
            },
            {
                pageList: "গ্যালারি পেজ"
            },
            {
                pageList: "টার্মস এ র্ম ন্ড কান্ডিশন পেজ"
            },
            {
                pageList: "প্রাইভেসি পলিসি পেজ"
            },
            {
                pageList: "ডিস্ক্লেইমার পেজ"
            },
            {
                pageList: "এডস এর জন্য প্রোপার কন্টেন্ট দিয়ে একটি ল্যান্ডিং পেজ বাংলায়"
            },
        ]
    );
    const [isContactPageContent, setIsContactPageContent] = useState(
        [
            {
                contactPageContent: "বিজনেস এড্রেস"
            },
            {
                contactPageContent: "যোগাযোগর মাধ্যম"
            },
            {
                contactPageContent: "কন্টাক্ট ফর্ম"
            },
            {
                contactPageContent: "গোগল ম্যাপ এড করতে হবে ।"
            }
        ]
    );

    const [isHeaderPageContent, setIsHeaderPageContent] = useState(
        [
            {
                headerPageContent: "লোগো"
            },
            {
                headerPageContent: "মেনু"
            },
            {
                headerPageContent: "কন্টাক্ট বাটন (ডাইরেক্ট কল)"
            },
            {
                headerPageContent: "ইমেইল, ফোননাম্বার এড (টপবা র)"
            },
            {
                headerPageContent: "সোশ্যাল মিডিয়া ইন্টিগ্রেশন (টপবা র)"
            }
        ]
    );


    const [isFooterPageContent, setIsFooterPageContent] = useState(
        [
            {
                footerPageContent: ""
            }
        ]
    );


    const [isSave, setIsSave] = useState(true);
    const [customerName, setcustomerName] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [work, setWork] = useState();

    const handleSubmit = async () => {
        // if (customerName && email && mobileNumber && address && work) {
        //     let fromData = new FromData();
        //     fromData.append("customerName", customerName);
        //     fromData.append("email", email);
        //     fromData.append("mobileNumber", mobileNumber);
        //     fromData.append("address", address);
        //     fromData.append("work", work);

        //     const result = await axios.post("http://localhost:5000/addData", fromData,);
        //     if (result.status === 201) {
        //         setIsSave(false);
        //         alert("Data Submit Successfully");
        //     }
        // } else {
        //     alert("Enter Data Correctly")
        // }
    }

    const printRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
    });






    const HandleAddPageListInput = () => {
        setIsPageList([...isPageList, { pageList: "" }])
    }
    const changePageList = (e, indx) => {
        const onChangeVal = [...isPageList];
        onChangeVal[indx].pageList = e.target.value
        setIsPageList(onChangeVal);
    }
    const delPageList = (indx) => {
        const delVal = [...isPageList];
        delVal.splice(indx, 1);
        setIsPageList(delVal);
    }


    const HandleAddContactPageContentInput = () => {
        setIsContactPageContent([...isContactPageContent, { contactPageContent: "" }])
    }
    const changeContactPageContent = (e, indx) => {
        const onChangeVal = [...isContactPageContent];
        onChangeVal[indx].contactPageContent = e.target.value
        setIsContactPageContent(onChangeVal);
    }
    const delContactPageContent = (indx) => {
        const delVal = [...isContactPageContent];
        delVal.splice(indx, 1);
        setIsContactPageContent(delVal);
    }


    const HandleAddHeaderPageContentInput = () => {
        setIsHeaderPageContent([...isHeaderPageContent, { headerPageContent: "" }])
    }
    const changeHeaderPageContent = (e, indx) => {
        const onChangeVal = [...isHeaderPageContent];
        onChangeVal[indx].headerPageContent = e.target.value
        setIsHeaderPageContent(onChangeVal);
    }
    const delHeaderPageContent = (indx) => {
        const delVal = [...isHeaderPageContent];
        delVal.splice(indx, 1);
        setIsHeaderPageContent(delVal);
    }



    return (
        <div className='projectDocumentation flex'>
            {
                isSave
                    ?
                    <div className='projectDocumentationInput'>
                        <div className='inputArea'>
                            <div className='top'>
                                <div className='leftArea'>
                                    <div class="input_box">
                                        <input className='input_box' type='text' value={isBusinessData.projectName} required onChange={(e) => setIsBusinessData({ ...isBusinessData, projectName: e.target.value })}></input>
                                        <span>প্রোজেক্ট নেম :</span>
                                        <i></i>
                                    </div>
                                    <div class="input_box">
                                        <input className='input_box' type='text' value={isBusinessData.businessOwnerName} required onChange={(e) => setIsBusinessData({ ...isBusinessData, businessOwnerName: e.target.value })}></input>
                                        <span>বিজনেস ওনার নেম :</span>
                                        <i></i>
                                    </div>
                                    <div class="input_box">
                                        <input className='input_box' type='text' value={isBusinessData.businessOwnerMobileNumber} required onChange={(e) => setIsBusinessData({ ...isBusinessData, businessOwnerMobileNumber: e.target.value })}></input>
                                        <span>যোগাযোগের নম্বর :</span>
                                        <i></i>
                                    </div>
                                    <div class="input_box">
                                        <input className='' type='date' value={isBusinessData.projectTakingDate} required onChange={(e) => setIsBusinessData({ ...isBusinessData, projectTakingDate: e.target.value })}></input>
                                        <span>প্রোজেক্ট দেওয়ার সময় :</span>
                                        <i></i>
                                    </div>
                                    <div class="input_box">
                                        <input className='input_box' type='date' value={isBusinessData.projectEndingDate} required onChange={(e) => setIsBusinessData({ ...isBusinessData, projectEndingDate: e.target.value })}></input>
                                        <span>প্রোজেক্ট ডেডলাইন :</span>
                                        <i></i>
                                    </div>
                                </div>

                                <div className='rightArea'>
                                    <h2>বিজনেস এড্রেস :</h2>
                                    <div>
                                        <div class="input_box">
                                            <input className='input_box' type='text' value={isBusinessData.businessName} required onChange={(e) => setIsBusinessData({ ...isBusinessData, businessName: e.target.value })}></input>
                                            <span>বিজনেস নেম :</span>
                                            <i></i>
                                        </div>
                                        <div class="input_box">
                                            <input className='input_box' type='text' value={isBusinessData.businessVillageName} required onChange={(e) => setIsBusinessData({ ...isBusinessData, businessVillageName: e.target.value })}></input>
                                            <span>Village :</span>
                                            <i></i>
                                        </div>
                                        <div class="input_box">
                                            <input className='input_box' type='text' value={isBusinessData.businessPostOfficeName} required onChange={(e) => setIsBusinessData({ ...isBusinessData, businessPostOfficeName: e.target.value })}></input>
                                            <span>Post Office :</span>
                                            <i></i>
                                        </div>
                                        <div class="input_box">
                                            <input className='input_box' type='text' value={isBusinessData.businessPoliceStationName} required onChange={(e) => setIsBusinessData({ ...isBusinessData, businessPoliceStationName: e.target.value })}></input>
                                            <span>Police Station :</span>
                                            <i></i>
                                        </div>
                                        <div class="input_box">
                                            <input className='input_box' type='text' value={isBusinessData.businessDistrictName} required onChange={(e) => setIsBusinessData({ ...isBusinessData, businessDistrictName: e.target.value })}></input>
                                            <span>District :</span>
                                            <i></i>
                                        </div>
                                        <div class="input_box">
                                            <input className='input_box' type='text' value={isBusinessData.businessPinNo} required onChange={(e) => setIsBusinessData({ ...isBusinessData, businessPinNo: e.target.value })}></input>
                                            <span>Pin No :</span>
                                            <i></i>
                                        </div>
                                        <div class="input_box">
                                            <input className='input_box' type='text' value={isBusinessData.businessMobileNumber} required onChange={(e) => setIsBusinessData({ ...isBusinessData, businessMobileNumber: e.target.value })}></input>
                                            <span>Mobile Number :</span>
                                            <i></i>
                                        </div>
                                        <div class="input_box">
                                            <input className='input_box' type='email' value={isBusinessData.businessEmail} required onChange={(e) => setIsBusinessData({ ...isBusinessData, businessEmail: e.target.value })}></input>
                                            <span>Email :</span>
                                            <i></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='middil'>
                                <div class="input_box">
                                    <input className='input_box' type='text' value={isProjectData.projectDetails} required onChange={(e) => setIsProjectData({ ...isProjectData, projectDetails: e.target.value })}></input>
                                    <span>প্রোজেক্ট ডিটেইলস :</span>
                                    <i></i>
                                </div>
                            </div>
                            <div className='bottom'>
                                <div class="input_box">
                                    <input className='input_box' type='text' value={isProjectData.projectPagesNumber} required onChange={(e) => setIsProjectData({ ...isProjectData, projectPagesNumber: e.target.value })}></input>
                                    <span>টোটাল পেজের সংখ্যা :</span>
                                    <i></i>
                                </div>
                                <div className='lists'>
                                    <button className='btn' onClick={HandleAddPageListInput}>Add</button>
                                    {
                                        isPageList.map((val, indx) => {
                                            return (
                                                <div class="">
                                                    <input className='' type='text' value={val.pageList} required onChange={(e) => changePageList(e, indx)}></input>
                                                    <button className='btn' onClick={() => delPageList(indx)}>Delete</button>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                                <div class="input_box">
                                    <input className='input_box' type='text' value={isProjectData.projectPagesThirdRules} required onChange={(e) => setIsProjectData({ ...isProjectData, projectPagesThirdRules: e.target.value })}></input>
                                    <i></i>
                                </div>
                                <div class="input_box">
                                    <input className='input_box' type='text' value={isProjectData.projectPagesFoutrhRules} required onChange={(e) => setIsProjectData({ ...isProjectData, projectPagesFoutrhRules: e.target.value })}></input>
                                    <i></i>
                                </div>
                                <div class="input_box">
                                    <input className='input_box' type='text' value={isProjectData.projectPagesFifthRules} required onChange={(e) => setIsProjectData({ ...isProjectData, projectPagesFifthRules: e.target.value })}></input>
                                    <i></i>
                                </div>
                                <div class="input_box">
                                    <input className='input_box' type='text' value={isProjectData.projectPagesSixthRules} required onChange={(e) => setIsProjectData({ ...isProjectData, projectPagesSixthRules: e.target.value })}></input>
                                    <i></i>
                                </div>
                                <div class="input_box">
                                    <input className='input_box' type='text' value={isProjectData.projectPagesSeventhRules} required onChange={(e) => setIsProjectData({ ...isProjectData, projectPagesSeventhRules: e.target.value })}></input>
                                    <i></i>
                                </div>
                                <div className='lists'>
                                    <h2>কন্টাট পেজে</h2>
                                    <button className='btn' onClick={HandleAddContactPageContentInput}>Add</button>
                                    {
                                        isContactPageContent.map((val, indx) => {
                                            return (
                                                <div class="">
                                                    <input className='' type='text' value={val.contactPageContent} required onChange={(e) => changeContactPageContent(e, indx)}></input>
                                                    <button className='btn' onClick={() => delContactPageContent(indx)}>Delete</button>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                                <div className='lists'>
                                    <h2>হেডারে যাযা থাকবে -</h2>
                                    <button className='btn' onClick={HandleAddHeaderPageContentInput}>Add</button>
                                    {
                                        isHeaderPageContent.map((val, indx) => {
                                            return (
                                                <div class="">
                                                    <input className='' type='text' value={val.headerPageContent} required onChange={(e) => changeHeaderPageContent(e, indx)}></input>
                                                    <button className='btn' onClick={() => delHeaderPageContent(indx)}>Delete</button>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <button className='btn' type='submit' onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                    :
                    <div className='projectDocumentationShow'>
                        <div ref={printRef}>
                            <h1>{customerName}</h1>
                            <h1>{email}</h1>

                            <h1>{address}</h1>
                        </div>
                        <button className='btn' onClick={handlePrint}>Print this out!</button>
                        <button className='btn' onClick={() => setIsSave(true)}>Go Back</button>
                    </div>
            }
        </div>
    )
}

