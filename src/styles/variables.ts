import { ISize, IDevices, IColor } from '@/interfaces/variables';

const sizes: ISize = {
	miniMobile: '320px',
	mobile: '576px',
	tablet: '768px',
	laptop: '1024px',
	largeLaptop: '1440px',
	desktop: '2560px'
};

const devices: IDevices = {
	miniMobile: `(min-width: ${sizes.miniMobile})`,
	mobile: `(min-width: ${sizes.mobile})`,
	tablet: `(min-width: ${sizes.tablet})`,
	laptop: `(min-width: ${sizes.laptop})`,
	largeLaptop: `(min-width: ${sizes.largeLaptop})`,
	desktop: `(min-width: ${sizes.desktop})`
};

const color: IColor = {
	primaryColor: '#f35a57',
	whiteColor: '#fff',
	borderColor: '#efefef',
	errorColor: '#ff4d4f'
};

export { color, devices };
