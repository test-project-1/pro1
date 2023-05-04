import { default as dayjs } from 'dayjs'

export const ticketsList = [
    {
        ticketType: '',
        classType: {
            hi: 'प्रथम',
            en: 'First',
            mar: 'प्र '
        },
        trainType:{
            hi: 'एसी ईएमयू',
            en: 'AC EMU',
            mar: 'एसी इमू'
        },
        fare: {
            amt: 105.00,
            gst: 4.90
        },
        passenger: {
            adult: 1,
            child: 0
        },
        distance: '49 km',
        stationDetails: {
            from: {
                hi: 'नाला-सोपारा',
                en: 'NALL-SOPARA',
                mar: 'नाला-सोपारा'
            },
            to: {
                'en': 'LOWER PAREL',
                'hi': 'लोअर परेल',
                mar: 'लोअर परेल'
            },
        },
        journeyDate: dayjs().format('DD/MM/YYYY'),
        bookingDate: dayjs().format('DD/MM/YYYY'),
        utsNo: 'X03DDI701C',
        SAC: '996411',
        IR: ''
    },
    {
        ticketType: '',
        classType: {
            hi: 'प्रथम',
            en: 'First',
            mar: 'प्र '
        },
        trainType:{
            hi: 'एसी ईएमयू',
            en: 'AC EMU',
            mar: 'एसी इमू'
        },
        fare: {
            amt: 105.00,
            gst: 4.90
        },
        passenger: {
            adult: 1,
            child: 0
        },
        distance: '49 km',
        stationDetails: {
            from: {
                'en': 'LOWER PAREL',
                'hi': 'लोअर परेल',
                mar: 'लोअर परेल',
            },
            to: {
                hi: 'नाला-सोपारा',
                en: 'NALL-SOPARA',
                mar: 'नाला-सोपारा'
            },
        },
        journeyDate: dayjs().format('DD/MM/YYYY'),
        bookingDate: dayjs().format('DD/MM/YYYY'),
        utsNo: '',
        SAC: '996411',
        IR: ''
    }
]