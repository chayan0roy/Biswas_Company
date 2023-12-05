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
    const [clientProvideList, setClientProvideList] = useState(
        [
            {
                clientProvideData: "প্রোডাক্ট ইমেজ এবং ডিটেলস ক্লায়েন্টকে প্রভাইড করতে হবে।"
            },
            {
                clientProvideData: "লোগো প্রভাইড করতে হবে।"
            },
            {
                clientProvideData: "কন্টাক্ট ডিটেইলস প্রোভাইড করতে হবে , যেমন- ফোননাম্বার, ইমেইল, এড্রেস"
            },
            {
                clientProvideData: "ডোমেইন এবং হোস্টিং ক্রেডেনশিয়াল প্রোভাইড করতে হবে ।"
            },
            {
                clientProvideData: "সোশ্যাল মিডিয়া লিঙ্ক প্রোভা ইড করতে হবে ।"
            },
            {
                clientProvideData: "বিজনেস ডিটেইলস প্রোভাইড করতে হবে ।"
            },
            {
                clientProvideData: "প্রোডাক্ট ডিটেইলস প্রোভাইড করতে হবে ।"
            },
            {
                clientProvideData: "আপনার কাজের যে ইমেজ গুলো আপনি শোকেজ করতে চান, সে গুলো প্রোভাইড করতে হবে ।"
            },
        ]
    );
    const [isPageList, setIsPageList] = useState(
        [
            {
                pageList: "হোম পেজ",
                pageItemLists: [
                    {
                        pageItemList: "হোম পেজে কিছু কাজের ফটো সমেত কিছু ডেসক্রিপশন শোকেজ করা থাকবে"
                    }
                ]
            },
            {
                pageList: "এবাউট পেজ",
                pageItemLists: [
                    {
                        pageItemList: "এবাউট পেজে বিজনেস সম্পর্কে ডিটেইলস থাকবে, সঙ্গে ভিশন এবং মিশন থাকবে।"
                    }
                ]
            },
            {
                pageList: "প্রোডাক্ট পেজ",
                pageItemLists: [
                    {
                        pageItemList: "প্রোডাক্ট পেজে বিভিন্ন প্রোডাক্ট ডিসপ্লে করা থাকবে দাম সহ। প্রোডাক্ট ডেসক্রিপশন থাকবে।"
                    },
                    {
                        pageItemList: "টোটাল ২৫-৩০ টি প্রোডাক্ট ডিসপ্লে করাতে হবে সঙ্গে প্রোডাক্ট ডেসক্রিপশন এবং রেট।"
                    }
                ]
            },
            {
                pageList: "কন্টাক্ট পেজ",
                pageItemLists: [
                    {
                        pageItemList: "বিজনেস এড্রেস"
                    },
                    {
                        pageItemList: "যোগাযোগর মাধ্যম"
                    },
                    {
                        pageItemList: "কন্টাক্ট ফর্ম"
                    },
                    {
                        pageItemList: "গোগল ম্যাপ এড করতে হবে ।"
                    }
                ]
            },
            {
                pageList: "গ্যালারি পেজ",
                pageItemLists: [
                    {
                        pageItemList: "গ্যালারি পেজে ফিল্টারেবেল পোর্টফলিও গ্যালারি থাকবে।"
                    }
                ]
            },
            {
                pageList: "টার্মস এ র্ম ন্ড কান্ডিশন পেজ",
                pageItemLists: [
                    {
                        pageItemList: "হোম পেজে কিছু কাজের ফটো সমেত কিছু ডেসক্রিপশন শোকেজ করা থাকবে"
                    }
                ]
            },
            {
                pageList: "প্রাইভেসি পলিসি পেজ",
                pageItemLists: [
                    {
                        pageItemList: "হোম পেজে কিছু কাজের ফটো সমেত কিছু ডেসক্রিপশন শোকেজ করা থাকবে"
                    }
                ]
            },
            {
                pageList: "ডিস্ক্লেইমার পেজ",
                pageItemLists: [
                    {
                        pageItemList: "হোম পেজে কিছু কাজের ফটো সমেত কিছু ডেসক্রিপশন শোকেজ করা থাকবে"
                    }
                ]
            },
            {
                pageList: "এডস এর জন্য প্রোপার কন্টেন্ট দিয়ে একটি ল্যান্ডিং পেজ বাংলায়",
                pageItemLists: [
                    {
                        pageItemList: "হোম পেজে কিছু কাজের ফটো সমেত কিছু ডেসক্রিপশন শোকেজ করা থাকবে"
                    }
                ]
            },
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
                footerPageContent: "লোগো"
            },
            {
                footerPageContent: "শর্ট ডেসক্রিপশন"
            },
            {
                footerPageContent: "ইম্পরট্যান্ট লিঙ্ক"
            },
            {
                footerPageContent: "সোশ্যাল মিডিয়া লিঙ্ক"
            },
            {
                footerPageContent: "টারমস এন্ড কান্ডিশন লিঙ্ক"
            },
            {
                footerPageContent: "প্রাইভেসি পলিসি লিঙ্ক"
            },
            {
                footerPageContent: "কপিরাইট টেক্সট"
            }
        ]
    );

    const [isProjectData, setIsProjectData] = useState(
        {
            projectDetails: "ফটো স্টুডিও আইটেম এর বিজনেস, সাবলিমেশন প্রিন্টিং প্রোডাক্ট, মূলত এডস এর জন্য বিজনেস কে রেডি করাটাই মুল উদ্দেশ্য।",
            projectPagesNumber: "",
            projectTechnology: "Wordpress (CMS)",
        }
    );


    const [companyProvideList, setCompanyProvideList] = useState(
        [
            {
                companyProvideData: "Astra / Hallo Elementor Theme"
            },
            {
                companyProvideData: "Elementor Page Builder"
            },
            {
                companyProvideData: "Elementor Pro Plagin"
            },
            {
                companyProvideData: "Woocommerce Plagin"
            },
            {
                companyProvideData: "একটি বি জনে স মে ইল প্রভা ইড করা হবে ।"
            },
            {
                companyProvideData: "ইং রে জি কন্টে ন্ট এর উপর ওয়ে বসা ইট হবে ।"
            },
            {
                companyProvideData: "আমরা বে সি ক কন্টে ন্ট প্রভা ইড করবো"
            },
            {
                companyProvideData: "এছা রা ও প্রয়ো জন অনুসা রে বি ভি ন্ন থি ম প্লা গি ন ব্যা বহা র হতে পা রে ।"
            },
        ]
    );

    const [termsConditionsList, setTermsConditionsList] = useState(
        [
            {
                termsConditionsData: "যতক্ষণ কা জ চলবে ওয়ে বসা ইট Under maintenance থা কবে ।"
            },
            {
                termsConditionsData: "যতক্ষণ কা জ চলবে আমরা কো নো ভা বে ই কো নো ক্রে ডে নশি য়া ল হস্তা ন্তর করবো না ।"
            },
            {
                termsConditionsData: "উল্লে খি ত কা জ এর বা ইরে এক্সট্রা কা জ এর জন্য নি র্দি ষ্ট টা কা পে করতে হবে ।"
            },
            {
                termsConditionsData: "প্রো জে ক্ট চলা কা লী ন আমা দে র কা ছে থা কা কো ন ক্রে ডে নশি য়া ল অন্য কে উ আমা দে র না জা নি য়ে ব্যা বহা র করতে পা রবে না , অন্য থা য় কো ম্পা নি কো ন দা য়ি ত্ব নে বে না ।"
            },
            {
                termsConditionsData: "সময় মতো পে মে ন্ট করতে হবে ।"
            },
            {
                termsConditionsData: "প্রো জে ক্ট শে ষ হওয়া র ৭ দি নে র মধ্যে আমরা সমস্ত ক্রে ডে নশি য়া ল হস্তা ন্তর করবো ।"
            },
            {
                termsConditionsData: "প্রোজেক্ট এর প্রয়োজনীয় রিসোর্স সময়ম র্স তো আমাদেরকে দিতে হবে। আপনার রিসোর্স দিতে লেট হলে প্রোজেক্ট এর ডেড লাইন মিস করলে কোম্পানি কোনো ভাবে দায়ী থাকবে না।"
            },
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
        setIsPageList([...isPageList, {
            pageList: "",
            pageItemLists: [
                {
                    pageItemList: ""
                }
            ]
        }])
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
    const changePageItemList = (indx, p, i) => {
        const onChangeVal = [...isPageList];
        onChangeVal[indx].pageItemLists[i].pageItemList = p.target.value
        setIsPageList(onChangeVal);
    }
    const delPageItemList = (indx, i) => {
        const arrVal = [...isPageList];
        const delVal = arrVal[indx].pageItemLists;
        delVal.splice(i, 1);
        arrVal[indx].pageItemLists = delVal
        setIsPageList(arrVal);
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


    const HandleAddFooterPageContentInput = () => {
        setIsFooterPageContent([...isFooterPageContent, { footerPageContent: "" }])
    }
    const changeFooterPageContent = (e, indx) => {
        const onChangeVal = [...isFooterPageContent];
        onChangeVal[indx].footerPageContent = e.target.value
        setIsFooterPageContent(onChangeVal);
    }
    const delFooterPageContent = (indx) => {
        const delVal = [...isFooterPageContent];
        delVal.splice(indx, 1);
        setIsFooterPageContent(delVal);
    }


    const HandleAddClientProvideDataInput = () => {
        setClientProvideList([...clientProvideList, { clientProvideData: "" }])
    }
    const changeClientProvideData = (e, indx) => {
        const onChangeVal = [...clientProvideList];
        onChangeVal[indx].clientProvideData = e.target.value
        setClientProvideList(onChangeVal);
    }
    const delClientProvideData = (indx) => {
        const delVal = [...clientProvideList];
        delVal.splice(indx, 1);
        setClientProvideList(delVal);
    }


    const HandleAddCompanyProvideDataInput = () => {
        setCompanyProvideList([...companyProvideList, { companyProvideData: "" }])
    }
    const changeCompanyProvideData = (e, indx) => {
        const onChangeVal = [...companyProvideList];
        onChangeVal[indx].companyProvideData = e.target.value
        setCompanyProvideList(onChangeVal);
    }
    const delCompanyProvideData = (indx) => {
        const delVal = [...companyProvideList];
        delVal.splice(indx, 1);
        setCompanyProvideList(delVal);
    }


    const HandleAddTermsConditionsListInput = () => {
        setTermsConditionsList([...termsConditionsList, { termsConditionsData: "" }])
    }
    const changeTermsConditionsList = (e, indx) => {
        const onChangeVal = [...termsConditionsList];
        onChangeVal[indx].termsConditionsData = e.target.value
        setTermsConditionsList(onChangeVal);
    }
    const delTermsConditionsList = (indx) => {
        const delVal = [...termsConditionsList];
        delVal.splice(indx, 1);
        setTermsConditionsList(delVal);
    }

    return (
        <div className='projectDocumentation flex'>
            {
                isSave
                    ?
                    <div className='projectDocumentationInput'>
                        <div className='clientDataInputBoxArea'>
                            <h2>প্রোজেক্ট নেম</h2>
                            <input type='text' value={isBusinessData.projectName} required onChange={(e) => setIsBusinessData({ ...isBusinessData, projectName: e.target.value })}></input>
                        </div>
                        <div className='clientDataInputBoxArea'>
                            <h2>বিজনেস ওনার নেম</h2>
                            <input type='text' value={isBusinessData.businessOwnerName} required onChange={(e) => setIsBusinessData({ ...isBusinessData, businessOwnerName: e.target.value })}></input>
                        </div>
                        <div className='clientDataInputBoxArea'>
                            <h2>যোগাযোগের নম্বর</h2>
                            <input className='numberInput' type='text' value={isBusinessData.businessOwnerMobileNumber} required onChange={(e) => setIsBusinessData({ ...isBusinessData, businessOwnerMobileNumber: e.target.value })}></input>
                        </div>
                        <div className='clientDataInputBoxArea'>
                            <h2>প্রোজেক্ট দেওয়ার সময় :</h2>
                            <input className='dateInput' type='date' value={isBusinessData.projectTakingDate} required onChange={(e) => setIsBusinessData({ ...isBusinessData, projectTakingDate: e.target.value })}></input>
                        </div>
                        <div className='clientDataInputBoxArea'>
                            <h2>প্রোজেক্ট ডেডলাইন</h2>
                            <input className='dateInput' type='date' value={isBusinessData.projectEndingDate} required onChange={(e) => setIsBusinessData({ ...isBusinessData, projectEndingDate: e.target.value })}></input>
                        </div>
                        <div className='clientDataInputBoxArea'>
                            <h2>বিজনেস নেম</h2>
                            <input type='text' value={isBusinessData.businessName} required onChange={(e) => setIsBusinessData({ ...isBusinessData, businessName: e.target.value })}></input>
                        </div>
                        <div className='clientDataInputBoxArea'>
                            <h2>Village</h2>
                            <input type='text' value={isBusinessData.businessVillageName} required onChange={(e) => setIsBusinessData({ ...isBusinessData, businessVillageName: e.target.value })}></input>
                        </div>
                        <div className='clientDataInputBoxArea'>
                            <h2>Post Office</h2>
                            <input type='text' value={isBusinessData.businessPostOfficeName} required onChange={(e) => setIsBusinessData({ ...isBusinessData, businessPostOfficeName: e.target.value })}></input>
                        </div>
                        <div className='clientDataInputBoxArea'>
                            <h2>Police Station</h2>
                            <input type='text' value={isBusinessData.businessPoliceStationName} required onChange={(e) => setIsBusinessData({ ...isBusinessData, businessPoliceStationName: e.target.value })}></input>
                        </div>
                        <div className='clientDataInputBoxArea'>
                            <h2>District</h2>
                            <input type='text' value={isBusinessData.businessDistrictName} required onChange={(e) => setIsBusinessData({ ...isBusinessData, businessDistrictName: e.target.value })}></input>
                        </div>
                        <div className='clientDataInputBoxArea'>
                            <h2>Pin No</h2>
                            <input className='numberInput' type='text' value={isBusinessData.businessPinNo} required onChange={(e) => setIsBusinessData({ ...isBusinessData, businessPinNo: e.target.value })}></input>
                        </div>
                        <div className='clientDataInputBoxArea'>
                            <h2>Mobile Number</h2>
                            <input className='numberInput' type='text' value={isBusinessData.businessMobileNumber} required onChange={(e) => setIsBusinessData({ ...isBusinessData, businessMobileNumber: e.target.value })}></input>
                        </div>
                        <div className='clientDataInputBoxArea'>
                            <h2>Email</h2>
                            <input type='email' value={isBusinessData.businessEmail} required onChange={(e) => setIsBusinessData({ ...isBusinessData, businessEmail: e.target.value })}></input>
                        </div>
                        <div className='headingArea'>
                            <h1>প্রোজেক্ট ডিটেইলস :-</h1>
                        </div>
                        <div className='clientDataInputBoxArea'>
                            <h2>প্রোজেক্ট ডেসক্রিপশন</h2>
                            <input type='text' value={isProjectData.projectDetails} required onChange={(e) => setIsProjectData({ ...isProjectData, projectDetails: e.target.value })}></input>
                        </div>
                        <div className='clientDataInputBoxArea'>
                            <h2>টোটাল পেজের সংখ্যা</h2>
                            <input className='numberInput' type='number' value={isProjectData.projectPagesNumber} required onChange={(e) => setIsProjectData({ ...isProjectData, projectPagesNumber: e.target.value })}></input>
                        </div>
                        <div className='headingArea'>
                            <h1>পেজ লিস্ট</h1>
                        </div>
                        <div className='lists'>
                            <button className='btn' onClick={HandleAddPageListInput}>Add</button>
                            {
                                isPageList.map((val, indx) => {
                                    return (
                                        <div class="listInputArea">
                                            <div>
                                                <input className='numberInput' type='text' value={val.pageList} required onChange={(e) => changePageList(e, indx)}></input>
                                                <button className='btn' onClick={() => delPageList(indx)}>Delete</button>
                                            </div>
                                            {
                                                val.pageItemLists.map((v, i) => {
                                                    return (
                                                        <div>
                                                            <input className='' type='text' value={v.pageItemList} required onChange={(p) => changePageItemList(indx, p, i)}></input>
                                                            <button className='btn' onClick={() => delPageItemList(indx, i)}>Delete</button>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className='headerFooter'>
                            <div className='leftSide'>
                                <div className='headingArea'>
                                    <h1>হেডারে যাযা থাকবে</h1>
                                </div>
                                <div className='lists'>
                                    <button className='btn' onClick={HandleAddHeaderPageContentInput}>Add</button>
                                    {
                                        isHeaderPageContent.map((val, indx) => {
                                            return (

                                                <div class="listInputArea">
                                                    <div>
                                                        <input className='numberInput' type='text' value={val.headerPageContent} required onChange={(e) => changeHeaderPageContent(e, indx)}></input>
                                                        <button className='btn' onClick={() => delHeaderPageContent(indx)}>Delete</button>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                            <div className='rightSide'>
                                <div className='headingArea'>
                                    <h1>ফুটারে যাযা থাকবে</h1>
                                </div>
                                <div className='lists'>
                                    <button className='btn' onClick={HandleAddFooterPageContentInput}>Add</button>
                                    {
                                        isFooterPageContent.map((val, indx) => {
                                            return (

                                                <div class="listInputArea">
                                                    <div>
                                                        <input className='numberInput' type='text' value={val.footerPageContent} required onChange={(e) => changeFooterPageContent(e, indx)}></input>
                                                        <button className='btn' onClick={() => delFooterPageContent(indx)}>Delete</button>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='headingArea'>
                            <h1>ক্লায়েন্ট কী কী প্রোভাইড করবে</h1>
                        </div>
                        <div className='clientDataInputBoxArea'>
                            <div className='lists'>
                                <button className='btn' onClick={HandleAddClientProvideDataInput}>Add</button>
                                {
                                    clientProvideList.map((val, indx) => {
                                        return (
                                            <div class="listInputArea">
                                                <div>
                                                    <h2 className='clientProvideHeader'>{indx + 1}.</h2>
                                                    <input className='clientProvideInput' type='text' value={val.clientProvideData} required onChange={(e) => changeClientProvideData(e, indx)}></input>
                                                    <button className='btn' onClick={() => delClientProvideData(indx)}>Delete</button>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        <div className='headingArea'>
                            <h1>কোম্পানি কী কী প্রোভাইড করবে</h1>
                        </div>
                        <div className='clientDataInputBoxArea'>
                            <div className='lists'>
                                <button className='btn' onClick={HandleAddCompanyProvideDataInput}>Add</button>
                                {
                                    companyProvideList.map((val, indx) => {
                                        return (
                                            <div class="listInputArea">
                                                <div>
                                                    <h2 className='clientProvideHeader'>{indx + 1}.</h2>
                                                    <input className='clientProvideInput' type='text' value={val.companyProvideData} required onChange={(e) => changeCompanyProvideData(e, indx)}></input>
                                                    <button className='btn' onClick={() => delCompanyProvideData(indx)}>Delete</button>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        <div className='headingArea'>
                            <h1>টার্মস এন্ড কান্ডিশন</h1>
                        </div>
                        <div className='clientDataInputBoxArea'>
                            <div className='lists'>
                                <button className='btn' onClick={HandleAddTermsConditionsListInput}>Add</button>
                                {
                                    termsConditionsList.map((val, indx) => {
                                        return (
                                            <div class="listInputArea">
                                                <div>
                                                    <h2 className='clientProvideHeader'>{indx + 1}.</h2>
                                                    <input className='clientProvideInput' type='text' value={val.termsConditionsData} required onChange={(e) => changeTermsConditionsList(e, indx)}></input>
                                                    <button className='btn' onClick={() => delTermsConditionsList(indx)}>Delete</button>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
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

