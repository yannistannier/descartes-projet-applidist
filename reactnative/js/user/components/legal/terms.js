import React, { Component } from 'react';
import { View, Spinner } from 'native-base';
import { Container, Content, List, ListItem, Text, Icon, Badge, Left, Body, Right, Switch } from 'native-base';



class Terms extends Component {

  render() {
      const { user } = this.props

      return (
        <Container >
          <Content>

              <Text style={{paddingBottom:20}}>Spitch Terms of services   </Text>

               <Text style={{paddingBottom:20}}>These terms of service (“Terms”) govern your access to and use of Spitch, including any content, functionality and services offered on or via spitch.tv. By using the Services you agree to be bound by these Terms.  
                </Text>
                <Text style={{paddingBottom:20}}>Who is Spitch ?    </Text>
                <Text style={{paddingBottom:20}}>Spitch SAS is a company incorporated in France and registered at 29 rue Viala, 75015, Paris.  </Text>
               
               <Text style={{paddingBottom:20}}>Who may use the Services ?</Text>
<Text style={{paddingBottom:20}}>You may use the Services only if you agree to form a contract with Spitch and are not barred from receiving services under the laws of your applicable jurisdiction.
If you are under 13 years old, you can’t use Spitch and are not permitted to access or use the Services.</Text>
<Text style={{paddingBottom:20}}>Privacy</Text>

<Text style={{paddingBottom:20}}>For more informations, please refer to our Privacy Policy on how we use and collect your informations.</Text>

<Text style={{paddingBottom:20}}>Content on the Services</Text>

<Text style={{paddingBottom:20}}>By submitting, posting or displaying Content on or through the Services you grant to Spitch a worldwide, royalty-free, transferable license to use, copy, modify, create derivative works, display, perform and distribute your User Content. Basically, we will use the content you create to run the App.  You are responsible for your use of the Services and for any Content you provide, including compliance with applicable laws, rules, and regulations in your country. You should only provide Content that you are comfortable sharing with others.  We do not endorse any opinions expressed via the Spitch as by using the Services, you may be exposed to Content that might be offensive, harmful, inaccurate or otherwise inappropriate.   We reserve the right to remove Content without prior notice, at our sole discretion, and without liability to you.
You can also remove your own Contents by deleting it. However, in certain instances, some of your User Content (such as comments or messages) could not be completely removed. Copies of your Content may continue to exist on the Services. We are not responsible or liable for the removal or deletion of (or the failure to remove or delete) any of your User Content.
</Text>

<Text style={{paddingBottom:20}}>Using the Services</Text>
<Text style={{paddingBottom:20}}>Please review the Spitchers Guidelines which are part of the User Agreement and outline what is prohibited on the Services.  We may modify the Terms at any time, in our sole discretion. If we do so, we'll contact you and highlight the changes (Email or notifications.) If you continue to use the Services after we have posted modified Terms, you are indicating to us that you agree to be bound by the modified Terms. If you don't agree to be bound by the modified Terms, then you may not use the Services anymore. As our Services are evolving over time we may change or discontinue all or any part of the Services, at any time and at our sole discretion.  Your Account  You need to create an account to use our Services. You are responsible of your account.. We cannot and will not be liable for any loss or damage arising from your failure to comply with the above.  Feedback
The more suggestions you make, the better the Spitch become. If you send us any feedback or suggestions regarding the Services, we may use it, so you grants us an unlimited, irrevocable, perpetual, sublicensable, transferable, royalty-free license to use any such feedback or suggestions for any purpose without any obligation or compensation, any Authorized User or other Customer personnel.  Your License to Use the Services  Spitch gives you a personal, worldwide, royalty-free, non-assignable and non-exclusive license to use the software provided to you as part of the Services. This license has the sole purpose of enabling you to use and enjoy the Services provided by Spitch, in the manner permitted by these Terms.  Ending These Terms  We may terminate your access to the Services, at our sole discretion, at any time and without notice to you. You may end your legal agreement with Spitch at any time by deactivating your accounts and discontinuing your use of the Services. See the Privacy Policy for more information on what happens to your information.  Termination
Upon any termination, discontinuation or cancellation of Services or your Account, the following provisions will survive: Feedback; Content Ownership; Warranty Disclaimers; Limitation of Liability; General Terms; and this sentence of Termination.
</Text>
<Text style={{paddingBottom:20}}>Warranty disclaimers and Limitations of Liability</Text>
<Text style={{paddingBottom:20}}>Your access to and use of the Services or any Content are at your own risk. NEITHER Spitch OR ANY OTHER party involved in creating, producing, or delivering the services or content will be LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR LOSS OF DATAS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOOD-WILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (1) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES; (2) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES, INCLUDING WITHOUT LIMITATION, ANY DEFAMATORY, OFFENSIVE OR ILLEGAL CONDUCT OF OTHER USERS OR THIRD PARTIES; (3) ANY CONTENT OBTAINED FROM THE SERVICES; OR (4) UNAUTHORIZED ACCESS, USE OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT.   THE LIMITATIONS OF THIS SUBSECTION SHALL APPLY TO ANY THEORY OF LIABILITY, WHETHER BASED ON WARRANTY, CONTRACT, STATUTE, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE.  SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU IN THEIR ENTIRETIES, BUT WILL APPLY TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW.
</Text>
<Text style={{paddingBottom:20}}>General</Text>
<Text style={{paddingBottom:20}}>We may revise these Terms from time to time. The changes will not be retroactive, and the most current version of the Terms, which will always be at http://spitch.tv.  These Terms constitute the entire and exclusive understanding and agreement between Spitch and you regarding the Services and Content, and these Terms supersede and replace any and all prior oral or written understandings or agreements between Spitch and you regarding the Services and Content.   If for any reason a court of competent jurisdiction finds any provision of these Terms invalid or unenforceable, that provision will be enforced to the maximum extent permissible and the other provisions of these Terms will remain in full force and effect.  You may not assign or transfer these Terms, by operation of law or otherwise, without Spitch’s prior written consent. Any attempt to transfer these Terms, without our consent, will be null.  We will try to notify you of material revisions, for example via a service notification or an email to the email associated with your account. By continuing to access or use the Services after those revisions become effective, you agree to be bound by the revised Terms.  Spitch’s failure to enforce any right or provision of these Terms will not be considered a waiver of such right or provision. 
Contact Information
If you have any questions about these Terms or the Services, please contact us at contact@spitch.tv

              </Text>

          </Content>
        </Container>
      );
    
  }
}

export default Terms
