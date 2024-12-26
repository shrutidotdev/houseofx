
import React from 'react'
import '../styles/global.css'
import Link from 'next/link'
import {Button} from '../../components/ui/button'

type Section = {
  title: string;
  content: string;
  items?: string[];
  additionalContent?: string;
  additionalItems?: string[];
  subsections?: Subsection[];
  contactInfo?: string[];
}

type Subsection = {
  title: string;
  content: string;
  items?: string[];
  additionalContent?: string;
  additionalItems?: string[];
}

const sections: Section[] = [
  { title: "1. Introduction", content: "HOUSE OF X (\"we,\" \"us,\" or \"our\") is committed to protecting the privacy and security of personal information collected from our users (\"you\" or \"your\"). This Privacy Policy outlines our practices concerning the collection, use, disclosure, and protection of your personal information when you use our website, products, and services." },
  { title: "2. Information We Collect", content: "We may collect the following types of information:", subsections: [
    { title: "2.1 Personal Information", content: "We collect personal information that you voluntarily provide to us when you:", items: ["Create an account", "Subscribe to our newsletter", "Participate in surveys or contests", "Contact us via email, social media, or a feedback form"], additionalContent: "This information may include:", additionalItems: ["Name", "Email address", "Phone number", "Mailing address", "Postal address", "Payment information", "Other information you choose to provide"] },
    { title: "2.2 Usage Information", content: "We may automatically collect certain information about your device and how you interact with our website, including:", items: ["IP address", "Browser type", "Operating system", "Referring Website", "Pages viewed and time spent on our website", "Links clicked", "Cookies and other tracking technologies"] }
  ]},
  { title: "3. Use of Personal Information", content: "We use your personal information for the following purposes:", items: ["Providing and improving our products and services", "Processing and fulfilling orders", "Communicating with you about your orders and account", "Sending promotional and marketing materials (subject to your preferences)", "Analyzing and understanding our user base", "Detecting and preventing fraud", "Complying with legal obligations"] },
    { title: "4. Sharing of Personal Information", 
      content: "",
    subsections: [
    { 
      title: "4.1 Third-Party Service Providers", 
      content: "We may share your personal information with third-party service providers who perform services on our behalf, such as:", 
      items: [
        "Shipping providers", "Payment processors", "Data analysis firms", "Customer support services", "Marketing and advertising partners"
      ],
     additionalContent: "We only share the personal information necessary for these third parties to perform their services and require them to protect the privacy and security of your information and use it only for the specified purpose." 
    },
    { title: "4.2 Legal Requirements", 
      content: "We may disclose your personal information if required to do so by law or in response to valid requests by public authorities (e.g., court order, government request)." 
    },
    { 
      title: "4.3 Business Transfers", 
      content: "If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred as part of that transaction." 
    }
  ]},
  { title: "5. Data Retention and Security", content: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. We implement appropriate technical and organizational measures to protect the security, confidentiality, and integrity of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security." },
  { title: "6. Your Rights and Choices", content: "You have the following rights regarding your personal information:", items: ["Access and obtain a copy of your personal information", "Rectify inaccurate or incomplete personal information", "Request deletion of your personal information", "Object to or restrict the processing of your personal information", "Data portability (where technically feasible)", "Withdraw consent (where processing is based on consent)"], additionalContent: "To exercise these rights or opt out of receiving promotional communications, please contact us using the information provided in the (\"Contact Us\") section." },
  { title: "7. Children's Privacy", content: "Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information." },
  { title: "8. International Data Transfers", content: "Your personal information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from the laws of your country. We will take appropriate measures to protect your personal information in accordance with this Privacy Policy and applicable law." },
  { title: "9. Changes to This Privacy Policy", content: "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the revised Privacy Policy on our website and updating the \"Last Updated\" date at the top of this policy. We encourage you to review this Privacy Policy periodically." },
  { title: "10. Use of Cookies and Similar Technologies", content: "We use cookies and similar technologies to improve the functionality and user experience of our website, track website usage, and provide relevant advertisements and promotions. You can manage your cookie preferences through your browser settings. For more information, please see our Cookie Policy [insert link]." },
  { title: "11. Contact Us", content: "If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact:", contactInfo: ["Neeraj Kumawat", "Co-Founder, HOUSE OF X", "Email: contact@houseofx.in", "Phone: +917760930987"] }
];

export default function PrivacyPolicy() {
  return (
    <section className='p-4 sm:p-6 md:p-10 mt-1 tracking-wider'>
      {/* Navbar */}
      <div className="max-w-4xl mx-auto">
        <Link href={"/"}>
         <Button>Go Back</Button>
        </Link>
      </div>
      
      {/* Privacy Policy */}
      <div className={`${'custom-footer leading-6'} text-sm sm:text-base max-w-4xl mx-auto`}>
        <section className="mt-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 font-bold">Privacy Policy</h1>
          <p className="my-7">Last Updated: 21st October 2024</p>
        </section>

        {/* Sections 1-11 */}
        {sections.map((section, index) => (
          <section key={index} className='mb-10'>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">{section.title}</h2>
            <p className="break-words">{section.content}</p>
            {section.items && (
              <ul className="list-disc pl-5 mt-2">
                {section.items.map((item, i) => (
                  <li key={i} className="break-words">{item}</li>
                ))}
              </ul>
            )}
            {section.subsections && section.subsections.map((subsection, subIndex) => (
              <div key={subIndex} className="mt-4">
                <h3 className="text-base sm:text-lg font-semibold mb-2">{subsection.title}</h3>
                <p className="break-words">{subsection.content}</p>
                {subsection.items && (
                  <ul className="list-disc pl-5 mt-2">
                    {subsection.items.map((item, i) => (
                      <li key={i} className="break-words">{item}</li>
                    ))}
                  </ul>
                )}
                {subsection.additionalContent && <p className="mt-2 break-words">{subsection.additionalContent}</p>}
                {subsection.additionalItems && (
                  <ul className="list-disc pl-5 mt-2">
                    {subsection.additionalItems.map((item, i) => (
                      <li key={i} className="break-words">{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            {section.additionalContent && <p className="mt-2 break-words">{section.additionalContent}</p>}
            {section.additionalItems && (
              <ul className="list-disc pl-5 mt-2">
                {section.additionalItems.map((item, i) => (
                  <li key={i} className="break-words">{item}</li>
                ))}
              </ul>
            )}
            {section.contactInfo && (
              <div className='flex flex-col mt-2'>
                {section.contactInfo.map((info, i) => (
                  <span key={i} className="break-words">{info}</span>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* END */}
      <div className="flex items-center justify-center m-5 gap-4 max-w-4xl mx-auto">
        <div className="h-0.5 w-full sm:w-[24rem] bg-white"></div>
        <div className="text-xl sm:text-2xl font-bold whitespace-nowrap">xxx</div>
        <div className="h-0.5 w-full sm:w-[24rem] bg-white"></div>
      </div>
    </section>
  );
}