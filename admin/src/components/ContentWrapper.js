import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import ContentBeforeFooter from './ContentBeforeFooter';
function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="mio">
                {/*<!-- Main Content -->*/}
                <div id="content" className="mio">
                    <TopBar />
                    <ContentRowTop />
                    <ContentBeforeFooter />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;