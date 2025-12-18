import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      <main className="pt-32 pb-24 container px-4 md:px-6 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground italic mb-12">Last Updated: December 17, 2024</p>

          <div className="space-y-8 text-lg text-muted-foreground">
            <p>
              Welcome to Mirai Systems. These Terms of Service ("Terms") govern your access to and use of our website (miraisystems.xyz), services, and any communication channels we operate, including WhatsApp and Instagram. By accessing or using our services, you agree to be bound by these Terms.
            </p>

            <p>
              These Terms are designed to comply with applicable laws in the United States and the European Union, including Spain's Law 34/2002 on Information Society Services (LSSI) and consumer protection regulations.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Company Information</h2>
              <p className="mb-4">These services are provided by:</p>
              <div className="bg-muted/30 p-6 rounded-lg border border-border">
                <p className="font-bold text-xl text-foreground mb-2">Mirai Systems</p>
                <div className="space-y-1">
                  <p>Email: <a href="mailto:contact@miraisystems.xyz" className="text-primary hover:underline">contact@miraisystems.xyz</a></p>
                  <p>Website: <a href="https://miraisystems.xyz" className="text-primary hover:underline">miraisystems.xyz</a></p>
                  <p>Country: United States</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Acceptance of Terms</h2>
              <p className="mb-4">By accessing our website, contacting us through any communication channel, or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.</p>
              <p>We reserve the right to modify these Terms at any time. Continued use of our services after modifications constitutes acceptance of the updated Terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Description of Services</h2>
              <p className="mb-4">Mirai Systems provides AI automation services, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Chatbot development and implementation</li>
                <li>Workflow automation solutions</li>
                <li>System integration services</li>
                <li>AI consulting and strategy</li>
              </ul>
              <p>The specific scope, deliverables, pricing, and timeline of services will be defined in individual agreements or proposals with clients before work commences.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Eligibility</h2>
              <p className="mb-4">You must be at least 18 years old to use our services (or 14 years old in Spain with parental consent for certain interactions, as per LOPDGDD). By using our services, you represent and warrant that you meet these age requirements and have the legal capacity to enter into these Terms.</p>
              <p>If you are using our services on behalf of a company or organization, you represent that you have the authority to bind that entity to these Terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. User Responsibilities</h2>
              <p className="mb-4">When using our services or communicating with us, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information when requested</li>
                <li>Use our services only for lawful purposes and in accordance with these Terms</li>
                <li>Not use our services to transmit any harmful, offensive, defamatory, or illegal content</li>
                <li>Not attempt to interfere with, disrupt, or compromise our services, servers, or security</li>
                <li>Not impersonate any person or entity or misrepresent your affiliation</li>
                <li>Comply with all applicable local, national, and international laws and regulations</li>
                <li>Respect the intellectual property rights of Mirai Systems and third parties</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Communication Channels</h2>
              <p className="mb-4">We offer communication through various channels, including WhatsApp, Instagram, and email. By initiating contact through these channels:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>You consent to receive responses related to your inquiry</li>
                <li>You consent to follow-up communications relevant to our business relationship</li>
                <li>You acknowledge that messages may be processed through third-party platforms (Meta) and automation tools</li>
              </ul>
              <p>You may opt out of non-essential communications at any time by contacting us or using the unsubscribe mechanism provided.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Service Agreements and Pricing</h2>
              <p className="mb-4">Formal service engagements will be governed by separate written agreements that specify:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Scope of work and deliverables</li>
                <li>Pricing and payment terms</li>
                <li>Timeline and milestones</li>
                <li>Specific terms and conditions applicable to the project</li>
              </ul>
              <p>No binding obligation to provide services exists until a formal agreement is executed by both parties.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Intellectual Property</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">8.1 Our Intellectual Property</h3>
              <p className="mb-4">All content on our website, including text, graphics, logos, images, and software, is the property of Mirai Systems or its licensors and is protected by intellectual property laws, including copyright, trademark, and trade secret laws of the United States, the European Union, and international treaties.</p>
              <p className="mb-4">You may not reproduce, distribute, modify, create derivative works from, publicly display, or exploit any content without our prior written consent.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">8.2 Client Projects</h3>
              <p className="mb-4">Intellectual property ownership for client projects will be defined in the specific service agreement between Mirai Systems and the client. Unless otherwise specified in writing:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pre-existing intellectual property remains with its original owner</li>
                <li>Custom deliverables created for the client transfer to the client upon full payment</li>
                <li>Mirai Systems retains the right to use general knowledge, skills, and experience gained during the project</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Third-Party Services</h2>
              <p className="mb-4">Our services may integrate with or rely on third-party platforms and services, including but not limited to Meta platforms (Facebook, Instagram, WhatsApp), automation tools (n8n, Make), and cloud services.</p>
              <p className="mb-4">Your use of these third-party services is subject to their respective terms of service and privacy policies. We are not responsible for the practices, policies, or availability of third-party services.</p>
              <p>We do not guarantee uninterrupted access to third-party integrations and are not liable for any issues arising from third-party service changes or outages.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Disclaimer of Warranties</h2>
              <p className="mb-4">To the maximum extent permitted by applicable law:</p>
              <p className="mb-4">Our services are provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, non-infringement, and any warranties arising from course of dealing or usage of trade.</p>
              <p className="mb-4">We do not warrant that:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Our services will be uninterrupted, error-free, or completely secure</li>
                <li>Defects will be corrected within a specific timeframe</li>
                <li>Our services will meet your specific requirements or expectations</li>
                <li>Results obtained from using our services will be accurate or reliable</li>
              </ul>

              <div className="bg-primary/5 border-l-4 border-primary p-4 my-6">
                <strong className="text-foreground">For EU/Spanish Users:</strong> This disclaimer does not affect your statutory rights as a consumer under EU or Spanish law. Nothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable law.
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Limitation of Liability</h2>
              <p className="mb-4">To the fullest extent permitted by applicable law:</p>
              <p className="mb-4">Mirai Systems, its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, business opportunities, goodwill, or other intangible losses, arising out of or related to your use of our services.</p>
              <p className="mb-6">Our total aggregate liability for any claims arising from or related to these Terms or our services shall not exceed the greater of: (a) the amount you paid to us in the twelve (12) months preceding the claim, or (b) one hundred US dollars ($100).</p>

              <div className="bg-primary/5 border-l-4 border-primary p-4 my-6">
                <strong className="text-foreground">For EU/Spanish Users:</strong> The above limitations do not apply to liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited under applicable EU or Spanish law.
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Indemnification</h2>
              <p className="mb-4">You agree to indemnify, defend, and hold harmless Mirai Systems, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or in any way connected with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use of our services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Your violation of any applicable laws or regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Termination</h2>
              <p className="mb-4">We reserve the right to suspend or terminate your access to our services at any time, with or without cause, and with or without notice, if we believe you have violated these Terms or engaged in conduct that may harm our business or other users.</p>
              <p className="mb-4">Upon termination:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Your right to use our services will immediately cease</li>
                <li>Provisions that by their nature should survive termination will remain in effect (including intellectual property, limitation of liability, indemnification, and governing law)</li>
              </ul>
              <p>You may terminate your relationship with us at any time by ceasing to use our services and notifying us in writing.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Governing Law and Jurisdiction</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">14.1 For Users in the United States</h3>
              <p className="mb-4">These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any disputes shall be resolved in the state or federal courts located in Delaware.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">14.2 For Users in the European Union/Spain</h3>
              <p className="mb-4">If you are a consumer in the European Union or Spain, you benefit from mandatory provisions of consumer protection laws in your country of residence. Nothing in these Terms affects your rights as a consumer to rely on such mandatory provisions.</p>
              <p className="mb-4">For EU consumers, any disputes may be submitted to the courts of your country of residence. You may also use the European Commission's Online Dispute Resolution (ODR) platform at <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr</a>.</p>
              <p>For disputes with Spanish consumers, Spanish courts shall have jurisdiction as required by Spanish consumer protection law.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">15. Dispute Resolution</h2>
              <p>Before initiating formal legal proceedings, we encourage you to contact us to attempt to resolve any disputes informally. Send your concerns to <a href="mailto:contact@miraisystems.xyz" className="text-primary hover:underline">contact@miraisystems.xyz</a>, and we will work in good faith to find a resolution within 30 days.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">16. Severability</h2>
              <p>If any provision of these Terms is found to be unenforceable or invalid by a court of competent jurisdiction, that provision shall be modified to the minimum extent necessary to make it enforceable, or if modification is not possible, severed from these Terms. The remaining provisions shall remain in full force and effect.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">17. Waiver</h2>
              <p>Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. Any waiver must be in writing and signed by an authorized representative of Mirai Systems.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">18. Entire Agreement</h2>
              <p>These Terms, together with our Privacy Policy and any other agreements referenced herein or entered into separately, constitute the entire agreement between you and Mirai Systems regarding your use of our services and supersede any prior agreements, communications, or understandings.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">19. Assignment</h2>
              <p>You may not assign or transfer your rights or obligations under these Terms without our prior written consent. We may assign our rights and obligations under these Terms without restriction.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">20. Force Majeure</h2>
              <p>We shall not be liable for any failure or delay in performing our obligations under these Terms due to circumstances beyond our reasonable control, including but not limited to natural disasters, acts of war or terrorism, epidemics, government actions, or failures of third-party services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">21. Contact Us</h2>
              <p className="mb-4">If you have any questions about these Terms of Service, please contact us at:</p>
              <div className="bg-muted/30 p-6 rounded-lg border border-border">
                <p className="font-bold text-xl text-foreground mb-2">Mirai Systems</p>
                <div className="space-y-1">
                  <p>Email: <a href="mailto:contact@miraisystems.xyz" className="text-primary hover:underline">contact@miraisystems.xyz</a></p>
                  <p>Website: <a href="https://miraisystems.xyz" className="text-primary hover:underline">miraisystems.xyz</a></p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
