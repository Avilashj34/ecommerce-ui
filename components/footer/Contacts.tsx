import {faWhatsapp} from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import {faClock} from '@fortawesome/free-solid-svg-icons/faClock';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function FooterContacts() {
	return (
		<>
			<h3 className='page-footer__header'>Contact Us</h3>
			<p className='page-footer__icon-w-link'>
				<span className='icon'>
					<FontAwesomeIcon icon={faWhatsapp}/>
				</span>
				<a className='link' href='tel:+917888014442'>+91 (788) 801-44-42</a>
			</p>
			<p className='page-footer__icon-w-link'>
				<span className='icon'>
					<FontAwesomeIcon icon={faMapMarkerAlt}/>
				</span>
				<a className='link' href='#'>Kalyan West, 421301</a>
			</p>
			<p className='page-footer__icon-w-link'>
				<span className='icon'>
					<FontAwesomeIcon icon={faClock}/>
				</span>
				12:00am &mdash; 9:00pm
			</p>
		</>
	);
}