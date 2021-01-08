import WebFont from 'webfontloader';
import { useEffect } from 'react';

const FontLoader = () => {
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Droid Sans', 'Chilanka']
          }
        });
    }, []);

    return(
        <div className="card">
            <div className="font-loader">
                This is with Web Font Loader using the class attribute. 
                We are loading the <u><b>Chilanka</b></u> font from the Google Fonts.
            </div>
            <hr />
            <div style={{fontFamily: 'Droid Sans'}}>
                This is with Web Font Loader using the style attribute. 
                We are loading the <u><b>Droid Sans</b></u> fonts from the Google Fonts.
            </div>
        </div>
    )
};

export default FontLoader;