import { createGlobalStyle } from 'styled-components'

import { variables } from './variables'
import { theme } from './theme'

export const GlobalStyles = createGlobalStyle`
	html {
		${variables.fontPrimary}: 'Roboto', sans-serif;

		${variables.colorPrimary100}: #E5D7FE;
		${variables.colorPrimary200}: #C9AFFE;
		${variables.colorPrimary300}: #AA86FD;
		${variables.colorPrimary400}: #9168FB;
		${variables.colorPrimary500}: #6837FA;
		${variables.colorPrimary600}: #4F28D7;
		${variables.colorPrimary700}: #3A1BB3;
		${variables.colorPrimary800}: #271190;
		${variables.colorPrimary900}: #1A0A77;

		${variables.colorSuccess100}: #F2FBCC;
		${variables.colorSuccess200}: #E2F89B;
		${variables.colorSuccess300}: #C7EC68;
		${variables.colorSuccess400}: #A9D941;
		${variables.colorSuccess500}: #82C10D;
		${variables.colorSuccess600}: #69A509;
		${variables.colorSuccess700}: #538A06;
		${variables.colorSuccess800}: #3E6F04;
		${variables.colorSuccess900}: #305C02;

		${variables.colorInfo100}: #D8F4FE;
		${variables.colorInfo200}: #B1E5FE;
		${variables.colorInfo300}: #89D1FE;
		${variables.colorInfo400}: #6CBEFD;
		${variables.colorInfo500}: #3C9FFC;
		${variables.colorInfo600}: #2B7CD8;
		${variables.colorInfo700}: #1E5CB5;
		${variables.colorInfo800}: #134192;
		${variables.colorInfo900}: #0B2D78;

		${variables.colorWarning100}: #FFF8D6;
		${variables.colorWarning200}: #FFEFAD;
		${variables.colorWarning300}: #FFE483;
		${variables.colorWarning400}: #FFDA65;
		${variables.colorWarning500}: #FFC832;
		${variables.colorWarning600}: #DBA524;
		${variables.colorWarning700}: #B78419;
		${variables.colorWarning800}: #93650F;
		${variables.colorWarning900}: #7A4F09;

		${variables.colorDanger100}: #FFE9D8;
		${variables.colorDanger200}: #FFCEB2;
		${variables.colorDanger300}: #FFAD8B;
		${variables.colorDanger400}: #FF8D6F;
		${variables.colorDanger500}: #FF593F;
		${variables.colorDanger600}: #DB372E;
		${variables.colorDanger700}: #B71F23;
		${variables.colorDanger800}: #931420;
		${variables.colorDanger900}: #7A0C1F;

		${variables.colorPurple100}: #E9E6FC;
		${variables.colorPurple200}: #D3CDF9;
		${variables.colorPurple300}: #B6AFED;
		${variables.colorPurple400}: #9B94DB;
		${variables.colorPurple500}: #776FC4;
		${variables.colorPurple600}: #5851A8;
		${variables.colorPurple700}: #3E378D;
		${variables.colorPurple800}: #282371;
		${variables.colorPurple900}: #19155E;

		${variables.colorBlack100}: #FFFFFF;
		${variables.colorBlack200}: #E6E6EA;
		${variables.colorBlack300}: #BCBCC0;
		${variables.colorBlack400}: #7E7E82;
		${variables.colorBlack500}: #2E2E30;
		${variables.colorBlack600}: #212129;
		${variables.colorBlack700}: #171722;
		${variables.colorBlack800}: #0E0E1B;
		${variables.colorBlack900}: #080817;

		${variables.colorPistachio100}: #F4FCE6;
		${variables.colorPistachio200}: #E7F9CF;
		${variables.colorPistachio300}: #D0EDB1;
		${variables.colorPistachio400}: #B6DC96;
		${variables.colorPistachio500}: #93C572;
		${variables.colorPistachio600}: #70A953;
		${variables.colorPistachio700}: #518D39;
		${variables.colorPistachio800}: #357224;
		${variables.colorPistachio900}: #215E15;

		${variables.colorPeach100}: #FEF8E8;
		${variables.colorPeach200}: #FEF0D1;
		${variables.colorPeach300}: #FEE6BA;
		${variables.colorPeach400}: #FEDBA8;
		${variables.colorPeach500}: #FECB8C;
		${variables.colorPeach600}: #DAA166;
		${variables.colorPeach700}: #B67A46;
		${variables.colorPeach800}: #93572C;
		${variables.colorPeach900}: #793E1A;

		${variables.colorPink100}: #FEE6E2;
		${variables.colorPink200}: #FDC9C5;
		${variables.colorPink300}: #FBA8AB;
		${variables.colorPink400}: #F7919F;
		${variables.colorPink500}: #F36D8C;
		${variables.colorPink600}: #D04F7A;
		${variables.colorPink700}: #AE3669;
		${variables.colorPink800}: #8C2259;
		${variables.colorPink900}: #370337;

		${variables.colorGray100}: #FCFDFE;
		${variables.colorGray200}: #EFF4FE;
		${variables.colorGray300}: #E6EEFD;
		${variables.colorGray400}: #D3E0F8;
		${variables.colorGray500}: #C5D2EA;
		${variables.colorGray600}: #ADBBD4;
		${variables.colorGray700}: #778AB1;
		${variables.colorGray800}: #4B5E8F;
		${variables.colorGray900}: #2D3E76;

		${variables.colorDark100}: #8A8AAB;
		${variables.colorDark200}: #6D6D8A;
		${variables.colorDark300}: #43435C;
		${variables.colorDark400}: #35354B;
		${variables.colorDark500}: #2C2C3D;
		${variables.colorDark600}: #202034;
		${variables.colorDark700}: #16162B;
		${variables.colorDark800}: #0E0E23;
		${variables.colorDark900}: #08081D;

		${variables.textBodySmall}: 9px;
		${variables.textLabelSmall}: 10px;
		${variables.textSubtitle}: 20px;
		${variables.text100}: 12px;
		${variables.text200}: 14px;
		${variables.text300}: 16px;
		${variables.text400}: 18px;
		${variables.text500}: 24px;
		${variables.text600}: 36px;
		${variables.text700}: 40px;
		${variables.text800}: 56px;
		${variables.text900}: 72px;

		${variables.fontRegular}: 400;
		${variables.fontMedium}: 500;
		${variables.fontBold}: 700;

		${variables.shadowDark}: 0px 2px 5px rgba(0, 0, 0, 0.1);
		${variables.shadowDark2x}: 0px 8px 10px rgba(0, 0, 0, 0.1);
		${variables.shadowDark3x}: 0px 10px 15px rgba(0, 0, 0, 0.1);
		${variables.shadowDark4x}: 0px 16px 30px rgba(0, 0, 0, 0.3);
		${variables.shadowDark5x}: 0px 30px 30px rgba(0, 0, 0, 0.3);

		${variables.shadowColor}: 0px 2px 5px rgba(59, 21, 172, 0.5);
		${variables.shadowColor2x}: 0px 30px 30px rgba(52, 19, 150, 0.3);

		${variables.skeomorphicLight}: -2px -2px 5px rgba(255, 255, 255, 0.6), 2px 2px 5px rgba(0, 0, 0, 0.15);
		${variables.skeomorphicInnerLight}: 0px 4px 6px rgba(0, 0, 0, 0.05), -2px -2px 6px rgba(255, 255, 255, 0.05), inset 2px 2px 4px rgba(0, 0, 0, 0.25), inset -2px -2px 4px rgba(255, 255, 255, 0.61);
		${variables.skeomorphicDark}: -2px -2px 5px rgba(255, 255, 255, 0.1), 2px 2px 5px rgba(0, 0, 0, 0.19);
		${variables.skeomorphicInnerDark}: 0px 4px 6px rgba(0, 0, 0, 0.05), -2px -2px 6px rgba(255, 255, 255, 0.05), inset 2px 2px 4px rgba(0, 0, 0, 0.25), inset -2px -2px 10px rgba(255, 255, 255, 0.1);
	}

	body,
	input,
	button,
	select,
	option {
		font-family: ${theme.fonts.primary};
	}
`
