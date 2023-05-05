import { Button } from "@mui/material"
import Link from "next/link";
import Marquee from "react-fast-marquee";
import {ticketsList} from '../../../constant'
import { useRouter } from "next/router";
import * as _ from 'lodash'
import {useMemo} from 'react'
import { priceFormat, isEmpty } from "@/utils/utils";

export default function TicketDetailsPage(){
    const router = useRouter() 
    const user = {
        mobileNo: 9561318609,
        age: 27
    }
    const btnCss = "rounded-full py-1.5 bg-[#fec496] text-[#FFFFFF] uppercase w-full text-xs"

    const ticketDetails = useMemo(() => {
        const ticketId = router.query.ticketId
        const result = ticketsList.find(ticket => ticket.utsNo === ticketId)
        return result
    }, [router.query.ticketId, ticketsList])

    return (
        <>
            {!isEmpty(ticketDetails) ?
                <section className="container mx-2 my-2">
                    <div className="">
                        <div className="flex justify-between">
                            <img src="" />
                            <Marquee className="overflow-x-hidden">
                                <div className="whitespace-nowrap text-semibold font-base">IP Unreserved Ticketing</div>
                            </Marquee>
                            <img src="" alt="" />
                        </div>
                        <div className="rounded-sm shadow-sm">
                            <div className="bg-[#fec496] px-4 pt-2 pb-1">
                                <div className="uppercase">HAPPY JOURNEY</div>
                                <hr />
                                <div className="flex justify-between font-medium">
                                    <div></div>
                                    <div className="uppercase">
                                        Journey
                                    </div>
                                    <div>
                                        {ticketDetails?.journeyDate}
                                    </div>
                                </div>
                                <div className="flex justify-between font-medium">
                                    <span>{ticketDetails?.fare?.amt}</span>
                                    <span>{user.mobileNo}</span>
                                </div>
                                <div className="font-medium">UTS No.: {ticketDetails?.utsNo}</div>
                                <hr />
                                <div>
                                    <div>
                                        <div></div>
                                        <div className="font-medium">
                                            <div>{ticketDetails?.stationDetails.from.hi}({user.age})</div>
                                            <div>{ticketDetails?.stationDetails.from.en}</div>
                                            <div>{ticketDetails?.stationDetails.from.mar}</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div></div>
                                        <div className="font-medium">
                                            <div>{ticketDetails?.stationDetails.to.hi}</div>
                                            <div>{ticketDetails?.stationDetails.to.en}</div>
                                            <div>{ticketDetails?.stationDetails.to.mar}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div>
                                        <span className="font-medium">Adult:</span>
                                        <span>{ticketDetails?.passenger.adult}</span>
                                    </div>
                                    <div>
                                        <span className="font-medium">Child:</span>
                                        <span>{ticketDetails?.passenger.child}</span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <div className="uppercase">Class:</div>
                                        <div>
                                            <div>{ticketDetails?.classType.hi}</div>
                                            <div>{ticketDetails?.classType.en}</div>
                                            <div>{ticketDetails?.classType.mar}</div> 
                                        </div>
                                    </div>
                                    <div>
                                        <div className="uppercase">Train type:</div>
                                        <div className="font-medium">
                                            <div>{ticketDetails?.trainType.hi}</div>
                                            <div>{ticketDetails?.trainType.en}</div>
                                            <div>{ticketDetails?.trainType.mar}</div> 
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div>via</div>
                                <hr />
                                <div className="flex gap-10">
                                    <div>
                                        <span>SAC:</span>
                                        <span className="font-medium">{ticketDetails?.SAC}</span>
                                    </div>
                                    <div>
                                        <span>IR:</span>
                                        <span className="font-medium">{ticketDetails?.IR}</span>
                                    </div>
                                </div>
                                <div>
                                    <span>Total GST:</span>
                                    <span className="font-medium">Rs. {priceFormat(ticketDetails?.fare.gst)}</span>
                                </div>
                                <hr />
                                <div>Journey Should Commence within 1 hour</div>
                                <div>
                                    <div className="font-medium">R18573</div>
                                    <div className="font-normal">Distance : {ticketDetails?.distance}</div>
                                </div>
                                <div>
                                    <span className="font-medium">Booking Time:</span>
                                    <span>{ticketDetails?.bookingDate}</span>
                                </div>
                            </div>
                            <div className="px-2 py-3">
                            <div>
                                It is recommended not to perform factory reset or change 
                                your handset whenever you are having valid ticket in the mobile.
                                <Link href="">Click for Changing Handset with Valid Ticket</Link>
                            </div>
                            <div className="uppercase">
                                For medical emergency i first aid. contact ticket checking staff/guard or dial 139
                                </div>
                            <div className="space-y-2">
                                <button className={btnCss}>
                                    OPEN QR CODE
                                </button>
                                <button className={btnCss}>
                                    NEXT TRAIN TO LOWER PAREL
                                </button>
                                <button className={btnCss}>
                                    OK
                                </button>
                            </div>
                            </div>
                            </div>
                        </div>
                    <div className="text-center">Centre for Railway Information Systems (CRIS)</div>
                </section> 
            : null}
        </>
    )
}