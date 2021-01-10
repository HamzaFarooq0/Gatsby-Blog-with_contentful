import React from 'react';
import Footer from './footer';
import Header from './header';
//Styles
import layoutStyles from './layout.module.scss';

const Layout = ({ children }) => {
	return (
		<div className={layoutStyles.container}>
			<div className={layoutStyles.content}>
				<Header /> 
                <div className={layoutStyles.mainContent}>
                    {children}
                </div>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
