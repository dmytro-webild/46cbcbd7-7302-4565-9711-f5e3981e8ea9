"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MediaAbout from '@/components/sections/about/MediaAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import MetricCardTen from '@/components/sections/metrics/MetricCardTen';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { Building2, Package, Zap, TrendingUp, HelpCircle, Mail } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="mediumLarge"
      sizing="largeSmallSizeLargeTitles"
      background="noiseDiagonalGradient"
      cardStyle="subtle-shadow"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="solid"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Products", id: "products" },
            { name: "Features", id: "features" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="EMM Enterprises"
          bottomLeftText="Cotton Manufacturing Excellence"
          bottomRightText="info@emmenterprises.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="EMM ENTERPRISES"
          description="Premium cotton manufacturing and textile solutions for global markets. Delivering excellence through advanced processing and sustainable practices."
          buttons={[
            { text: "Explore Products", href: "#products" },
            { text: "Get in Touch", href: "#contact" }
          ]}
          slides={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/plant-picture-clean-room-equipment-stainless-steel-machines_645730-397.jpg",              imageAlt: "Cotton field ready for harvest"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/knitting-tissue-with-sewing-machine_114579-12108.jpg",              imageAlt: "Cotton processing machinery"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/cloths-colored-with-different-natural-pigments-composition_23-2148734256.jpg",              imageAlt: "Finished cotton product packaging"
            }
          ]}
          autoplayDelay={4000}
          showDimOverlay={true}
          ariaLabel="EMM Enterprises hero carousel"
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          tag="About EMM Enterprises"
          tagIcon={Building2}
          tagAnimation="slide-up"
          title="Leading Cotton Manufacturing Excellence Since Inception"
          description="EMM Enterprises is a premier cotton manufacturing facility dedicated to producing the highest quality textile products. With state-of-the-art machinery, skilled workforce, and rigorous quality control standards, we serve global textile industries with consistent excellence and reliability."
          buttons={[
            { text: "Learn Our Process", href: "#features" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/agricultural-silos-building-exterior_146671-19113.jpg"
          imageAlt="EMM Enterprises cotton manufacturing facility"
          useInvertedBackground={false}
          ariaLabel="About EMM Enterprises"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Our Cotton Products"
          description="Premium cotton products manufactured with precision and care for diverse textile applications worldwide."
          tag="Product Range"
          tagIcon={Package}
          tagAnimation="slide-up"
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          gridVariant="three-columns-all-equal-width"
          animationType="scale-rotate"
          products={[
            {
              id: "raw-cotton",              brand: "EMM Enterprises",              name: "Raw Cotton Fiber",              price: "Contact for Quote",              rating: 5,
              reviewCount: "250+ orders",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-flannel-shirt-detail_23-2149575335.jpg",              imageAlt: "Premium raw cotton fiber"
            },
            {
              id: "cotton-yarn",              brand: "EMM Enterprises",              name: "Cotton Yarn (20s-40s)",              price: "Contact for Quote",              rating: 5,
              reviewCount: "180+ orders",              imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-yarn-spools_23-2148241988.jpg",              imageAlt: "Cotton yarn spools and rolls"
            },
            {
              id: "cotton-fabric",              brand: "EMM Enterprises",              name: "Cotton Fabric",              price: "Contact for Quote",              rating: 5,
              reviewCount: "320+ orders",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-flannel-shirt-detail_23-2149575394.jpg",              imageAlt: "Premium finished cotton fabric"
            }
          ]}
          ariaLabel="EMM Enterprises cotton products"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSix
          title="Why Choose EMM Enterprises"
          description="Trusted by textile manufacturers and exporters worldwide for quality, reliability, and consistent delivery."
          tag="Our Strengths"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              title: "Advanced Technology",              description: "State-of-the-art machinery and equipment ensuring superior product quality and consistent standards.",              imageSrc: "http://img.b2bpic.net/free-photo/knitting-tissue-with-sewing-machine_114579-12108.jpg",              imageAlt: "Advanced cotton processing technology"
            },
            {
              id: 2,
              title: "Quality Assurance",              description: "Rigorous testing and quality control at every stage of production for premium finished products.",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-flannel-shirt-detail_23-2149575394.jpg",              imageAlt: "Quality control and testing"
            },
            {
              id: 3,
              title: "Global Reach",              description: "Export-ready products meeting international standards and certifications for global markets.",              imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-yarn-spools_23-2148241988.jpg",              imageAlt: "Packaged products for export"
            }
          ]}
          ariaLabel="EMM Enterprises capabilities"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTen
          title="EMM Enterprises by Numbers"
          description="Our commitment to excellence reflected in measurable results and industry leadership."
          tag="Performance"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="scale-rotate"
          metrics={[
            {
              id: "production",              title: "Annual Production",              subtitle: "Capacity",              category: "Manufacturing",              value: "500+ MT"
            },
            {
              id: "countries",              title: "Global Markets",              subtitle: "Export Presence",              category: "International",              value: "35+ Countries"
            },
            {
              id: "clients",              title: "Satisfied Clients",              subtitle: "Long-term Partners",              category: "Business",              value: "200+ Clients"
            },
            {
              id: "experience",              title: "Years of Excellence",              subtitle: "Industry Experience",              category: "Heritage",              value: "15+ Years"
            }
          ]}
          ariaLabel="EMM Enterprises metrics"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about our products, services, and manufacturing processes."
          tag="Support"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          mediaAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/mid-adult-engineer-using-touchpad-communicating-with-african-american-worker-about-product-reports-industrial-building_637285-4098.jpg"
          imageAlt="Customer support and service"
          mediaPosition="right"
          faqs={[
            {
              id: "1",              title: "What is your minimum order quantity?",              content: "Our MOQ varies by product. For raw cotton, it's typically 5 MT. For yarn and fabric, contact our sales team for specific requirements based on your needs."
            },
            {
              id: "2",              title: "Do you offer customization services?",              content: "Yes, we offer customized cotton products including specific yarn counts, fabric weights, and finishing options to meet your exact requirements."
            },
            {
              id: "3",              title: "What certifications do you hold?",              content: "We maintain ISO 9001 certification and comply with international textile standards including OEKO-TEX and GOTS requirements for quality assurance."
            },
            {
              id: "4",              title: "What are your delivery timeframes?",              content: "Standard deliveries typically take 2-4 weeks. Expedited shipping options are available for urgent orders. Lead times depend on order volume and product type."
            },
            {
              id: "5",              title: "Do you provide samples?",              content: "Absolutely! We provide product samples for evaluation. Sample charges apply, which are typically credited toward your first order."
            },
            {
              id: "6",              title: "Are your products sustainable?",              content: "We implement sustainable practices in our manufacturing process and offer eco-friendly cotton options for environmentally conscious clients."
            }
          ]}
          ariaLabel="Frequently asked questions"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get in Touch"
          title="Contact EMM Enterprises"
          description="Reach out to discuss your cotton requirements, request samples, or explore partnership opportunities."
          tagIcon={Mail}
          tagAnimation="slide-up"
          background={{ variant: "gradient-bars" }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your email address"
          buttonText="Send Inquiry"
          termsText="By submitting this form, you agree to receive communications from EMM Enterprises about our products and services."
          ariaLabel="Contact EMM Enterprises"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Products", href: "#products" },
                { label: "Capabilities", href: "#features" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Products",              items: [
                { label: "Raw Cotton", href: "#products" },
                { label: "Cotton Yarn", href: "#products" },
                { label: "Cotton Fabric", href: "#products" },
                { label: "Custom Orders", href: "#contact" }
              ]
            },
            {
              title: "Resources",              items: [
                { label: "FAQ", href: "#faq" },
                { label: "Certifications", href: "#" },
                { label: "Quality Standards", href: "#" },
                { label: "Downloads", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Shipping Info", href: "#" },
                { label: "Contact", href: "#contact" }
              ]
            }
          ]}
          bottomLeftText="© 2024 EMM Enterprises. All rights reserved."
          bottomRightText="Dedicated to Cotton Excellence Worldwide"
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}