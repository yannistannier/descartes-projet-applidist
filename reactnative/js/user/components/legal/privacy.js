import React, { Component } from 'react';
import { View, Spinner } from 'native-base';
import { Container, Content, List, ListItem, Text, Icon, Badge, Left, Body, Right, Switch } from 'native-base';



class Privacy extends Component {

  render() {
      const { user } = this.props

      return (
        <Container >
          <Content>

            <Text style={{paddingBottom:10}}>Your License to Use the Services  </Text>
            <Text style={{paddingBottom:10}}>Spitch gives you a personal, worldwide, royalty-free, non-assignable and non-exclusive license to use the software provided to you as part of the Services. This license has the sole purpose of enabling you to use and enjoy the benefit of the Services as provided by Spitch, in the manner permitted by these Terms.
This privacy policy governs your use of the Spitch mobile application (“the “App”), www.spitch.tv (the “Site”), and all related products and services (the “Services” and together with the App and the Site, the “MustardSeed Services”). Capitalized terms used but not defined herein shall have the meaning set forth in the Spitch’s Terms of Use which govern all use of the Spitch Services.
Features available for use of the Spitch Services, such as the Site or the App may include monitoring bank transactions, rounding up the difference to charities, sharing on social media, competing with friends, using the information from Round Ups, and making one-time or recurring donations. Donations are not made in the App or through the Site but are done so through a PCI-compliant payment gateway outside of the App and Site.
</Text>

 <Text style={{paddingBottom:10}}>Data collection</Text>

 <Text style={{paddingBottom:10}}>
User Provided Information – You must register as a user to be able to use the basic features of the Site and the App. You must also download the App to be able to register for use of the App.
When you register with us and use the App or the Site, you generally provide: (a) your name, email address, user name, password, phone number, address, photos, and other registration information; (b) transaction-related information, such as when you make purchases, or download or use the Spitch Services; (c) information you provide us when you contact us for help; (d) bank login credentials to process donations outside of the App or Site, (e) information you enter into our system when using the App or Site, such as contact information and project management information, and; (f) credit card information. We may also use the information you provided us to contact you from time to time to provide you with important information, required notices, and marketing promotions.
The App may collect information for social networking platforms, including contact information, friends lists, login information, and photos. App will not share to your social networks without your consent. You can change sharing and privacy settings by going to the settings menu.
Automatically Collected Information – In addition, the App may collect certain information automatically, such as the type of mobile device you use, your mobile device’s unique device ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browsers you use, and information about the way you use the App. See “Automatic Data Collection and Advertising” section for examples.
 </Text>

 <Text style={{paddingBottom:10}}>Location information</Text>
 
 <Text style={{paddingBottom:10}}>This App does not collect precise information about the location of your mobile device but may do so in the future.
We may use your location information to provide requested location services, allow tagging, and understand how we acquire new users or why they change charity preferences.
You may at any time opt-out from further allowing us to have access to your location data by disallowing App to use GPS tracking through your device settings. For more information, please see the section below entitled “Opt-Out Rights.”
</Text>
<Text style={{paddingBottom:10}}>Third-Party Access to Information Obtained by the App and Site</Text>

 <Text style={{paddingBottom:10}}>We may share your information with third parties only in the ways that are described in this Privacy Policy.
We may disclose User Provided and Automatically Collected Information:
As required by law, such as to comply with a subpoena, or similar legal process;
When we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;
With our trusted service providers who work on our behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.
If Spitch is involved in a reorganization, you will be notified via email and/or a prominent notice on our Site of any change in ownership or uses of this information, as well as choices you may have regarding this information;
To advertisers and third party advertising networks and analytics companies as described below under the Section entitled Automatic Data Collection and Advertising.
Bank login information is not stored in the App and Site. Transactions are not processed in App and Site. Bank login information will be used only for core functions of the Site and App. Security procedures follow protocols described in documentation of Stripe and Plaid.
</Text>

<Text style={{paddingBottom:10}}>Automatic Data Collection and Advertising</Text>
<Text style={{paddingBottom:10}}>We may work with analytics companies to help us understand how the App and the Site are being used, such as the frequency and duration of usage. We will not work with advertisers and third party advertising networks to provide advertisements within the App and Site.
</Text>

<Text style={{paddingBottom:10}}>Opt-Out Rights</Text>

<Text style={{paddingBottom:10}}>Opt-out of all information collection by deleting your account on the Site and App and uninstalling the App – You can stop all collection of information by the App easily by deleting your account in the settings and uninstalling the App. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.
When applicable, you may at any time opt-out from further allowing us to have access to your location data by turning off GPS and location tracking in your device settings.
</Text>
<Text style={{paddingBottom:10}}>Data Retention Policy, Managing Your Information</Text>
<Text style={{paddingBottom:10}}>We will retain User Provided data for as long as you use the App and Site and for a reasonable time thereafter. We will retain Automatically Collected information for up to 18 months and thereafter may store it in aggregate. If you’d like us to delete User Provided Data that you have provided via the App and Site, please contact us at Spitch.tv and we will respond in a reasonable time. Please note that some or all of the User Provided Data may be required in order for you to be able to use the feature and functions in the App and Site.
</Text>

<Text style={{paddingBottom:10}}>Children</Text>
<Text style={{paddingBottom:10}}>We do not use the App or Site to knowingly solicit data from or market to children under the age of 13. If a parent or guardian becomes aware that his or her child has provided us with information without their consent, he or she should contact us at Spitch.tv. We will delete such information from our files within a reasonable time.
</Text>


<Text style={{paddingBottom:10}}>Security</Text>

<Text style={{paddingBottom:10}}>We are concerned about safeguarding the confidentiality of your information. We provide physical, electronic, and procedural safeguards to protect information we process and maintain. For example, we limit access to this information to authorized employees and contractors who need to know that information in order to operate, develop, or improve our Spitch Services. Please be aware that, although we endeavor to provide reasonable security for information we process and maintain, no security system can prevent all potential security breaches.
</Text>
<Text style={{paddingBottom:10}}>Changes</Text>
<Text style={{paddingBottom:10}}>This Privacy Policy may be updated from time to time for any reason. We will notify you of any changes to our Privacy Policy by posting the new Privacy Policy on spitch.tv and informing you via email. You are advised to consult this Privacy Policy for any changes.
Your Consent
By using the Spitch Services, you are consenting to our processing of User Provided and Automatically Collection information as set forth in this Privacy Policy now and as amended by us. “Processing,” means using cookies on a computer/hand held device or using or touching information in any way, including, but not limited to, collecting, storing, deleting, using, combining and disclosing information, most of these activities will take place in France. If you reside outside France. your information will be transferred to France, and processed and stored under France privacy standards. By using the App and Site and providing information to us, you consent to such transfer to, and processing in, France.
</Text>
<Text style={{paddingBottom:10}}>Contact Us</Text>
<Text style={{paddingBottom:10}}>If you have any questions regarding privacy while using the Spitch Services, or have questions about our practices, please contact us via email at contact@spitch.tv
            </Text>
          </Content>
        </Container>
      );
    
  }
}

export default Privacy
