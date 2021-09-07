import {React, useEffect} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";


function Policy() {
  useEffect(() => {
    document.title = "Agmir | Policy";
 }, []);
  return (
    <div className="Policy">
        <Footer />
        <Header />
        <Nav />
        <div className='container bg-light p-3 policy'>
            <h1>Policy.</h1>
            <p>Privacy Policy for (www.agmir.blog) .....</p>
            <p>If you require any more information or have any questions about our privacy policy, please feel free to contact us by email at Hagmir6@gmail.com.</p>

            <p>At www.agmir.blog, the privacy of our visitors is of extreme importance to us. This privacy policy document outlines the types of personal information is received and collected by www.agmir.blog and how it is used.</p>

            <strong>Log Files:</strong>

           <p> Like many other Web sites, www.agmir.blog makes use of log files. The information inside the log files includes internet protocol ( IP ) addresses, type of browser, Internet Service Provider ( ISP ), date/time stamp, referring/exit pages, and a number of clicks to analyze trends, administer the site, track user's movement around the site, and gather demographic information. IP addresses and other such information are not linked to any information that is personally identifiable.</p>

            <strong>Cookies and Web Beacons:</strong>

            <p>www.agmir.blog does use cookies to store information about visitors' preferences, record user-specific information on which pages the user access or visit, customize Web page content based on visitors browser type or other information that the visitor sends via their browser.</p>

            <strong>DoubleClick DART Cookie :</strong>

            <p>Google, as a third-party vendor, uses cookies to serve ads on www.agmir.blog.</p>

            <p> Google's use of the DART cookie enables it to serve ads to users based on their visit to  www.agmir.blog and other sites on the Internet.</p>

           <p> Users may opt-out of the use of the DART cookie by visiting the Google ad and content network privacy policy at the following URL - http://www.google.com/privacy_ads.html</p>

            <p>Some of our advertising partners may use cookies and web beacons on our site. Our advertising partners include Google Adsense.</p>

            <p>These third-party ad servers or ad networks use technology to the advertisements and links that appear on www.agmir.blog send directly to your browsers. They automatically receive your IP address when this occurs. Other technologies ( such as cookies, JavaScript, or Web Beacons ) may also be used by the third-party ad networks to measure the effectiveness of their advertisements and/or to personalize the advertising content that you see.</p>

            <p>www.agmir.blog has no access to or control over these cookies that are used by third-party advertisers.</p>

            <p>You should consult the respective privacy policies of these third-party ad servers for more detailed information on their practices as well as for instructions about how to opt-out of certain.</p>

            <p>www.agmir.blog's privacy policy does not apply to, and we cannot control the activities of, such other advertisers or websites.</p>

            <p>If you wish to disable cookies, you may do so through your individual browser options. More detailed information about cookie management with specific web browsers can be found on the browsers' respective websites.</p>
        </div>
        <Footer />
    </div>
  );
}



export default Policy;