import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  requirements: string;
}

const services = [
  "AI Solutions",
  "Blockchain Development",
  "Fintech Solutions",
  "Custom Software Development",
  "Digital Transformation"
];

export const Contact = () => {
  const { currentLanguage } = useLanguage();
  const isArabic = currentLanguage === 'ar';
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    requirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Quote request submitted:', formData);
      
      toast({
        title: isArabic ? "تم إرسال الطلب بنجاح" : "Quote request sent successfully",
        description: isArabic ? "سنتواصل معك قريباً" : "We'll get back to you soon with a quote",
        variant: "default",
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        requirements: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: isArabic ? "حدث خطأ" : "Error",
        description: isArabic ? "حدث خطأ أثناء إرسال الطلب" : "There was an error sending your quote request",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-black" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {isArabic ? 'احصل على عرض سعر' : 'Get a Quote'}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {isArabic 
              ? 'شاركنا تفاصيل مشروعك للحصول على عرض سعر مخصص يناسب احتياجاتك'
              : 'Share your project details with us to receive a customized quote tailored to your needs'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-white text-sm">{isArabic ? 'الاسم' : 'Name'}</label>
                <Input 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={isArabic ? 'أدخل اسمك' : 'Enter name...'} 
                  className="bg-secondary-soft border-accent/20" 
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm">{isArabic ? 'رقم الهاتف' : 'Phone Number'}</label>
                <Input 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={isArabic ? 'أدخل رقم الهاتف' : 'Enter phone number...'} 
                  className="bg-secondary-soft border-accent/20" 
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm">{isArabic ? 'البريد الإلكتروني' : 'Email Address'}</label>
                <Input 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={isArabic ? 'أدخل بريدك الإلكتروني' : 'Enter email address...'} 
                  className="bg-secondary-soft border-accent/20" 
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm">{isArabic ? 'اختر الخدمة' : 'Choose Your Service'}</label>
                <Select
                  value={formData.service}
                  onValueChange={handleServiceChange}
                >
                  <SelectTrigger className="bg-secondary-soft border-accent/20">
                    <SelectValue placeholder={isArabic ? 'اختر الخدمة' : 'Select a service'} />
                  </SelectTrigger>
                  <SelectContent className="bg-secondary border border-accent/20">
                    {services.map((service) => (
                      <SelectItem 
                        key={service} 
                        value={service}
                        className="focus:bg-accent/10 focus:text-white"
                      >
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm">{isArabic ? 'المتطلبات' : 'Requirements'}</label>
                <Textarea 
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  placeholder={isArabic ? 'اكتب متطلبات مشروعك...' : 'Describe your project requirements...'} 
                  className="h-32 bg-secondary-soft border-accent/20" 
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent-soft text-black font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting 
                  ? (isArabic ? 'جاري الإرسال...' : 'Sending...') 
                  : (isArabic ? 'احصل على عرض سعر' : 'Get a Quote')}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">
                {isArabic ? 'معلومات الاتصال' : 'Contact Information'}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-[#00f5d4]" />
                  <span className="text-gray-400">+1-234-567-890</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-[#00f5d4]" />
                  <span className="text-gray-400">support@spl4bs.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-5 h-5 text-[#00f5d4]" />
                  <span className="text-gray-400">
                    {isArabic 
                      ? 'المقر الرئيسي لـ SP L4BS، وادي التكنولوجيا، دبي، الإمارات العربية المتحدة'
                      : 'SP L4BS Headquarters, Tech Valley, Dubai, UAE'}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">
                {isArabic ? 'تابعنا' : 'Follow Us'}
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 rounded-full bg-secondary-soft hover:bg-accent/10 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-[#00f5d4]" />
                  </a>
                ))}
              </div>
            </div>

            <div className="w-full h-64 rounded-lg overflow-hidden">
              <iframe
                title={isArabic ? 'موقع SP L4BS' : 'SP L4BS Location'}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178787593566!2d55.1466!3d25.0893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA1JzIxLjQiTiA1NcKwMDgnNDcuOCJF!5e0!3m2!1sen!2sae!4v1625641111111!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
