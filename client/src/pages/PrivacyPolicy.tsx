import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      <main className="pt-32 pb-24 container px-4 md:px-6 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground italic mb-12">Last Updated: December 17, 2024</p>

          <div className="space-y-8 text-lg text-muted-foreground">
            <p>
              <strong>Mirai Systems</strong> ("we," "our," "us," or the "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you interact with our services, including through our website (miraisystems.xyz), WhatsApp, Instagram, and other communication channels.
            </p>

            <p>
              This policy complies with the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA), the General Data Protection Regulation (GDPR), and Spain's Organic Law on Data Protection and Digital Rights (LOPDGDD).
            </p>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Data Controller Information</h2>
              <p className="mb-4">The data controller responsible for your personal data is:</p>
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
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              <p className="mb-4">In the preceding 12 months, we have collected the following categories of personal information:</p>
              
              <div className="overflow-x-auto rounded-lg border border-border mb-6">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted text-foreground font-medium">
                    <tr>
                      <th className="p-4 border-b border-border">Category</th>
                      <th className="p-4 border-b border-border">Examples</th>
                      <th className="p-4 border-b border-border">Source</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-4">Identifiers</td>
                      <td className="p-4">Name, email address, phone number, social media usernames (Instagram, WhatsApp)</td>
                      <td className="p-4">Directly from you when you contact us</td>
                    </tr>
                    <tr>
                      <td className="p-4">Contact Information</td>
                      <td className="p-4">Postal address, email address, phone number</td>
                      <td className="p-4">Directly from you; third-party platforms (Meta)</td>
                    </tr>
                    <tr>
                      <td className="p-4">Communication Data</td>
                      <td className="p-4">Messages, inquiries, conversation history</td>
                      <td className="p-4">WhatsApp, Instagram, email communications</td>
                    </tr>
                    <tr>
                      <td className="p-4">Profile Information</td>
                      <td className="p-4">Profile pictures, display names, publicly available social media information</td>
                      <td className="p-4">Third-party platforms (Meta)</td>
                    </tr>
                    <tr>
                      <td className="p-4">Technical Data</td>
                      <td className="p-4">IP address, browser type, device information, usage data</td>
                      <td className="p-4">Automatically collected when you visit our website</td>
                    </tr>
                    <tr>
                      <td className="p-4">Commercial Information</td>
                      <td className="p-4">Records of services purchased or considered</td>
                      <td className="p-4">Directly from you; our CRM system</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                <strong>We do not collect sensitive personal information</strong> such as social security numbers, financial account details, precise geolocation, racial or ethnic origin, religious beliefs, sexual orientation, or biometric data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Legal Basis for Processing (GDPR/LOPDGDD)</h2>
              <p className="mb-4">We process your personal data based on the following legal grounds:</p>
              <ul className="space-y-4 list-none pl-0">
                <li className="pl-4 border-l-2 border-primary/30">
                  <strong className="text-foreground">Contractual Necessity (Art. 6(1)(b) GDPR):</strong> Processing necessary to respond to your inquiries and provide our AI automation services.
                </li>
                <li className="pl-4 border-l-2 border-primary/30">
                  <strong className="text-foreground">Legitimate Interests (Art. 6(1)(f) GDPR):</strong> Processing for commercial follow-up, CRM management, and improving our services, provided this does not override your fundamental rights and freedoms.
                </li>
                <li className="pl-4 border-l-2 border-primary/30">
                  <strong className="text-foreground">Consent (Art. 6(1)(a) GDPR):</strong> Where you have given explicit consent to receive marketing communications. You may withdraw consent at any time.
                </li>
                <li className="pl-4 border-l-2 border-primary/30">
                  <strong className="text-foreground">Legal Obligation (Art. 6(1)(c) GDPR):</strong> Processing necessary to comply with legal requirements.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect for the following purposes:</p>
              <ul className="space-y-4 list-none pl-0">
                <li className="pl-4 border-l-2 border-primary/30">
                  <strong className="text-foreground">To Respond to Inquiries:</strong> We use your contact and communication data to respond to your questions, provide customer support, and deliver our AI automation services.
                </li>
                <li className="pl-4 border-l-2 border-primary/30">
                  <strong className="text-foreground">Commercial Follow-up:</strong> We store your information in our Customer Relationship Management (CRM) system to follow up on business opportunities, send relevant information about our services, and maintain our business relationship with you.
                </li>
                <li className="pl-4 border-l-2 border-primary/30">
                  <strong className="text-foreground">Service Delivery:</strong> To provide, operate, and improve our AI automation services.
                </li>
                <li className="pl-4 border-l-2 border-primary/30">
                  <strong className="text-foreground">Marketing Communications:</strong> To send you updates and information about our services (only with your consent where required by law). You can opt out at any time.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Sharing of Information</h2>
              <p className="mb-4">We may share your information with third parties in the following circumstances:</p>

              <p className="mb-2"><strong>Service Providers and Processors:</strong> We use third-party tools and platforms to operate our business. These include:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>CRM systems for customer relationship management</li>
                <li>Automation platforms (n8n, Make)</li>
                <li>Customer communication tools (Chatwoot)</li>
                <li>Cloud storage providers</li>
                <li>Meta platforms (WhatsApp, Instagram) for communication</li>
              </ul>
              <p className="mb-4">These providers process data on our behalf under contractual obligations to protect your information.</p>

              <p className="mb-2"><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</p>
              <p className="mb-4"><strong>Legal Requirements:</strong> We may disclose your information if required by law, regulation, legal process, or governmental request.</p>

              <p><strong>We do not sell or share your personal information</strong> for cross-context behavioral advertising purposes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. International Data Transfers</h2>
              <p className="mb-4">Your personal data may be transferred to and processed in countries outside the European Economic Area (EEA), including the United States, where our company is based and where some of our service providers operate.</p>
              <p className="mb-2">For transfers from the EU/EEA, we ensure adequate protection through:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>EU-US Data Privacy Framework (for certified US companies)</li>
                <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                <li>Adequacy decisions where applicable</li>
              </ul>
              <p>You may request a copy of the safeguards we use by contacting us at <a href="mailto:contact@miraisystems.xyz" className="text-primary hover:underline">contact@miraisystems.xyz</a>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Data Retention</h2>
              <p className="mb-4">We retain your personal information for the following periods:</p>
              
              <div className="overflow-x-auto rounded-lg border border-border mb-6">
                <table className="w-full text-left text-sm">
                  <thead className="bg-muted text-foreground font-medium">
                    <tr>
                      <th className="p-4 border-b border-border">Data Category</th>
                      <th className="p-4 border-b border-border">Retention Period</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-4">Contact and Communication Data</td>
                      <td className="p-4">3 years from last interaction, unless an active business relationship exists</td>
                    </tr>
                    <tr>
                      <td className="p-4">CRM Records (prospects)</td>
                      <td className="p-4">2 years from last engagement</td>
                    </tr>
                    <tr>
                      <td className="p-4">CRM Records (clients)</td>
                      <td className="p-4">Duration of business relationship plus 5 years for legal compliance</td>
                    </tr>
                    <tr>
                      <td className="p-4">Marketing Consent Records</td>
                      <td className="p-4">Duration of consent plus 3 years</td>
                    </tr>
                    <tr>
                      <td className="p-4">Technical/Website Data</td>
                      <td className="p-4">12 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>When data is no longer needed, we securely delete or anonymize it.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, access controls, and secure data storage practices. However, no method of transmission over the Internet is 100% secure.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Your Privacy Rights</h2>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">9.1 Rights for All Users</h3>
              <p className="mb-2">Regardless of your location, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">9.2 California Residents (CCPA/CPRA)</h3>
              <p className="mb-2">If you are a California resident, you have the following additional rights:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong className="text-foreground">Right to Know:</strong> Request disclosure of the categories and specific pieces of personal information we collected, the sources, purposes, and third parties we share it with.</li>
                <li><strong className="text-foreground">Right to Delete:</strong> Request deletion of your personal information, subject to certain exceptions.</li>
                <li><strong className="text-foreground">Right to Correct:</strong> Request correction of inaccurate personal information.</li>
                <li><strong className="text-foreground">Right to Opt-Out of Sale/Sharing:</strong> We do not sell your personal information or share it for cross-context behavioral advertising.</li>
                <li><strong className="text-foreground">Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights.</li>
              </ul>

              <div className="bg-primary/5 border-l-4 border-primary p-4 my-6">
                <strong className="text-foreground">Do Not Sell or Share My Personal Information:</strong> We do not sell your personal information or share it for targeted advertising purposes. If our practices change, we will update this policy and provide an opt-out mechanism.
              </div>

              <p className="mb-6">To exercise your CCPA rights, contact us at <a href="mailto:contact@miraisystems.xyz" className="text-primary hover:underline">contact@miraisystems.xyz</a>. We will respond within 45 days.</p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">9.3 European Union and Spanish Residents (GDPR/LOPDGDD)</h3>
              <p className="mb-2">If you are located in the EU or Spain, you have the following rights under GDPR and LOPDGDD:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong className="text-foreground">Right of Access (Art. 15 GDPR):</strong> Obtain confirmation of whether we process your data and access to it.</li>
                <li><strong className="text-foreground">Right to Rectification (Art. 16 GDPR):</strong> Correct inaccurate or incomplete data.</li>
                <li><strong className="text-foreground">Right to Erasure (Art. 17 GDPR):</strong> Request deletion of your data ("right to be forgotten").</li>
                <li><strong className="text-foreground">Right to Restriction (Art. 18 GDPR):</strong> Restrict processing in certain circumstances.</li>
                <li><strong className="text-foreground">Right to Data Portability (Art. 20 GDPR):</strong> Receive your data in a structured, machine-readable format.</li>
                <li><strong className="text-foreground">Right to Object (Art. 21 GDPR):</strong> Object to processing based on legitimate interests or for direct marketing.</li>
                <li><strong className="text-foreground">Right to Withdraw Consent:</strong> Withdraw consent at any time without affecting the lawfulness of prior processing.</li>
                <li><strong className="text-foreground">Right to Lodge a Complaint:</strong> File a complaint with a supervisory authority.</li>
              </ul>

              <p className="mb-2">
                <strong className="text-foreground">For Spanish Residents:</strong> You may file a complaint with the Spanish Data Protection Agency (Agencia Española de Protección de Datos - AEPD) at <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aepd.es</a>.
              </p>

              <p>To exercise your rights, contact us at <a href="mailto:contact@miraisystems.xyz" className="text-primary hover:underline">contact@miraisystems.xyz</a>. We will respond within one month (extendable by two additional months for complex requests).</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Third-Party Platforms</h2>
              <p className="mb-2">Our services integrate with third-party platforms such as Meta (Facebook, Instagram, WhatsApp). Your interactions on these platforms are also subject to their respective privacy policies:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Meta Privacy Policy: <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.facebook.com/privacy/policy/</a></li>
              </ul>
              <p className="mt-2">We encourage you to review these policies.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Children's Privacy</h2>
              <p>Our services are not directed to individuals under the age of 18 (or 14 in Spain, as per LOPDGDD). We do not knowingly collect personal information from children. If you are under 18 (or 14 in Spain), please do not provide us with any personal information. If we become aware that we have collected personal information from a child, we will take steps to delete that information promptly.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Automated Decision-Making</h2>
              <p>We do not use automated decision-making or profiling that produces legal effects concerning you or similarly significantly affects you.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We review this policy at least annually. We encourage you to review this Privacy Policy periodically.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Contact Us</h2>
              <p className="mb-4">If you have any questions about this Privacy Policy, wish to exercise your rights, or have concerns about our privacy practices, please contact us at:</p>
              <div className="bg-muted/30 p-6 rounded-lg border border-border">
                <p className="font-bold text-xl text-foreground mb-2">Mirai Systems</p>
                <div className="space-y-1">
                  <p>Email: <a href="mailto:contact@miraisystems.xyz" className="text-primary hover:underline">contact@miraisystems.xyz</a></p>
                  <p>Website: <a href="https://miraisystems.xyz" className="text-primary hover:underline">miraisystems.xyz</a></p>
                </div>
              </div>
              <p className="mt-4 text-sm">We aim to respond to all requests within 30 days (or within the timeframes required by applicable law).</p>
            </section>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
