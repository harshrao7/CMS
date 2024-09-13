import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import './LandingPage.css';
import { Link } from "react-router-dom";
export function CardDefault() {
    return (
        <>
            <div class="px-5  mx-auto flex items-center cardflex">
                <div className="flex flex-wrap -m-4 rounded-lg space-x-5 pt-8 px-5 w-[90%] cardwrapper">
                    <Card className="mt-6 w-96 cardwrap">
                        <img
                            className="relative w-full rounded-t-lg h-24"
                            src="https://images.unsplash.com/photo-1491309055486-24ae511c15c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="card-image"
                        />
                        <CardBody className="contentbody bg-gray-900 ">
                            <Typography variant="h5" color="white" className="mb-2">
                                READ
                            </Typography>
                            <Typography color="">
                                Given a linked list and a value x, partition a linked list around a...
                            </Typography>
                        </CardBody>
                    </Card>
                    <Card className="mt-6 w-96 cardwrap">
                        <img
                            className="relative w-full rounded-t-lg h-24"
                            src="https://images.unsplash.com/photo-1521999693742-4717d76f97cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UHJhY3RpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                            alt="card-image"
                        />
                        <CardBody className="contentbody bg-gray-900 ">
                            <Typography variant="h5" color="white" className="mb-2 ">
                                Practice Problems
                            </Typography>
                            <Typography color="">
                                Solve DSA Problems. Filter based on topic tags and company tags.
                            </Typography>
                        </CardBody>
                    </Card>
                    <Card className="mt-6 w-96 cardwrap">
                        <img
                            className="relative w-full rounded-t-lg h-24"
                            src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGludGVydmlld3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="card-image"
                        />
                        <CardBody className="contentbody bg-gray-900 ">
                            <Typography variant="h5" color="white" className="mb-2 ">
                                Interview Preparation
                            </Typography>
                            <Typography color="">
                                An interview-centric course designed to prepare you for the role of SDE...
                            </Typography>
                        </CardBody>
                    </Card>


                </div>
            </div>
        </>
    );
}



// import React from 'react'

// export function CardDefault() {
//     return (
//         <div >
//             <a href="#" className="group relative block bg-black">
//                 <img
//                     alt="Developer"
//                     src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
//                     className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
//                 />

//                 <div className="relative p-4 sm:p-6 lg:p-8">
//                     <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
//                         Developer
//                     </p>

//                     <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

//                     <div className="mt-32 sm:mt-48 lg:mt-64">
//                         <div
//                             className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
//                         >
//                             <p className="text-sm text-white">
//                                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
//                                 perferendis hic asperiores quibusdam quidem voluptates doloremque
//                                 reiciendis nostrum harum. Repudiandae?
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </a>
//         </div>
//     )
// }

// export default CardDefault
