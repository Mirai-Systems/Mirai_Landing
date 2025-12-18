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
              Mirai Systems ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you interact with our services, including through our website (miraisystems.xyz), WhatsApp, Instagram, and other communication channels.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
              <p className="mb-4">We may collect the following types of information when you interact with us:</p>
              <ul className="space-y-4 list-none pl-0">
                <li className="pl-4 border-l-2 border-primary/30">
                  <strong className="text-foreground">Contact Information:</strong> Name, email address, phone number, and social media usernames (such as Instagram or WhatsApp identifiers).
                </li>
                <li className="pl-4 border-l-2 border-primary/30">
                  <strong className="text-foreground">Communication Data:</strong> Messages, inquiries, and any content you share with us through WhatsApp, Instagram Direct Messages, email, or other communication platforms.
                </li>
                <li className="pl-4 border-l-2 border-primary/30">
                  <strong className="text-foreground">Profile Information:</strong> Publicly available information from your social media profiles, such as profile pictures and display names.
                </li>
                <li className="pl-4 border-l-2 border-primary/30">
                  <strong className="text-foreground">Technical Data:</strong> IP address, browser type, device information, and usage data when you visit our website.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect for the following purposes:</p>
              <ul className="space-y-4 list-none pl-0">
                <li className="pl-4 border-l-2 border-primary/30">
                  <strong className="text-foreground">To Respond to Inquiries:</strong> We use your contact and communication data to respond to your questions, provide customer support, and deliver our AI automation services.
                </li>
                <li className="pl-4 border-l-2 border-primary/30">
                  <strong className="text-foreground">Commercial Follow-up:</strong> We may store your information in our Customer Relationship Management (CRM) system to follow up on business opportunities, send relevant information about our services, and maintain our business relationship with you.
                </li>
                <li className="pl-4 border-l-2 border-primary/30">
                  <strong className="text-foreground">Service Delivery:</strong> To provide, operate, and improve our AI automation services.
                </li>
                <li className="pl-4 border-l-2 border-primary/30">
                  <strong className="text-foreground">Communication:</strong> To send you updates, marketing communications, and other information that may be of interest to you. You can opt out of marketing communications at any time.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Sharing of Information</h2>
              <p className="mb-4">We may share your information with third parties in the following circumstances:</p>
              <ul className="space-y-4 list-none pl-0">
                <li className="pl-4 border-l-2 border-primary/30">
                  <strong className="text-foreground">Service Providers:</strong> We use third-party tools and platforms to operate our business, including but not limited to CRM systems, automation platforms (such as n8n, Make, Chatwoot), cloud storage providers, and communication tools. These providers may have access to your information solely to perform tasks on our behalf.
                </li>
                <li className="pl-4 border-l-2 border-primary/30">
                  <strong className="text-foreground">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
                </li>
                <li className="pl-4 border-l-2 border-primary/30">
                  <strong className="text-foreground">Legal Requirements:</strong> We may disclose your information if required by law, regulation, legal process, or governmental request.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Retention</h2>
              <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
              <p className="mb-4">Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access the personal information we hold about you.</li>
                <li>The right to request correction of inaccurate information.</li>
                <li>The right to request deletion of your personal information.</li>
                <li>The right to opt out of marketing communications.</li>
              </ul>
              <p className="mt-4">To exercise any of these rights, please contact us at <a href="mailto:contact@miraisystems.xyz" className="text-primary hover:underline">contact@miraisystems.xyz</a>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Third-Party Platforms</h2>
              <p>Our services integrate with third-party platforms such as Meta (Facebook, Instagram, WhatsApp). Your interactions on these platforms are also subject to their respective privacy policies. We encourage you to review the privacy policies of Meta and any other third-party platforms you use to interact with us.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Children's Privacy</h2>
              <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take steps to delete that information.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Us</h2>
              <p className="mb-4">If you have any questions about this Privacy Policy or our privacy practices, please contact us at:</p>
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

export default PrivacyPolicy;
