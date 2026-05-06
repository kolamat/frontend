import appointment_img from 'appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profiles_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'

export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    profile_pic,
    contact_image,
    about_image,
    logo,
    dropdown_icon,
    menu_icon,
    cross_icon,
    chats_icon,
    verified_icon,
    arrow_icon,
    info_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
}

export const specialityData = [
    {
        speciality: 'General Physician',
        image: General_physician
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    }
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Richard James',
        image: doc1,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '4 years',
        about: '',
        fees: 50,
        adress: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London',
        }
    },
    {
        _id: 'doc1',
        name: 'Dr. Richard James',
        image: doc1,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '4 years',
        about: '',
        fees: 50,
        adress: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London',
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sarah Patel',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 year',
        about: '',
        fees: 30,
        adress: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London',
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Christopher lee',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 years',
        about: '',
        fees: 42,
        adress: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London',
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Jennifer Garcia',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 years',
        about: '',
        fees: 50,
        adress: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London',
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Andrew Williams',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 years',
        about: '',
        fees: 50,
        adress: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London',
        }
    },
]